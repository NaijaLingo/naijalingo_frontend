"use client"

import { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"

import FemaleHausaProfilePortrait from "@/app/assets/Female_Hausa_Profile_Portrait.png"
import FemaleIgboProfileFull from "@/app/assets/Female_Igbo_Profile_Full.png"
import FemaleYorubaProfile from "@/app/assets/Female_Yoruba_Profile.png"
import MaleHausaProfilePortrait from "@/app/assets/Male_Hausa_Profile_Portrait.png"
import MaleIgboProfileFull from "@/app/assets/male_igbo_profile_full.png"

interface CarouselImage {
  src: StaticImageData
  alt: string
}

const CAROUSEL_IMAGES: CarouselImage[] = [
  {
    src: FemaleYorubaProfile,
    alt: "Woman wearing gele with patterned agbada"
  },
  {
    src: FemaleIgboProfileFull,
    alt: "Woman dressed in aso-oke wrapper with coral beads"
  },
  {
    src: FemaleHausaProfilePortrait,
    alt: "Woman wearing burgundy hijab and embroidered bubu"
  },
  {
    src: MaleIgboProfileFull,
    alt: "Man in burgundy brocade with traditional beads"
  },
  {
    src: MaleHausaProfilePortrait,
    alt: "Man wearing traditional cap and embroidered attire"
  }
]

const AUTO_PLAY_INTERVAL = 2000

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
          <div className="relative h-full w-full max-w-sm overflow-hidden rounded-[32px] lg:max-w-none shadow-xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-top bg-[#C8C0B8]"
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

