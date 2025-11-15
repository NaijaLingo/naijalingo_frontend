"use client"

import { useState } from "react"
import Link from "next/link"
import { AuthLayout } from "@/app/components/auth-layout"

export default function UpdatePasswordPage() {
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <AuthLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#2D8B3F] lg:text-4xl">Update password</h1>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* New Password Field */}
          <div className="space-y-2">
            <label htmlFor="newPassword" className="block text-sm font-medium text-zinc-700">
              Enter new password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                placeholder="Password"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 pr-12 text-zinc-900 placeholder:text-zinc-400 focus:border-[#2D8B3F] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]/20"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <EyeIcon className="h-5 w-5 text-zinc-400" />
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-zinc-700">
              Confirm password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Password"
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 pr-12 text-zinc-900 placeholder:text-zinc-400 focus:border-[#2D8B3F] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]/20"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <EyeIcon className="h-5 w-5 text-zinc-400" />
              </button>
            </div>
          </div>

          {/* Update Password Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#2D8B3F] py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#26a643] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F] focus:ring-offset-2"
          >
            Update password
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

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 10s2.5-5 7.5-5 7.5 5 7.5 5-2.5 5-7.5 5-7.5-5-7.5-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

