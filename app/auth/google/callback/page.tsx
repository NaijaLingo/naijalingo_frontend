"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

import { useAuthSession } from "@/app/components/auth-session-provider"
import { AuthServiceError, completeGoogleLogin, extractAuthErrorMessage } from "@/services/auth"

export default function GoogleCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { completeLogin } = useAuthSession()
  const [error, setError] = useState<string>()
  const [isProcessing, setIsProcessing] = useState(true)

  const readableError = useMemo(() => error ?? "Unable to complete Google sign in.", [error])

  useEffect(() => {
    async function handleCallback() {
      setIsProcessing(true)
      setError(undefined)
      try {
        const params = new URLSearchParams(searchParams.toString())
        const tokens = await completeGoogleLogin(params)
        await completeLogin(tokens)
        router.replace("/dashboard")
      } catch (callbackError) {
        if (callbackError instanceof AuthServiceError) {
          const detail = extractAuthErrorMessage(callbackError.body) ?? callbackError.message
          setError(detail)
        } else {
          setError("Something went wrong while signing you in with Google.")
        }
      } finally {
        setIsProcessing(false)
      }
    }

    handleCallback()
  }, [completeLogin, router, searchParams])

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto max-w-xl space-y-6 rounded-3xl bg-white p-8 text-center shadow-lg">
        <h1 className="text-2xl font-semibold text-zinc-900">Connecting your Google account…</h1>
        {isProcessing && <p className="text-sm text-zinc-600">Please wait while we finalize your login.</p>}
        {!isProcessing && error && (
          <>
            <p className="text-sm text-red-600">{readableError}</p>
            <div className="flex items-center justify-center gap-3">
              <Link
                href="/auth/login"
                className="rounded-full bg-[#2D8B3F] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#26a643]"
              >
                Back to login
              </Link>
              <button
                type="button"
                onClick={() => router.replace("/auth/login")}
                className="rounded-full border border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900"
              >
                Use another method
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

