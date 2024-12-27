"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import styles from "./Header.module.css"
import clsx from "clsx"
import { isTablet, isBrowser } from "react-device-detect"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  // 菜单打开时，点击和滚动行为都会关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector(`.${styles.mobileMenu}`)
      const mobileButton = document.querySelector(`.${styles.mobileButton}`)

      if (
        isMenuOpen &&
        mobileMenu &&
        mobileButton &&
        !mobileMenu.contains(event.target as Node) &&
        !mobileButton.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 72)
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("click", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 72)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Get in Touch", href: "/contact" }
  ]

  return (
    <header
      className={clsx(
        styles.header,
        isHome ? styles.header_home : styles.header_default,
        isScrolled && styles.header_scrolled
      )}
    >
      <div className={styles.container}>
        <div className={styles.nav}>
          <Link href="/" className={clsx(styles.logo, isHome ? styles.logo_home : styles.logo_default)}>
            <Image
              src={`/assets/images/logo-${isHome ? "white" : "black"}.png`}
              alt="CREAMODA"
              width={isBrowser ? 220 : isTablet ? 180 : 82}
              height={isBrowser ? 32 : isTablet ? 26 : 13}
              className="object-contain"
              priority
            />
          </Link>

          <nav className={styles.menuList}>
            {menuItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className={clsx(
                  styles.menuItem,
                  isHome ? styles.menuItem_home : styles.menuItem_default,
                  pathname === item.href && [
                    styles.menuItem_active,
                    isHome ? styles.menuItem_active_home : styles.menuItem_active_default
                  ]
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={clsx(styles.mobileButton, isHome ? styles.mobileButton_home : styles.mobileButton_default)}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={clsx(
            styles.mobileMenu,
            isMenuOpen && styles.mobileMenu_open,
            isHome ? styles.mobileMenu_home : styles.mobileMenu_default
          )}
        >
          {menuItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className={clsx(
                styles.mobileMenuItem,
                isHome ? styles.mobileMenuItem_home : styles.mobileMenuItem_default
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
