"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { useAuthSession } from "@/app/components/auth-session-provider"

export function LogoutButton() {
  const router = useRouter()
  const { clearSession } = useAuthSession()
  const [isSigningOut, setIsSigningOut] = useState(false)

  function handleLogout() {
    setIsSigningOut(true)
    clearSession()
    router.replace("/auth/login")
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isSigningOut}
      className="rounded-full bg-[#2D8B3F] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#26a643] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {isSigningOut ? "Signing out..." : "Logout"}
    </button>
  )
}

