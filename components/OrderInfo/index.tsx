"use client"

import Image from "next/image"

const OrderInfo = () => {
  return (
    <section className="relative w-full py-16 md:py-24">
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

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-white text-center font-inter text-[2.75rem] font-extrabold leading-normal mb-4">
          Create your own designs and dreams from sketch.
        </h2>
        <p className="text-white text-center font-inter text-xl mb-12">MOQ 100Pcs/style/color (4 sizes)</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Sample Card */}
          <div className="bg-black/80 backdrop-blur rounded-2xl p-8">
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
          <div className="bg-black/80 backdrop-blur rounded-2xl p-8">
            <div className="relative mb-6">
              <div className="border-2 border-dashed border-[#FEA324] rounded-lg p-2 w-[13.125rem]">
                <h3 className="text-[#FEA324] font-inter text-2xl font-bold">Bulk Order</h3>
              </div>
              <Image
                src="/assets/images/home/scissors2.svg"
                alt="Order Icon"
                width={24}
                height={24}
                className="absolute -top-3 -right-3 w-[25.69px] h-[25.69px]  "
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
