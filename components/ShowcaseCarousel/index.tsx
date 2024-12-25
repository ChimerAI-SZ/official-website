"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import Image from "next/image"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

const ShowcaseCarousel = () => {
  // 生成1到23的图片数组
  const items = Array.from({ length: 23 }, (_, i) => ({
    image: `/assets/images/dresses/${i + 1}.jpeg`,
    title: `Dress ${i + 1}`
  }))

  return (
    <section className="w-full relative bg-gradient-to-r from-[#000B1F] via-[#321B47] to-[#321B47] py-16 md:py-24">
      <div className="absolute inset-0 w-full h-full" style={{ background: "#010509" }}>
        <Image src="/assets/images/home/showcase-bg.png" alt="Background" fill />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 mt-[0.9rem] mb-[1.875rem]">
          <h2 className="lg:text-[2.75rem] md:text-[1.5rem] sm:text-[1.125rem] text-[1.125rem] text-white text-center font-inter font-[800]">
            Showcase
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            className="!px-4"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <div className="lg:w-[23.4375rem] lg:h-[31.25rem] w-[11rem] h-[14.625rem]">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={375}
                      height={500}
                      className="w-full h-full object-cover"
                      sizes="375px"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseCarousel
