import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_NAIJALINGO_API_URL ?? "https://naijalingo-web-service.onrender.com"
const ACCESS_TOKEN_KEY = "nl-access-token"
const REFRESH_TOKEN_KEY = "nl-refresh-token"
const http = axios.create({
  baseURL: API_BASE_URL,
  headers: { Accept: "application/json" },
  timeout: 15000
})

export interface RegisterPayload {
  firstname: string
  lastname: string
  email: string
  password: string
  confirmPassword: string
  phone?: string | null
}

export interface LoginPayload {
  email: string
  password: string
}

export interface AuthTokens {
  accessToken: string
  refreshToken?: string
  tokenType?: string
  expiresIn?: number
}

export interface UserProfile {
  id: string
  email: string
  firstname: string
  lastname: string
  is_active?: boolean | null
  is_verified?: boolean | null
  is_admin?: boolean | null
  is_superadmin?: boolean | null
}

export interface AuthMessage {
  message: string
}

export interface LoginResponseBody {
  access_token: string
  refresh_token?: string
  token_type?: string
  expires_in?: number
}

const emptyTokens: AuthTokens = { accessToken: "" }

export class AuthServiceError extends Error {
  readonly status: number
  readonly body?: unknown

  constructor({ message, status, body }: { message: string; status: number; body?: unknown }) {
    super(message)
    this.name = "AuthServiceError"
    this.status = status
    this.body = body
  }
}

function handleRequestError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status ?? 500
    const body = error.response?.data
    const message =
      extractAuthErrorMessage(body) ||
      error.message ||
      "Authentication request failed"
    throw new AuthServiceError({ message, status, body })
  }

  throw new AuthServiceError({
    message: "Authentication request failed",
    status: 500,
    body: error
  })
}

export function extractAuthErrorMessage(body: unknown) {
  if (!body || typeof body !== "object") return undefined
  if ("detail" in body) {
    const detail = (body as Record<string, unknown>).detail
    if (typeof detail === "string") return detail
    if (Array.isArray(detail) && detail[0] && typeof detail[0] === "object" && "msg" in detail[0]) {
      const message = (detail[0] as Record<string, unknown>).msg
      if (typeof message === "string") return message
    }
  }

  if ("message" in body && typeof (body as Record<string, unknown>).message === "string") {
    return (body as Record<string, string>).message
  }

  return undefined
}

export async function registerUser(payload: RegisterPayload): Promise<AuthMessage> {
  try {
    const { data } = await http.post<AuthMessage>("/api/v1/auth/register", {
      firstname: payload.firstname,
      lastname: payload.lastname,
      email: payload.email,
      password: payload.password,
      confirm_password: payload.confirmPassword,
      phone: payload.phone
    })
    return data
  } catch (error) {
    return handleRequestError(error)
  }
}

export async function loginWithPassword(payload: LoginPayload): Promise<LoginResponseBody> {
  const form = new URLSearchParams()
  form.set("grant_type", "password")
  form.set("username", payload.email)
  form.set("password", payload.password)

  try {
    const { data } = await http.post<LoginResponseBody>("/api/v1/auth/login", form.toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })

    return data
  } catch (error) {
    return handleRequestError(error)
  }
}

export async function fetchUserProfile(accessToken?: string): Promise<UserProfile> {
  const sessionTokens = getSessionTokens()
  const token = accessToken ?? sessionTokens.accessToken
  if (!token) throw new AuthServiceError({ message: "Missing access token", status: 401 })

  try {
    const { data } = await http.get<UserProfile>("/api/v1/auth/me", {
      headers: { Authorization: `Bearer ${token}` }
    })
    return data
  } catch (error) {
    return handleRequestError(error)
  }
}

function isBrowser() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined"
}

export function persistAuthSession(tokens: AuthTokens) {
  if (!isBrowser()) return
  const store = window.localStorage
  if (tokens.accessToken) store.setItem(ACCESS_TOKEN_KEY, tokens.accessToken)
  if (tokens.refreshToken) store.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken)
  if (!tokens.refreshToken) store.removeItem(REFRESH_TOKEN_KEY)
}

export function clearAuthSession() {
  if (!isBrowser()) return
  const store = window.localStorage
  store.removeItem(ACCESS_TOKEN_KEY)
  store.removeItem(REFRESH_TOKEN_KEY)
}

export function getSessionTokens(): AuthTokens {
  if (!isBrowser()) return emptyTokens
  const store = window.localStorage
  return {
    accessToken: store.getItem(ACCESS_TOKEN_KEY) ?? "",
    refreshToken: store.getItem(REFRESH_TOKEN_KEY) ?? undefined
  }
}

export function normalizeLoginTokens(response: LoginResponseBody): AuthTokens {
  return {
    accessToken: response.access_token,
    refreshToken: response.refresh_token,
    tokenType: response.token_type,
    expiresIn: response.expires_in
  }
}

export function buildGoogleLoginUrl(origin: string) {
  const callback = new URL("/auth/google/callback", origin)
  const url = new URL("/api/v1/auth/google/login", API_BASE_URL)
  url.searchParams.set("redirect_uri", callback.toString())
  return url.toString()
}

export async function completeGoogleLogin(searchParams: URLSearchParams): Promise<LoginResponseBody> {
  try {
    const params = Object.fromEntries(searchParams.entries())
    const { data } = await http.get<LoginResponseBody>("/api/v1/auth/google/callback", { params })

    return data
  } catch (error) {
    return handleRequestError(error)
  }
}
