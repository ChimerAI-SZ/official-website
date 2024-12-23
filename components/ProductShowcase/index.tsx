"use client"

import Image from "next/image"

const ProductShowcase = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#000B1F] to-[#021033]">
      {/* 背景图片 */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/images/home/phone-bg.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            className="font-inter text-[2.75rem] font-bold leading-[3.375rem] mb-6"
            style={{
              background: "linear-gradient(90deg, #008FF7 0.36%, #A090F9 34.87%, #EF6CBC 65.42%, #FEA324 99.09%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Building an Aesthetic and Impact-Driven Fashion World
          </h2>
          <p className="font-inter text-[1.5rem] font-medium leading-[2.25rem] text-white text-center">
            A fashion design and supply chain platform powered by fashion data and AI, offering end-to-end services from
            design to finished garments.
          </p>
        </div>

        {/* 中心手机展示 */}
        <div className="relative w-[15rem] h-[32.48rem] mx-auto mb-8">
          <div className="relative z-10 w-full h-full">
            <Image
              src="/assets/images/home/phone-mockup.png"
              alt="App Interface"
              fill
              className="object-cover"
              style={{ backgroundColor: "lightgray" }}
              priority
            />
          </div>

          {/* 发光效果 */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#2B8FFF]/20 via-[#C233FF]/20 to-[#FF8B34]/20 blur-xl -z-10" />
        </div>

        {/* 渐变按钮 */}
        <button
          className="w-[19.375rem] h-16 rounded-[2.5rem] mx-auto block hover:opacity-90 transition-opacity"
          style={{
            background: "linear-gradient(95deg, #008FF7 -1.08%, #A090F9 37.36%, #EF6CBC 81.61%, #FEA324 104%)"
          }}
        >
          <span className="font-inter text-white font-medium">Get Started</span>
        </button>
      </div>
    </section>
  )
}

export default ProductShowcase
