import Link from "next/link"
import styled from "@emotion/styled"
import { isTablet, isMobileOnly } from "react-device-detect"

const Nav = () => {
  return (
    <NavWrapper>
      <Section>
        <h3>Explore</h3>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Get in Touch</Link>
        </nav>
      </Section>

      <Section>
        <h3>Link</h3>
        <nav>
          {/* <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Term & Conditions</Link> */}
          <Link href="/contact?fqa=true">FAQs</Link>
        </nav>
      </Section>
    </NavWrapper>
  )
}

// 导航包装器
const NavWrapper = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    gap: 32px;
    width: 100%;
    justify-content: flex-start;
  }
`

// 各个区块的通用样式
const Section = styled.div`
  h3 {
    color: #ebebeb;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 16px;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  a {
    color: #ebebeb;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-decoration: none;
    text-align: left;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default Nav
