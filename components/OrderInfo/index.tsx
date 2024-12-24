"use client"

import Image from "next/image"

const OrderInfo = () => {
  return (
    <section className="relative w-full h-[43.375rem]">
      {/* 背景图片 */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/images/home/order-bg.png"
          alt="Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="container mx-auto px-[2rem] relative z-10 h-full pt-[7.5rem] ">
        <h2 className="text-white text-left font-inter text-[2.5rem] font-extrabold  mb-4">
          Create your own designs and dreams from sketch.
        </h2>
        <p className="text-white text-left font-inter text-xl mb-[4.5rem] ">MOQ 100Pcs/style/color (4 sizes)</p>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
          {/* Sample Card */}
          <div
            style={{
              borderRadius: "0.5rem",
              border: "2px solid rgba(255, 255, 255, 0.80)",
              background: "linear-gradient(147deg, rgba(0, 0, 0, 0.20) 3.9%, #000 100.08%)"
            }}
            className="bg-black/80 backdrop-blur rounded-2xl p-8 w-[26.25rem] h-[19.5rem] ml-[0.5rem]"
          >
            <div className="relative mb-6">
              <div className="border-2 border-dashed border-[#0085FF] rounded-lg p-2 w-[13.125rem]">
                <h3 className="text-[#0085FF] font-inter text-2xl font-bold">Sample</h3>
              </div>
              <Image
                src="/assets/images/home/scissors1.svg"
                alt="Sample Icon"
                width={24}
                height={24}
                className="absolute -top-3 -right-3"
              />
            </div>
            <ul className="space-y-4 text-white">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                <span>Sample time: 8-12 days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                <span>
                  Sample fee: usd50/piece(depends on design, technology like print embroidery will be extra charge)
                </span>
              </li>
            </ul>
          </div>

          {/* Bulk Order Card */}
          <div
            style={{
              borderRadius: "0.5rem",
              border: "2px solid rgba(255, 255, 255, 0.80)",
              background: "linear-gradient(147deg, rgba(0, 0, 0, 0.20) 3.9%, #000 100.08%)"
            }}
            className="bg-black/80 backdrop-blur rounded-2xl w-[45.5rem] h-[19.5rem]
       
          "
          >
            <div className="relative mb-6">
              <div className="border-2 border-dashed border-[#FEA324] rounded-lg p-2 w-[13.125rem]">
                <h3 className="text-[#FEA324] font-inter text-2xl font-bold">Bulk Order</h3>
              </div>
              <Image
                src="/assets/images/home/scissors2.svg"
                alt="Order Icon"
                width={24}
                height={24}
                className="absolute -top-3 -right-3 w-[25.69px] h-[25.69px]"
              />
            </div>
            <ul className="space-y-4 text-white">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                <span>Bulk Order time: 24-30 days(depends on design and order quantity)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                <span>
                  Bulk Price: Depends on the order quantity and your design and fabric choice, quote after confirming
                  details
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderInfo
