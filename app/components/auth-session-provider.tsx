"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

import {
  clearAuthSession,
  fetchUserProfile,
  getSessionTokens,
  normalizeLoginTokens,
  persistAuthSession
} from "@/services/auth"
import type { AuthTokens, LoginResponseBody, UserProfile } from "@/services/auth"

interface AuthSessionContextValue {
  user: UserProfile | null
  tokens: AuthTokens | null
  isHydrated: boolean
  isLoading: boolean
  error?: string
  hasSession: boolean
  completeLogin: (response: LoginResponseBody) => Promise<void>
  refreshUser: () => Promise<void>
  clearSession: () => void
}

const AuthSessionContext = createContext<AuthSessionContextValue | undefined>(undefined)

export function AuthSessionProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [tokens, setTokens] = useState<AuthTokens | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>()

  const syncFromStorage = useCallback(async () => {
    const stored = getSessionTokens()
    if (!stored.accessToken) {
      setUser(null)
      setTokens(null)
      setIsHydrated(true)
      return
    }

    setTokens(stored)
    setIsLoading(true)
    try {
      const profile = await fetchUserProfile(stored.accessToken)
      setUser(profile)
    } catch (syncError) {
      const message = syncError instanceof Error ? syncError.message : "Unable to load your profile."
      setError(message)
      setUser(null)
    } finally {
      setIsLoading(false)
      setIsHydrated(true)
    }
  }, [])

  useEffect(() => {
    syncFromStorage()
  }, [syncFromStorage])

  useEffect(() => {
    if (typeof window === "undefined") return
    const handleStorage = () => {
      const stored = getSessionTokens()
      if (!stored.accessToken) {
        setTokens(null)
        setUser(null)
        setIsHydrated(true)
        return
      }
      setTokens(stored)
    }

    window.addEventListener("storage", handleStorage)
    return () => window.removeEventListener("storage", handleStorage)
  }, [])

  const completeLogin = useCallback(async (response: LoginResponseBody) => {
    const normalized = normalizeLoginTokens(response)
    persistAuthSession(normalized)
    setTokens(normalized)
    setIsLoading(true)
    setError(undefined)
    try {
      const profile = await fetchUserProfile(normalized.accessToken)
      setUser(profile)
    } catch (loginError) {
      const message = loginError instanceof Error ? loginError.message : "Unable to fetch your profile."
      setError(message)
      throw loginError
    } finally {
      setIsLoading(false)
      setIsHydrated(true)
    }
  }, [])

  const refreshUser = useCallback(async () => {
    const currentTokens = tokens ?? getSessionTokens()
    if (!currentTokens.accessToken) {
      setUser(null)
      return
    }
    setIsLoading(true)
    setError(undefined)
    try {
      const profile = await fetchUserProfile(currentTokens.accessToken)
      setUser(profile)
    } catch (refreshError) {
      const message = refreshError instanceof Error ? refreshError.message : "Unable to refresh your profile."
      setError(message)
      setUser(null)
      clearAuthSession()
      setTokens(null)
    } finally {
      setIsLoading(false)
    }
  }, [tokens])

  const clearSession = useCallback(() => {
    clearAuthSession()
    setTokens(null)
    setUser(null)
    setError(undefined)
    setIsHydrated(true)
  }, [])

  const value = useMemo<AuthSessionContextValue>(
    () => ({
      user,
      tokens,
      isHydrated,
      isLoading,
      error,
      hasSession: Boolean(tokens?.accessToken),
      completeLogin,
      refreshUser,
      clearSession
    }),
    [user, tokens, isHydrated, isLoading, error, completeLogin, refreshUser, clearSession]
  )

  return <AuthSessionContext.Provider value={value}>{children}</AuthSessionContext.Provider>
}

export function useAuthSession() {
  const context = useContext(AuthSessionContext)
  if (!context) throw new Error("useAuthSession must be used within AuthSessionProvider")
  return context
}

