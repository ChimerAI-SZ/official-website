"use client"

import Image from "next/image"

const VisionMission = () => {
  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-center font-inter text-[2.75rem] font-bold mb-12">Vision & Mission</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div className="relative h-[280px] rounded-2xl overflow-hidden">
            <Image src="/assets/images/home/Vision.png" alt="Vision" fill className="object-cover" />
          </div>

          <div className="relative h-[280px] rounded-2xl overflow-hidden">
            <Image src="/assets/images/home/Mission.png" alt="Mission" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
