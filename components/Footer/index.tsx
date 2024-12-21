"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import styled from "@emotion/styled"
import { isTablet, isMobileOnly } from "react-device-detect"
// import { getDeviceInfo } from "@utils"

const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  // 在客户端渲染之前返回一个基础布局
  if (!mounted) {
    return (
      <FooterContainer>
        <Container $isMobile={false} $isTablet={false}>
          {/* 基础内容 */}
        </Container>
      </FooterContainer>
    )
  }

  return (
    <FooterContainer>
      <Container $isMobile={isMobileOnly} $isTablet={isTablet}>
        <LogoSection $isMobile={isMobileOnly} $isTablet={isTablet}>
          <Logo>CREAMODA</Logo>
          <Description>
            CREAMODA is an AI-powered clothing design and supply chain platform, offering a comprehensive end-to-end
            service for independent fashion brands and retailers, from design to wholesale.
          </Description>
        </LogoSection>

        <NavWrapper $isMobile={isMobileOnly} $isTablet={isTablet}>
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
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Term & Conditions</Link>
              <Link href="/faqs">FAQs</Link>
            </nav>
          </Section>
        </NavWrapper>

        <AddressSection $isMobile={isMobileOnly} $isTablet={isTablet}>
          <h3>Address</h3>
          <p>3 Fraser Street #04-23A Duo Tower, Singapore 189352</p>
          <h3>Contact</h3>
          <a href="mailto:contact@creamoda.ai">contact@creamoda.ai</a>
        </AddressSection>
      </Container>

      <Copyright>
        <p>© 2024 Company Name® Global Inc.</p>
      </Copyright>
    </FooterContainer>
  )
}

// 基础的 Footer 容器
const FooterContainer = styled.footer`
  width: 100%;
  background-color: #f5f5f5;
  padding: 40px 0 20px;
`

// 主容器
const Container = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: ${({ $isMobile, $isTablet }) =>
    $isMobile ? "1fr" : $isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)"};
  gap: 30px;
`

// Logo 部分
const LogoSection = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  grid-column: ${({ $isMobile, $isTablet }) => ($isMobile ? "1" : $isTablet ? "1 / span 2" : "1 / span 2")};
`

const Logo = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`

const Description = styled.p`
  color: #666;
  line-height: 1.6;
`

// 导航包装器
const NavWrapper = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  display: grid;
  grid-template-columns: ${({ $isMobile }) => ($isMobile ? "1fr" : "repeat(2, 1fr)")};
  gap: 20px;
  grid-column: ${({ $isMobile, $isTablet }) => ($isMobile ? "1" : $isTablet ? "1 / span 2" : "3 / span 1")};
`

// 各个区块的通用样式
const Section = styled.div`
  h3 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  a {
    color: #666;
    text-decoration: none;
    &:hover {
      color: #000;
    }
  }
`

// 地址区块
const AddressSection = styled(Section)<{ $isMobile: boolean; $isTablet: boolean }>`
  grid-column: ${({ $isMobile, $isTablet }) => ($isMobile ? "1" : $isTablet ? "1 / span 2" : "4 / span 1")};
`

// 版权信息
const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;

  p {
    color: #666;
    font-size: 14px;
  }
`

export default Footer
