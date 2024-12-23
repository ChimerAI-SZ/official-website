"use client"

import Link from "next/link"
import { useState } from "react"
import styled from "@emotion/styled"
import { usePathname } from "next/navigation"
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Get in Touch", href: "/contact" }
  ]

  return (
    <HeaderWrapper $isHome={isHome}>
      <Container>
        <Nav>
          <Logo href="/" $isHome={isHome}>
            <Image
              src={`/assets/images/logo-${isHome ? "white" : "black"}.png`}
              alt="CREAMODA"
              width={206}
              height={30}
              className="object-contain"
              priority
            />
          </Logo>

          <MenuList>
            {menuItems.map(item => (
              <MenuItem key={item.label} href={item.href} $isHome={isHome} $active={pathname === item.href}>
                {item.label}
              </MenuItem>
            ))}
          </MenuList>

          <MobileButton onClick={() => setIsMenuOpen(!isMenuOpen)} $isHome={isHome}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </MobileButton>
        </Nav>

        <MobileMenu $isOpen={isMenuOpen} $isHome={isHome}>
          {menuItems.map(item => (
            <MobileMenuItem key={item.label} href={item.href} $isHome={isHome} $active={pathname === item.href}>
              {item.label}
            </MobileMenuItem>
          ))}
        </MobileMenu>
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header<{ $isHome: boolean }>`
  position: fixed;
  width: 100%;
  height: 72px;

  background: ${props => (props.$isHome ? "#000" : "#faf9fb")};
  backdrop-filter: blur(8px);
  z-index: 50;
  transition: background-color 0.3s ease;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
`

const Logo = styled(Link)<{ $isHome: boolean }>`
  color: ${props => (props.$isHome ? "white" : "black")};
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
`

const MenuList = styled.nav`
  display: none;
  gap: 1.75rem;

  height: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`

const MenuItem = styled(Link)<{ $isHome: boolean; $active: boolean }>`
  color: ${props => (props.$isHome ? "#e5e5e5" : "#171717")};
  text-decoration: none;
  transition: color 0.2s ease;

  font-variation-settings: "wght" ${props => (props.$active ? "700" : "400")};
  font-weight: ${props => (props.$active ? "700" : "400")};
  font-synthesis: none;
  font-size: 14px;
  line-height: 20px;
  height: 100%;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.$active &&
    `
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${props.$isHome ? "white" : "black"};
      }
    `}

  &:hover {
    color: ${props => (props.$isHome ? "white" : "black")};
  }
`

const MobileButton = styled.button<{ $isHome: boolean }>`
  color: ${props => (props.$isHome ? "#e5e5e5" : "#666666")};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileMenu = styled.div<{ $isOpen: boolean; $isHome: boolean }>`
  display: ${props => (props.$isOpen ? "block" : "none")};
  padding: 1rem 0;
  background: ${props => (props.$isHome ? "rgba(0, 0, 0, 0.95)" : "rgba(255, 255, 255, 0.95)")};

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileMenuItem = styled(Link)<{ $isHome: boolean; $active: boolean }>`
  display: block;
  padding: 0.75rem 1rem;
  color: ${props => (props.$isHome ? "#e5e5e5" : "#666666")};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => (props.$isHome ? "white" : "black")};
  }
`

export default Header
