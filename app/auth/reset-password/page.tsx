"use client"

import Link from "next/link"
import { AuthLayout } from "@/app/components/auth-layout"

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#2D8B3F] lg:text-4xl">Reset password</h1>
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

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#2D8B3F] py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#26a643] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F] focus:ring-offset-2"
          >
            Reset password
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-zinc-600">
          Remember your password?{" "}
          <Link href="/auth/login" className="font-semibold text-[#2D8B3F] hover:underline">
            Login
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

