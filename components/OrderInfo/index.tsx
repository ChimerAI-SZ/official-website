"use client"

import Image from "next/image"

const OrderInfo = () => {
  return (
    <section className="relative w-full lg:h-[43.375rem] md:h-[22.3125rem] xs:h-[44.75rem] h-[44.75rem]">
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

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 h-full pt-[7.5rem] md:pt-[5rem] xs:pt-[3rem]">
        <h2 className="text-white text-left font-inter lg:text-[2.75rem] md:text-[1.5rem] xs:text-[1.125rem] font-extrabold mb-4">
          Create your own designs and dreams from sketch.
        </h2>
        <p className="text-white text-left font-inter mb-[4.5rem] md:mb-[2.13rem] xs:mb-[2rem] lg:text-[1.5rem] md:text-[0.75rem] xs:text-[0.75rem]">
          MOQ 100Pcs/style/color (4 sizes)
        </p>

        <div className="flex flex-col lg:flex-row md:flex-row xs:flex-col gap-5 items-center ">
          {/* Sample Card */}
          <div className="relative lg:w-[26.25rem] lg:h-[19.5rem] md:w-[13.75rem] md:h-[10.125rem] w-[19.4375rem] h-[9.625rem]">
            <div className="absolute inset-0">
              <picture className="w-full h-full">
                <source media="(min-width: 1024px)" srcSet="/assets/images/home/order-left.png" />
                <source media="(min-width: 768px)" srcSet="/assets/images/home/md-order-left.png" />
                <Image
                  src="/assets/images/home/xs-order-left.png"
                  alt="Sample"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                  style={{ objectPosition: "center" }}
                />
              </picture>
            </div>
          </div>

          {/* Bulk Order Card */}
          <div className="relative lg:w-[45.5rem] lg:h-[19.5rem] md:w-[23.5rem] md:h-[10.125rem] w-[19.4375rem] h-[12rem]">
            <div className="absolute inset-0">
              <picture className="w-full h-full">
                <source media="(min-width: 1024px)" srcSet="/assets/images/home/order-right.png" />
                <source media="(min-width: 768px)" srcSet="/assets/images/home/md-order-right.png" />
                <Image
                  src="/assets/images/home/xs-order-right.png"
                  alt="Sample"
                  fill
                  className="object-contain "
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                  style={{ objectPosition: "center" }}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderInfo
