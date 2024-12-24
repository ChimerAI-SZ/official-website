"use client"

import Image from "next/image"

const VisionMission = () => {
  return (
    <section className="w-full bg-black h-[42.9375rem]">
      <div className="container mx-auto pt-[7.5rem]">
        <h2 className="text-[1.25rem] lg:text-[2.75rem] md:text-[1.5rem] sm:text-[1.5rem]  text-white text-center font-inter font-bold mb-12">
          Vision & Mission
        </h2>

        <div className="grid md:grid-cols-2 lg:gap-[6.75rem] md:gap-[1.5rem]  mx-auto">
          {/* Vision Card */}
          <div className="relative lg:h-[20.375rem] md:h-[12.125rem] md:w-[20rem]  sm:h-[16.875rem] sm:w-[16.875rem] lg:w-[33.75rem] rounded-2xl overflow-hidden shrink-0">
            <Image src="/assets/images/home/Vision.png" alt="Vision" fill />
          </div>

          <div className="relative lg:h-[20.375rem] md:h-[12.125rem] md:w-[20rem]  sm:h-[16.875rem] sm:w-[16.875rem] lg:w-[33.75rem] rounded-2xl overflow-hidden shrink-0">
            <Image src="/assets/images/home/Mission.png" alt="Mission" fill />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
