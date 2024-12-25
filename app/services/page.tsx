"use client"

import dynamic from "next/dynamic"

const ServicesContent = dynamic(() => import("./components/ServicesContent"), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

const ServicesPage = () => {
  return <ServicesContent />
}

export default ServicesPage
