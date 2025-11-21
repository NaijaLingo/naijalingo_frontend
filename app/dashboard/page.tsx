"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { LogoutButton } from "@/app/dashboard/logout-button"
import { useAuthSession } from "@/app/components/auth-session-provider"

export default function DashboardPage() {
  const { user, isHydrated, isLoading, hasSession, refreshUser, error } = useAuthSession()
  const router = useRouter()

  useEffect(() => {
    if (!isHydrated) return
    if (!hasSession) router.replace("/auth/login")
    if (hasSession && !user && !isLoading) refreshUser()
  }, [hasSession, isHydrated, isLoading, refreshUser, router, user])

  if (!isHydrated || isLoading) {
    return (
      <main className="min-h-screen bg-zinc-50 px-6 py-12">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
          <p className="text-sm text-zinc-600">Loading your dashboard...</p>
        </div>
      </main>
    )
  }

  if (!hasSession) return null

  if (!user) {
    return (
      <main className="min-h-screen bg-zinc-50 px-6 py-12">
        <div className="mx-auto max-w-xl space-y-4 rounded-3xl bg-white p-8 text-center shadow-lg">
          <p className="text-lg font-semibold text-zinc-900">We could not load your profile.</p>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="button"
            onClick={() => refreshUser()}
            className="rounded-full bg-[#2D8B3F] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#26a643]"
          >
            Try again
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-8 rounded-3xl bg-white p-8 shadow-lg">
        <header className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#2D8B3F]">Dashboard</p>
          <h1 className="text-3xl font-bold text-zinc-900">Welcome, {user.firstname}</h1>
          <p className="text-zinc-600">You are now signed in to NaijaLingo. Explore the product from the main navigation.</p>
        </header>

        <section className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Account overview</h2>
          <dl className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-zinc-50 p-4">
              <dt className="text-sm text-zinc-500">Email</dt>
              <dd className="text-base font-medium text-zinc-900">{user.email}</dd>
            </div>
            <div className="rounded-xl bg-zinc-50 p-4">
              <dt className="text-sm text-zinc-500">Status</dt>
              <dd className="text-base font-medium text-[#2D8B3F]">{user.is_verified ? "Verified" : "Pending verification"}</dd>
            </div>
          </dl>
        </section>

        <LogoutButton />
      </div>
    </main>
  )
}

