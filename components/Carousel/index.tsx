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
    <div className="relative w-full pt-20">
      {/* 轮播图片 */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={image.url} alt={image.alt} fill priority={index === 0} className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2
                className="text-4xl sm:text-5xl md:text-[4.25rem] text-white font-bold font-inter"
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
      </div>

      {/* 指示器容器 */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="w-[120px] h-[40px] sm:w-[140px] sm:h-[46px] md:w-[158px] md:h-[52px] rounded-[20px] sm:rounded-[23px] md:rounded-[26px] flex items-center justify-center gap-[18px] sm:gap-[22px] md:gap-[26px] px-4 sm:px-5 md:px-6"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.48)" }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                currentIndex === index
                  ? "w-6 sm:w-7 md:w-8 h-1.5 sm:h-2 bg-white rounded-full"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
