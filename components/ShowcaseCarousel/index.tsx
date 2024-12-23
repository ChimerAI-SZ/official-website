"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

// 生成图片数组，从1到23
const showcaseItems = Array.from({ length: 23 }, (_, i) => ({
  image: `/assets/images/dresses/${i + 1}.jpeg`,
  title: `Dress ${i + 1}`
}))

const ShowcaseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % showcaseItems.length)
    }, 3000) // 调整为3秒切换一次，因为图片较多

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full bg-gradient-to-r from-[#000B1F] via-[#321B47] to-[#321B47] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-center font-inter text-[2.75rem] font-bold mb-16">Showcase</h2>

        {/* 轮播容器 */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex gap-6 overflow-hidden">
            {showcaseItems.map((item, index) => (
              <div
                key={index}
                className={`relative w-[300px] h-[400px] rounded-2xl overflow-hidden flex-shrink-0 transition-transform duration-500`}
                style={{
                  transform: `translateX(-${currentIndex * (300 + 24)}px)` // 300px 宽度 + 24px 间距
                }}
              >
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="300px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseCarousel
