import Link from "next/link"

export default function AuthDemoPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-zinc-900">Authentication Flow Demo</h1>
          <p className="mt-4 text-lg text-zinc-600">
            Complete authentication system with Nigerian cultural theme and automatic image carousel
          </p>
        </div>

        {/* Screen Links */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AUTH_SCREENS.map((screen) => (
            <Link
              key={screen.href}
              href={screen.href}
              className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-[#2D8B3F] hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#2D8B3F]/10 px-3 py-1 text-xs font-medium text-[#2D8B3F]">
                    {screen.label}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-[#2D8B3F]">
                    {screen.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">{screen.description}</p>
                </div>
                <div className="ml-4">
                  <svg
                    className="h-5 w-5 text-zinc-400 transition group-hover:translate-x-1 group-hover:text-[#2D8B3F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900">Features</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURES.map((feature, index) => (
              <div key={index} className="flex gap-4 rounded-lg border border-zinc-200 bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2D8B3F]/10">
                  <svg className="h-6 w-6 text-[#2D8B3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900">{feature.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2D8B3F] hover:underline"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

const AUTH_SCREENS = [
  {
    href: "/auth/login",
    label: "Screen 1",
    title: "Login",
    description: "Welcome Back - Standard login form"
  },
  {
    href: "/auth/login-error",
    label: "Screen 2",
    title: "Login with Error",
    description: "Login form with password error state"
  },
  {
    href: "/auth/signup",
    label: "Screen 3-4",
    title: "Sign Up",
    description: "Create an account with form validation"
  },
  {
    href: "/auth/reset-password",
    label: "Screen 5",
    title: "Reset Password",
    description: "Request password reset via email"
  },
  {
    href: "/auth/verify-code",
    label: "Screen 6",
    title: "Verification Code",
    description: "Enter email verification code"
  },
  {
    href: "/auth/update-password",
    label: "Screen 7",
    title: "Update Password",
    description: "Set new password after verification"
  }
]

const FEATURES = [
  {
    title: "Auto-rotating Carousel",
    description: "7 diverse Nigerian portraits with smooth transitions and navigation dots"
  },
  {
    title: "Responsive Design",
    description: "50/50 split on desktop, stacked layout on mobile devices"
  },
  {
    title: "Form Validation",
    description: "Real-time error states and proper accessibility considerations"
  },
  {
    title: "Cultural Theme",
    description: "Beige carousel background with Nigerian portraits in traditional attire"
  },
  {
    title: "Google OAuth",
    description: "Alternative sign-in option with Google integration"
  },
  {
    title: "Modern UI",
    description: "Clean interface with consistent green branding and smooth animations"
  }
]

