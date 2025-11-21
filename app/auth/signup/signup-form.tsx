"use client"

import { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { AuthServiceError, buildGoogleLoginUrl, extractAuthErrorMessage, registerUser } from "@/services/auth"

const formSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters"),
  lastname: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Provide a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Confirm password must be at least 8 characters"),
  phone: z.string().optional()
})

type SignupFormValues = z.infer<typeof formSchema>

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverErrorMessage, setServerErrorMessage] = useState<string>()
  const [successMessage, setSuccessMessage] = useState<string>()

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(
      formSchema.refine(values => values.password === values.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
      })
    ),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: ""
    }
  })

  const onSubmit = form.handleSubmit(async values => {
    setServerErrorMessage(undefined)
    setSuccessMessage(undefined)
    setIsSubmitting(true)
    try {
      const response = await registerUser(values)
      setSuccessMessage(response.message)
      form.reset()
    } catch (error) {
      if (error instanceof AuthServiceError) {
        const detail = extractAuthErrorMessage(error.body) ?? error.message
        setServerErrorMessage(detail)
        return
      }
      setServerErrorMessage("Unable to create your account right now.")
    } finally {
      setIsSubmitting(false)
    }
  })

  function handleGoogleSignup() {
    if (typeof window === "undefined") return
    const loginUrl = buildGoogleLoginUrl(window.location.origin)
    window.location.href = loginUrl
  }

  const errorMessage = useMemo(() => {
    if (serverErrorMessage) return serverErrorMessage
    return undefined
  }, [serverErrorMessage])

  return (
    <div className="space-y-4">
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="First name" error={form.formState.errors.firstname?.message}>
            <input
              type="text"
              {...form.register("firstname")}
              placeholder="First name"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-[#2D8B3F] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]/20"
            />
          </FormField>
          <FormField label="Last name" error={form.formState.errors.lastname?.message}>
            <input
              type="text"
              {...form.register("lastname")}
              placeholder="Last name"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-[#2D8B3F] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]/20"
            />
          </FormField>
        </div>

        <FormField label="Email" error={form.formState.errors.email?.message}>
          <div className="relative">
            <input
              type="email"
              {...form.register("email")}
              placeholder="Email"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 pr-12 text-zinc-900 placeholder:text-zinc-400 focus:border-[#2D8B3F] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]/20"
            />
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
              <EnvelopeIcon className="h-5 w-5 text-zinc-400" />
            </div>
          </div>
        </FormField>

        <FormField label="Phone (optional)" error={form.formState.errors.phone?.message}>
          <input
            type="tel"
            {...form.register("phone")}
            placeholder="Phone number"
            className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-[#2D8B3F] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]/20"
          />
        </FormField>

        <FormField label="Password" error={form.formState.errors.password?.message}>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...form.register("password")}
              placeholder="Password"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 pr-12 text-zinc-900 placeholder:text-zinc-400 focus:border-[#2D8B3F] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(value => !value)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
            >
              <EyeIcon className="h-5 w-5" />
            </button>
          </div>
        </FormField>

        <FormField label="Confirm password" error={form.formState.errors.confirmPassword?.message}>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              {...form.register("confirmPassword")}
              placeholder="Confirm password"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 pr-12 text-zinc-900 placeholder:text-zinc-400 focus:border-[#2D8B3F] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F]/20"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(value => !value)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
            >
              <EyeIcon className="h-5 w-5" />
            </button>
          </div>
        </FormField>

        {errorMessage && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {successMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-[#2D8B3F] py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#26a643] focus:outline-none focus:ring-2 focus:ring-[#2D8B3F] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Creating account..." : "Sign up"}
        </button>
      </form>

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-300" />
        <span className="text-sm text-zinc-500">or</span>
        <div className="h-px flex-1 bg-zinc-300" />
      </div>

      <button
        type="button"
        onClick={handleGoogleSignup}
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white py-3 text-base font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
      >
        <GoogleIcon className="h-5 w-5" />
        Sign up with Google
      </button>
    </div>
  )
}

function FormField({
  label,
  error,
  children
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-zinc-700">{label}</label>
      {children}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
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

