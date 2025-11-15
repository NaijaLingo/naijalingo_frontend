import { AuthCarousel } from "./auth-carousel"

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white lg:h-screen lg:flex-row lg:overflow-hidden">
      {/* Top/Left - Carousel */}
      <div className="shrink-0 lg:h-full lg:w-1/2">
        <AuthCarousel />
      </div>

      {/* Bottom/Right - Form Content */}
      <div className="flex flex-1 items-center justify-center overflow-y-auto bg-white px-6 py-8 lg:h-full lg:w-1/2 lg:px-12 lg:py-12">
        <div className="w-full max-w-lg">
          {children}
        </div>
      </div>
    </div>
  )
}

