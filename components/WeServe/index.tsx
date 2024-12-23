"use client"

import { useState } from "react"
import Image from "next/image"

type Tab = "Fashionistas" | "Indie Brand" | "Retailer" | "Fashion Giant"

const tabs: Tab[] = ["Fashionistas", "Indie Brand", "Retailer", "Fashion Giant"]

const tabImages: Record<Tab, string> = {
  Fashionistas: "/assets/images/home/fashionista1.png",
  "Indie Brand": "/assets/images/home/fashionista2.png",
  Retailer: "/assets/images/home/fashionista3.png",
  "Fashion Giant": "/assets/images/home/fashionista4.png"
}

const WeServe = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Fashionistas")

  return (
    <section className="relative w-full bg-[#000B1F] py-16 md:py-24 overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/images/home/fashionista-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-white text-center font-inter text-[2.75rem] font-bold mb-12">We serve</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1A1A1A]/60 rounded-full p-1 flex gap-2">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-inter transition-all ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#2B8FFF] to-[#D233FF] text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/20">
            {/* 内容图片容器 */}
            <div className="absolute inset-0 w-[80%] h-[90%] m-auto">
              {tabs.map(tab => (
                <div
                  key={tab}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeTab === tab ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={tabImages[tab]}
                    alt={`${tab} Content`}
                    fill
                    className="object-contain"
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
