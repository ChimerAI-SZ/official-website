import Link from "next/link"
import styled from "@emotion/styled"
import { isTablet, isMobileOnly } from "react-device-detect"

const Nav = () => {
  return (
    <NavWrapper $isMobile={isMobileOnly} $isTablet={isTablet}>
      <Section $isMobile={isMobileOnly}>
        <h3>Explore</h3>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Get in Touch</Link>
        </nav>
      </Section>

      <Section $isMobile={isMobileOnly}>
        <h3>Link</h3>
        <nav>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Term & Conditions</Link>
          <Link href="/faqs">FAQs</Link>
        </nav>
      </Section>
    </NavWrapper>
  )
}

// 导航包装器
const NavWrapper = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  display: grid;
  grid-template-columns: ${({ $isMobile }) => ($isMobile ? "1fr" : "repeat(2, 1fr)")};
  gap: ${({ $isMobile }) => ($isMobile ? "32px" : "93px")};
  grid-column: ${({ $isMobile, $isTablet }) => ($isMobile ? "1" : $isTablet ? "1 / span 2" : "3 / span 1")};
`

// 各个区块的通用样式
const Section = styled.div<{ $isMobile: boolean }>`
  width: 168px;
  h3 {
    color: rgba(255, 255, 255, 0.5);

    font-family: Inter;
    font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "16px")};
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    margin-bottom: ${({ $isMobile }) => ($isMobile ? "8px" : "24px")};
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  a {
    color: var(--Neutral-White, #fff);
    font-family: Inter;
    font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "16px")};
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */

    &:hover {
      color: #000;
    }
  }
`

export default Nav
