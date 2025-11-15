"use client"

import { useState } from "react"
import Link from "next/link"
import { AuthLayout } from "@/app/components/auth-layout"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <AuthLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#2D8B3F] lg:text-4xl">Welcome Back</h1>
          <p className="mt-2 text-lg text-zinc-700 lg:text-xl">Abdurrazak Bello</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 pr-12 text-zinc-900 placeholder:text-zinc-400 focus:border-[#2D8B3F] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]/20"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <EnvelopeIcon className="h-5 w-5 text-zinc-400" />
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-zinc-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className={`w-full rounded-lg border px-4 py-3 pr-12 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 ${
                  hasError 
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
                    : "border-zinc-300 focus:border-[#2D8B3F] focus:ring-[#2D8B3F]/20"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <EyeIcon className="h-5 w-5 text-zinc-400" />
              </button>
            </div>
            {hasError && (
              <div className="flex items-center gap-2 text-sm text-red-600">
                <AlertIcon className="h-4 w-4" />
                <span>Wrong password ?</span>
              </div>
            )}
            <div className="text-right">
              <Link href="/auth/reset-password" className="text-sm font-medium text-[#2D8B3F] hover:underline">
                Forgot password ?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#2D8B3F] py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#26a643] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F] focus:ring-offset-2"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-zinc-300" />
            <span className="text-sm text-zinc-500">or</span>
            <div className="h-px flex-1 bg-zinc-300" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white py-3 text-base font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
          >
            <GoogleIcon className="h-5 w-5" />
            Login with Google
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-zinc-600">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="font-semibold text-[#2D8B3F] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 5.833A1.667 1.667 0 0 1 4.167 4.167h11.666A1.667 1.667 0 0 1 17.5 5.833v8.334a1.667 1.667 0 0 1-1.667 1.666H4.167A1.667 1.667 0 0 1 2.5 14.167V5.833Z" />
      <path d="m2.5 6.667 7.5 5 7.5-5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 10s2.5-5 7.5-5 7.5 5 7.5 5-2.5 5-7.5 5-7.5-5-7.5-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
    </svg>
  )
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.17 8.36h-.87v-.04H10v3.33h4.71a5 5 0 1 1-1.46-5.94l2.35-2.36A8.32 8.32 0 1 0 18.33 10c0-.55-.05-1.09-.16-1.64Z" fill="#FFC107" />
      <path d="m2.61 6.61 2.73 2a5 5 0 0 1 9.31-2.61l2.35-2.36A8.33 8.33 0 0 0 2.61 6.61Z" fill="#FF3D00" />
      <path d="M10 18.33a8.28 8.28 0 0 0 5.39-1.98l-2.49-2.1A4.96 4.96 0 0 1 5.34 12l-2.73 2.11a8.32 8.32 0 0 0 7.39 4.22Z" fill="#4CAF50" />
      <path d="M18.17 8.36h-.87v-.04H10v3.33h4.71a5.01 5.01 0 0 1-1.81 2.6l2.49 2.1c-.18.16 2.94-2.14 2.94-6.35 0-.55-.05-1.09-.16-1.64Z" fill="#1976D2" />
    </svg>
  )
}

