"use client"

import Image from "next/image"

const VisionMission = () => {
  return (
    <section className="w-full bg-[#010509] lg:h-[42.9375rem] md:h-[22.125rem] h-[48.375rem] md:min-h-0">
      <div className="container mx-auto lg:pt-[7.5rem] pt-[3.75rem]">
        <h2 className="lg:text-[2.75rem] md:text-[1.5rem] sm:text-[1.125rem] text-[1.125rem] text-white text-center font-inter font-extrabold lg:mb-[4.25rem] md:mb-[2.25rem] mb-[2rem]">
          Vision & Mission
        </h2>

        <div className="flex flex-col lg:flex-row md:flex-row gap-8 md:gap-5 items-center justify-center lg:gap-[6.75rem]">
          {/* Vision Card */}
          <div className="relative w-[320px] h-[240px] md:h-[12.125rem] md:w-[20rem] lg:h-[20.375rem] lg:w-[33.75rem] rounded-2xl overflow-hidden">
            <Image
              src="/assets/images/home/Vision.png"
              alt="Vision"
              fill
              className="hidden md:block object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33.75rem"
            />
            <Image
              src="/assets/images/home/xs-vision.png"
              alt="Vision"
              fill
              className="block md:hidden object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Mission Card */}
          <div className="relative w-[320px] h-[240px] md:h-[12.125rem] md:w-[20rem] lg:h-[20.375rem] lg:w-[33.75rem] rounded-2xl overflow-hidden">
            <Image
              src="/assets/images/home/Mission.png"
              alt="Mission"
              fill
              className="hidden md:block object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33.75rem"
            />
            <Image
              src="/assets/images/home/xs-mission.png"
              alt="Mission"
              fill
              className="block md:hidden object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
