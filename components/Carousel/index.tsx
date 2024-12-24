"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface CarouselProps {
  images: {
    url: string
    alt: string
    title: string
  }[]
  autoPlayInterval?: number
}

export default function Carousel({ images, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [autoPlayInterval, images.length])

  return (
    <div className="relative w-screen h-[calc(100vh-70px)] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={image.url} alt={image.alt} fill priority={index === 0} className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className="text-[1.5rem] xs:text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.25rem] 2xl:text-[5rem] text-white font-bold font-inter"
              style={{
                fontFeatureSettings: "'liga' off, 'clig' off",
                lineHeight: "normal"
              }}
            >
              {image.title}
            </h2>
          </div>
        </div>
      ))}

      {/* 指示器容器 */}
      <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="min-w-[7.5rem] h-[32px] xs:min-w-[7.5rem] xs:h-[40px] sm:min-w-[3.08719rem] sm:h-[46px] md:min-w-[6.125rem] md:h-[52px] 
            rounded-[16px] xs:rounded-[20px] sm:rounded-[23px] md:rounded-[26px] 
            flex items-center justify-center 
            gap-[14px] xs:gap-[18px] sm:gap-[22px] md:gap-[26px] 
            px-3 xs:px-4 sm:px-5 md:px-6"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.48)" }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`shrink-0 transition-all duration-300 ${
                currentIndex === index
                  ? "w-5 xs:w-6 sm:w-7 md:w-8 h-1 xs:h-1.5 sm:h-2 bg-white rounded-full"
                  : "w-1 xs:w-1.5 sm:w-2 h-1 xs:h-1.5 sm:h-2 bg-white rounded-full"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
