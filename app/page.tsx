import Carousel from "@components/Carousel"
import ProductShowcase from "@components/ProductShowcase"
import VisionMission from "@components/VisionMission"
import WeServe from "@components/WeServe"
import WhyCreamoda from "@components/WhyCreamoda"
import ShowcaseCarousel from "@components/ShowcaseCarousel"
import OrderInfo from "@components/OrderInfo"

const carouselImages = [
  {
    url: "/assets/images/home/swiper1.png",
    alt: "Slide 1",
    title: "INNOVATION"
  },
  {
    url: "/assets/images/home/swiper2.png",
    alt: "Slide 2",
    title: "FREEDOM"
  },
  {
    url: "/assets/images/home/swiper3.png",
    alt: "Slide 3",
    title: "INSPIRATION"
  },
  {
    url: "/assets/images/home/swiper4.png",
    alt: "Slide 4",
    title: "EMOTION"
  }
]

export default function Home() {
  return (
    <main>
      <Carousel images={carouselImages} />
      <ProductShowcase />
      <VisionMission />
      <WeServe />
      <WhyCreamoda />
      <ShowcaseCarousel />
      <OrderInfo />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8">Official Website</h1>
      </div>
    </main>
  )
}
