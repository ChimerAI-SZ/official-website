"use client"

import Image from "next/image"

const WhyCreamoda = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-[#000B1F] ">
      {/* 背景图片 */}
      <div className="absolute inset-0 w-full h-full">
        {/* <Image
          src="/assets/images/home/why-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        /> */}
        {/* 渐变遮罩 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.20) 0%, rgba(39, 134, 245, 0.00) 37.01%, rgba(39, 134, 245, 0.00) 74.01%, rgba(79, 187, 251, 0.60) 129.85%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-white text-center font-inter text-[2.75rem] font-bold mb-16">WHY CREAMODA</h2>

        {/* 内容图片 */}
        <div className="relative max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden">
          <Image src="/assets/images/home/why.png" alt="Why Creamoda" fill className="object-contain" priority />
        </div>
      </div>
    </section>
  )
}

export default WhyCreamoda