"use client"

import Image from "next/image"

const ShowcaseCarousel = () => {
  // 创建三组图片数组，每组15张
  const group1 = Array.from({ length: 15 }, (_, i) => ({
    image: `/assets/images/dresses/1/${i + 1}.jpeg`,
    title: `Dress 1-${i + 1}`
  }))

  const group2 = Array.from({ length: 15 }, (_, i) => ({
    image: `/assets/images/dresses/2/${i + 1}.jpeg`,
    title: `Dress 2-${i + 1}`
  }))

  const group3 = Array.from({ length: 15 }, (_, i) => ({
    image: `/assets/images/dresses/3/${i + 1}.jpeg`,
    title: `Dress 3-${i + 1}`
  }))

  // 每组复制4次以确保无缝滚动
  const repeatedGroup1 = [...group1, ...group1, ...group1, ...group1, ...group1]
  const repeatedGroup2 = [...group2, ...group2, ...group2, ...group2, ...group2]
  const repeatedGroup3 = [...group3, ...group3, ...group3, ...group3, ...group3]

  return (
    <section className="w-full relative bg-gradient-to-r from-[#000B1F] via-[#321B47] to-[#321B47] py-[calc(72px+1rem)] md:pt-[calc(72px+3rem)] overflow-hidden">
      <div className="absolute inset-0 w-full h-full" style={{ background: "#010509" }}>
        <Image src="/assets/images/home/showcase-bg.png" alt="Background" fill />
      </div>

      <div className="relative z-10 space-y-4 md:space-y-6">
        {/* 第一行 - 文件夹1的图片 */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-right md:animate-scroll-right-desktop hover:pause">
            {repeatedGroup1.map((item, index) => (
              <div
                key={`top-${index}`}
                className="flex-shrink-0 w-[11rem] h-[14.625rem] md:w-[16rem] md:h-[20rem] lg:w-[18rem] lg:h-[24rem] px-2 md:px-3"
              >
                <div className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={375}
                    height={500}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 11rem, (max-width: 1024px) 16rem, 18rem"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 第二行 - 文件夹2的图片 */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left md:animate-scroll-left-desktop hover:pause">
            {repeatedGroup2.map((item, index) => (
              <div
                key={`middle-${index}`}
                className="flex-shrink-0 w-[11rem] h-[14.625rem] md:w-[16rem] md:h-[20rem] lg:w-[18rem] lg:h-[24rem] px-2 md:px-3"
              >
                <div className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={375}
                    height={500}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 11rem, (max-width: 1024px) 16rem, 18rem"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 第三行 - 文件夹3的图片 */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-right md:animate-scroll-right-desktop hover:pause">
            {repeatedGroup3.map((item, index) => (
              <div
                key={`bottom-${index}`}
                className="flex-shrink-0 w-[11rem] h-[14.625rem] md:w-[16rem] md:h-[20rem] lg:w-[18rem] lg:h-[24rem] px-2 md:px-3"
              >
                <div className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={375}
                    height={500}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 11rem, (max-width: 1024px) 16rem, 18rem"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseCarousel
