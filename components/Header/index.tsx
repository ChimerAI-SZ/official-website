"use client"

import dynamic from "next/dynamic"

const HeaderContent = dynamic(() => import("./Content"), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

const Header = () => {
  return <HeaderContent />
}

export default Header
