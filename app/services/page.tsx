"use client"

import { useState } from "react"
import styled from "@emotion/styled"

import Trend from "./components/Trend"
import Design from "./components/Design"

import { navList } from "./constant"
import SupplyChain from "./components/SupplyChain"

const ServicesPage = () => {
  const [selectedNav, setSelectedNav] = useState("Trend")

  return (
    <Container>
      <ServicesContainer>
        <NavBar>
          <NavContent>
            <NavActiveBg
              $left={navList.find(item => item.label === selectedNav)?.left ?? 0}
              $width={navList.find(item => item.label === selectedNav)?.width ?? 0}
            />
            {navList.map(item => (
              <NavItem
                key={item.label}
                $width={item.width}
                $active={selectedNav === item.label}
                onClick={() => setSelectedNav(item.label)}
              >
                {item.label}
              </NavItem>
            ))}
          </NavContent>
        </NavBar>

        {selectedNav === "Trend" && <Trend />}
        {selectedNav === "Design" && <Design />}
        {selectedNav === "Supply Chain" && <SupplyChain />}
      </ServicesContainer>
    </Container>
  )
}
const Container = styled.div`
  background-color: #faf9fb;

  --gradient-primary: linear-gradient(90deg, #a8cef5 0%, #cecff7 35%, #e3c8e9 65%, #f3d2bb 100%);
`
const ServicesContainer = styled.div`
  margin: 0 auto;

  height: 100vh;
  padding-top: 72px;

  overflow: visible;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavBar = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 319px;
  height: 50px;
  border-radius: 100px;

  margin: 40px auto;
  background: var(--gradient-primary);
  z-index: 20;

  flex-shrink: 0;
`

const NavContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100% - 4px);
  width: calc(100% - 4px);

  background: #fff;
  border-radius: 100px;
`

const NavActiveBg = styled.div<{ $width: number; $left: number }>`
  border-radius: 100px;
  background: linear-gradient(
    86deg,
    rgba(0, 143, 247, 0.1) 5.27%,
    rgba(160, 144, 249, 0.1) 39.5%,
    rgba(239, 108, 188, 0.1) 78.9%,
    rgba(254, 163, 36, 0.1) 98.84%
  );
  position: absolute;
  left: ${props => props.$left}px;
  width: ${props => props.$width}px;
  height: calc(100% - 4px);
  z-index: 0;

  transition: all 0.5s ease;
`

const NavItem = styled.div<{ $active: boolean; $width: number }>`
  z-index: 1;
  text-align: center;
  cursor: pointer;
  font-synthesis: none;
  white-space: nowrap;

  width: ${props => props.$width}px;
  padding: 6px 18px;
  border-radius: 100px;

  transition: all 0.5s ease;

  color: ${props => (props.$active ? "unset" : "rgba(0, 0, 0, 0.88)")};
  font-weight: ${props => (props.$active ? "700" : "400")};
  font-size: 16px;
  line-height: 26px;

  &:not(:last-child) {
    margin-right: 6px;
  }
`

export default ServicesPage
