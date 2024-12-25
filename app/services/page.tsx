"use client"

import { useState } from "react"
import styled from "@emotion/styled"
import Image from "next/image"

import ImageGrid from "./components/ImageGrid"
import SupplyChain from "./components/SupplyChain"

import { messageList, navList, trendList, designList } from "./constant"

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

        {selectedNav === "Trend" && <ImageGrid keyword="trend" list={trendList} />}
        {selectedNav === "Design" && <ImageGrid keyword="design" list={designList} />}
        {selectedNav === "Supply Chain" && <SupplyChain />}
      </ServicesContainer>
      <MessageContainer>
        <Message>{messageList.find(item => item.key === selectedNav)?.value}</Message>
        <MessageImg>
          <Image
            src={`/assets/images/services/${messageList.find(item => item.key === selectedNav)?.img}`}
            alt="message"
            width={662}
            height={300}
          />
        </MessageImg>
      </MessageContainer>
    </Container>
  )
}
const Container = styled.div`
  background-color: #faf9fb;

  --gradient-primary: linear-gradient(90deg, #a8cef5 0%, #cecff7 35%, #e3c8e9 65%, #f3d2bb 100%);
  --gradient-heavy: linear-gradient(77deg, #008ff7 -8.4%, #a090f9 33.27%, #ef6cbc 61.49%, #fea324 86.49%);
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
const MessageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  height: 70vh;
  min-height: 700px;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -150px; /* 调整光晕的位置 */
    left: 50%;
    transform: translateX(-50%);
    width: 750px; /* 调整光晕的宽度 */
    height: 270px; /* 调整光晕的高度 */
    background: linear-gradient(
      86deg,
      rgba(0, 143, 247, 0.2) 5.27%,
      rgba(160, 144, 249, 0.2) 39.5%,
      rgba(239, 108, 188, 0.2) 78.9%,
      rgba(254, 163, 36, 0.2) 98.84%
    );
    pointer-events: none;
    z-index: 0;

    filter: blur(25px);
    border-radius: 100%;
  }
`

const Message = styled.div`
  width: 1020px;
  margin: 0 auto;

  color: rgba(0, 0, 0, 0.88);
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
`

const MessageImg = styled.div`
  position: absolute;
  bottom: 72px;
  right: 72px;
`

export default ServicesPage
