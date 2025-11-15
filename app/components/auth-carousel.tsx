"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface CarouselImage {
  src: string
  alt: string
}

const CAROUSEL_IMAGES: CarouselImage[] = [
  {
    src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&h=1000&fit=crop&crop=faces",
    alt: "Man in blue agbada with gold embroidery and FILA cap"
  },
  {
    src: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=800&h=1000&fit=crop&crop=faces",
    alt: "Woman in purple gele and wrapper with gold details"
  },
  {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=1000&fit=crop&crop=faces",
    alt: "Woman in black shirt with colorful ankara collar and braids"
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=faces",
    alt: "Man in burgundy brocade with traditional beads"
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop&crop=faces",
    alt: "Man in white embroidered agbada with traditional cap"
  },
  {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=1000&fit=crop&crop=faces",
    alt: "Woman in emerald green and gold ankara with matching gele"
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&crop=faces",
    alt: "Woman in burgundy hijab and embroidered bubu"
  }
]

const AUTO_PLAY_INTERVAL = 4000

export function AuthCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, AUTO_PLAY_INTERVAL)

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <div 
      className="relative h-[420px] w-full overflow-hidden bg-white lg:h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      {CAROUSEL_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-700 lg:p-8 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full w-full max-w-sm overflow-hidden rounded-[32px] lg:max-w-none">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 z-10 lg:bottom-8">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all lg:h-2 ${
              index === currentIndex 
                ? "w-6 bg-zinc-800 lg:w-8" 
                : "w-1.5 bg-zinc-400 hover:bg-zinc-600 lg:w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

