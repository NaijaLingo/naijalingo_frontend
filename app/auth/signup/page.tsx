import Link from "next/link"

import { AuthLayout } from "@/app/components/auth-layout"
import { SignupForm } from "./signup-form"

export default function SignupPage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#2D8B3F] lg:text-4xl">Welcome</h1>
          <p className="mt-2 text-lg text-zinc-700 lg:text-xl">Create an account</p>
        </div>
        <SignupForm />
        <p className="text-center text-sm text-zinc-600">
          Have an account?{" "}
          <Link href="/auth/login" className="font-semibold text-[#2D8B3F] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}