"use client"

import Image from "next/image"
import type { StaticImageData } from "next/image"
import { useEffect, useMemo, useState } from "react"

export interface DemoCarouselItem {
  alt: string
  src: StaticImageData
}

interface DemoImageCarouselProps {
  items: DemoCarouselItem[]
  intervalMs?: number
}

export function DemoImageCarousel({ items, intervalMs = 4000 }: DemoImageCarouselProps) {
  const slides = useMemo(() => items.filter((item) => item.src), [items])

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return undefined

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [intervalMs, slides.length])

  if (slides.length === 0) return null

  return (
    <div className="relative rounded-[24px] border border-white/5 bg-[#2b2b2b] p-5">
      <div className="relative overflow-hidden rounded-[20px] bg-[#d9d1cb]">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex

          return (
            <div
              key={slide.alt}
              className="absolute inset-0"
              aria-hidden={!isActive}
              style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 800ms ease",
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1280px) 360px, (min-width: 1024px) 320px"
                className="object-cover"
              />
            </div>
          )
        })}
        <div className="relative h-[260px] sm:h-[320px] lg:h-[360px] xl:h-[420px]" />
      </div>
      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex

          return (
            <span
              key={slide.alt}
              aria-hidden
              className="h-1 rounded-full transition"
              style={{
                width: isActive ? "34px" : "24px",
                backgroundColor: isActive ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.2)",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

