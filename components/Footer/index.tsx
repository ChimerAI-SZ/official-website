"use client"

import React from "react"
import styled from "@emotion/styled"
import { usePathname } from "next/navigation"

import Logo from "./components/Logo"
import Nav from "./components/Nav"
import Address from "./components/Address"

const Footer: React.FC = () => {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <FooterContainer $isHomePage={isHomePage}>
      <Container>
        <Logo />
        <Nav />
        <Address />
      </Container>

      <Copyright>© 2024 Company Name® Global Inc.</Copyright>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer<{ $isHomePage: boolean }>`
  width: 100%;
  background-color: rgba(23, 23, 23, 0.8);
  box-sizing: border-box;
  padding: 60px 120px 24px;

  @media (max-width: 1024px) {
    padding: 60px 100px 24px;
  }

  @media (max-width: 768px) {
    padding: 32px 24px 24px;
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 40px;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1024px) {
    gap: 40px;
    justify-content: flex-start;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    justify-content: flex-start;
  }
`

const Copyright = styled.div`
  color: #ebebeb;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  margin-top: 56px;

  @media (max-width: 1024px) {
    margin-top: 32px;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`

export default Footer
