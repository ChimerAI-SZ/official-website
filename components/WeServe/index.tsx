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
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* 背景图片 */}
      <div
        style={{
          background: "#010509"
        }}
        className="absolute inset-0 w-full h-full"
      >
        <Image src="/assets/images/home/fashionista-bg.png" alt="Background" fill />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="lg:text-[2.75rem] md:text-[1.5rem] sm:text-[1.125rem] text-[1.125rem] text-white text-center font-inter  font-bold mb-12">
          We serve
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className=" bg-white/20 rounded-full p-[0.375rem] flex gap-[0.375rem]">
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
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            {/* 内容图片容器 */}
            <div className="absolute inset-0 w-[57.625rem] h-[32.4375rem] m-auto">
              {tabs.map(tab => (
                <div
                  key={tab}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    activeTab === tab ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-full"
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
