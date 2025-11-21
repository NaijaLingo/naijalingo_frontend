import Link from "next/link"

import { AuthLayout } from "@/app/components/auth-layout"
import { LoginForm } from "./login-form"

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#2D8B3F] lg:text-4xl">Welcome Back</h1>
          <p className="mt-2 text-lg text-zinc-700 lg:text-xl">Access your NaijaLingo dashboard</p>
        </div>
        <LoginForm />
        <p className="text-center text-sm text-zinc-600">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="font-semibold text-[#2D8B3F] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}