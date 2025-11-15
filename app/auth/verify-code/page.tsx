"use client"

import Link from "next/link"
import { AuthLayout } from "@/app/components/auth-layout"

export default function VerifyCodePage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#2D8B3F] lg:text-4xl">Enter Code</h1>
          <p className="mt-2 text-base text-zinc-600">Check your email for the code</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Verification Code Field */}
          <div className="space-y-2">
            <label htmlFor="code" className="block text-sm font-medium text-zinc-700">
              Enter code
            </label>
            <input
              type="text"
              id="code"
              placeholder="Verification code"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-[#2D8B3F] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]/20"
            />
          </div>

          {/* Send Code Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#2D8B3F] py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#26a643] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F] focus:ring-offset-2"
          >
            Send code
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-zinc-600">
          Didn't receive code?{" "}
          <Link href="/auth/reset-password" className="font-semibold text-[#2D8B3F] hover:underline">
            Resend
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}

