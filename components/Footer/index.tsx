"use client"

import React, { useEffect, useState } from "react"

import styled from "@emotion/styled"
import { isTablet, isMobileOnly, isBrowser } from "react-device-detect"

import Logo from "./components/Logo"
import Nav from "./components/Nav"
import Address from "./components/Address"

const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  // 在客户端渲染之前返回一个基础布局
  if (!mounted) {
    return <div>Loading...</div>
  }

  return (
    <FooterContainer $isMobile={isMobileOnly} $isTablet={isTablet} $isBrowser={isBrowser}>
      <Container $isMobile={isMobileOnly} $isTablet={isTablet} $isBrowser={isBrowser}>
        <Logo />
        <Nav />
        <Address />
      </Container>

      <Copyright $isMobile={isMobileOnly} $isTablet={isTablet}>
        © 2024 Company Name® Global Inc.
      </Copyright>
    </FooterContainer>
  )
}

// 基础的 Footer 容器
const FooterContainer = styled.footer<{ $isMobile: boolean; $isTablet: boolean; $isBrowser: boolean }>`
  width: 100%;
  background-color: rgba(23, 23, 23, 0.8);
  padding: ${({ $isMobile }) => ($isMobile ? "32px 24px 24px" : isTablet ? "60px 100px 24px" : "60px 120px 24px")};
`

// 主容器
const Container = styled.div<{ $isMobile: boolean; $isTablet: boolean; $isBrowser: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${({ $isBrowser }) => ($isBrowser ? "row" : "column")};
  gap: ${({ $isBrowser }) => ($isBrowser ? "103px" : isTablet ? "40px" : "32px")};
`

// 版权信息
const Copyright = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  color: #ebebeb;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;

  text-align: center;

  margin-top: ${({ $isMobile }) => ($isMobile ? "16px" : isTablet ? "32px" : "56px")};
`

export default Footer
