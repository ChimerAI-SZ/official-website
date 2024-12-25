// import Carousel from "@components/Carousel"
import ProductShowcase from "@components/ProductShowcase"
import VisionMission from "@components/VisionMission"
import WeServe from "@components/WeServe"
import WhyCreamoda from "@components/WhyCreamoda"
import ShowcaseCarousel from "@components/ShowcaseCarousel"
import OrderInfo from "@components/OrderInfo"

// const carouselImages = [
//   {
//     url: "/assets/images/home/swiper1.png",
//     alt: "Slide 1",
//     title: "INNOVATION"
//   },
//   {
//     url: "/assets/images/home/swiper2.png",
//     alt: "Slide 2",
//     title: "FREEDOM"
//   },
//   {
//     url: "/assets/images/home/swiper3.png",
//     alt: "Slide 3",
//     title: "INSPIRATION"
//   },
//   {
//     url: "/assets/images/home/swiper4.png",
//     alt: "Slide 4",
//     title: "EMOTION"
//   }
// ]

export default function Home() {
  return (
    <main className="pt-[70px]">
      <ShowcaseCarousel />
      {/* <ShowcaseCarousel />
      <ShowcaseCarousel /> */}
      {/* <Carousel images={carouselImages} /> */}
      <ProductShowcase />
      <VisionMission />
      <WeServe />
      <WhyCreamoda />
      {/* <ShowcaseCarousel /> */}
      <OrderInfo />
    </main>
  )
}
