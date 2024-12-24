"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

import styled from "@emotion/styled"
import { isTablet, isMobileOnly } from "react-device-detect"

import Nav from "./components/Nav"
import Address from "./components/Address"

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
          <Logo>
            <Image
              src={`/assets/images/logo-white.png`}
              alt="CREAMODA"
              width={200}
              height={26}
              className="object-contain"
              priority
            />
          </Logo>
          <Description>
            CREAMODA is an AI-powered clothing design and supply chain platform, offering a comprehensive end-to-end
            service for independent fashion brands and retailers, from design to wholesale.
          </Description>
        </LogoSection>

        <Nav />
        <Address />
      </Container>

      <Copyright>© 2024 Company Name® Global Inc.</Copyright>
    </FooterContainer>
  )
}

// 基础的 Footer 容器
const FooterContainer = styled.footer`
  width: 100%;
  background-color: rgba(23, 23, 23, 0.8);
  padding: 60px 120px 24px;
`

// 主容器
const Container = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  gap: 103px;
`

// Logo 部分
const LogoSection = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  flex: 1;
  min-width: 280px;
`

const Logo = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`

const Description = styled.p`
  color: var(--Graysclae-300, #d4d4d4);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  max-width: 280px;
`

// 版权信息
const Copyright = styled.div`
  color: #ebebeb;

  /* Medium/ Regular */
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;

  text-align: center;

  margin-top: 56px;
`

export default Footer
