"use client"

import { useState } from "react"
import Image from "next/image"

type Tab = "Fashionistas" | "Indie Brand" | "Retailer" | "Fashion Giant"

const tabs: Tab[] = ["Fashionistas", "Indie Brand", "Retailer", "Fashion Giant"]

const tabImages: Record<Tab, { desktop: string; mobile: string }> = {
  Fashionistas: {
    desktop: "/assets/images/home/fashionista1.png",
    mobile: "/assets/images/home/xs-fashionista1.png"
  },
  "Indie Brand": {
    desktop: "/assets/images/home/fashionista2.png",
    mobile: "/assets/images/home/xs-fashionista2.png"
  },
  Retailer: {
    desktop: "/assets/images/home/fashionista3.png",
    mobile: "/assets/images/home/xs-fashionista3.png"
  },
  "Fashion Giant": {
    desktop: "/assets/images/home/fashionista4.png",
    mobile: "/assets/images/home/xs-fashionista4.png"
  }
}

const WeServe = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Fashionistas")

  return (
    <section className="relative w-full  sm:py-16 lg:py-24 overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 w-full h-full bg-[#010509]">
        <Image src="/assets/images/home/fashionista-bg.png" alt="Background" fill />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl text-white text-center font-inter font-bold mb-6">We serve</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div
            className="bg-white/20 rounded-full p-0.5 sm:p-1.5 flex gap-0.5 sm:gap-1.5"
            style={{ border: "1.5px solid rgba(255, 255, 255, 0.48)" }}
          >
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  flex-shrink-0 
                  text-xs sm:text-sm lg:text-base
                  px-2 sm:px-4 lg:px-6 
                  py-1 sm:py-1.5 lg:py-2
                  rounded-full 
                  font-inter 
                  transition-all
                  whitespace-nowrap
                  ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#008FF7] via-[#A090F9] via-[#EF6CBC] to-[#FEA324] text-white"
                      : "text-white/60 hover:text-white"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative sm:aspect-[16/9] aspect-[9/16] rounded-2xl overflow-hidden">
            {/* 内容图片容器 - 移除固定宽高，使用百分比和 aspect ratio 来控制 */}
            <div className="absolute inset-0 w-full h-full">
              {tabs.map(tab => (
                <div
                  key={tab}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    activeTab === tab ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-full"
                  }`}
                >
                  {/* 桌面端图片 */}
                  <Image
                    src={tabImages[tab].desktop}
                    alt={`${tab} Content`}
                    fill
                    className="object-contain hidden sm:block"
                    priority={tab === "Fashionistas"}
                  />
                  {/* 移动端图片 */}
                  <Image
                    src={tabImages[tab].mobile}
                    alt={`${tab} Content`}
                    fill
                    className="object-contain sm:hidden"
                    priority={tab === "Fashionistas"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeServe
