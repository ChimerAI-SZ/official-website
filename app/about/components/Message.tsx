"use client"

import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Image from "next/image"

import { isTablet, isMobileOnly, isBrowser } from "react-device-detect"

const Message = () => {
  console.log(isTablet, isMobileOnly, isBrowser)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div></div>

  return (
    <AboutContainer>
      <MessageBox>
        <div>
          <MessageContent>
            <Image
              src="/assets/images/about/quotationMark.png"
              alt="quotationMark"
              width={isMobileOnly ? "21" : "65"}
              height={isMobileOnly ? "21" : "65"}
            />
            <p>
              We make it easier than ever to create the clothing of your dreams, with on-demand production that meets
              the demands of your market. CREAMODA is here to turn your fashion vision into reality, with the speed,
              flexibility, and scalability you need
            </p>
          </MessageContent>
          <Signature>
            —— Team <span>CREAMODA</span>
          </Signature>
        </div>
      </MessageBox>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  height: 100vh;

  @media (max-width: 767px) {
    height: unset;
    margin: 100px auto;
  }

  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const MessageBox = styled.div`
  border-radius: 20px;
  background: #fff;

  @media (min-width: 1024px) {
    max-width: 1200px;
    max-height: 328px;
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    width: calc(100% - 50px);
    margin-top: 72px;
  }

  @media (max-width: 767px) {
    width: calc(100% - 2rem);
    margin-top: 40px;
  }

  position: relative;
  background: white;
  z-index: 1;

  margin: 0 auto;

  & > div {
    padding: ${isBrowser ? "64px" : isTablet ? "48px" : "1rem"};
    background: #fff;
    border-radius: 16px;
  }

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(77deg, #9dcefa -8.4%, #cbcefa 33.27%, #e4c8f0 61.49%, #facfba 86.49%);
    border-radius: 24px;
    filter: blur(50px);
    z-index: -1;
  }
`

const MessageContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  color: #000;

  font-family: Inter;
  font-size: ${isMobileOnly ? "12px" : "20px"};
  font-style: normal;
  font-weight: 400;
  line-height: ${isBrowser ? "34px" : isTablet ? "28px" : "19px"};

  & > img {
    margin-right: 8px;
    position: relative;
    top: ${isBrowser || isTablet ? "-12px" : "-6px"};
  }
`

const Signature = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: ${isMobileOnly ? "18px" : "40px"};
  color: #000;

  text-align: right;
  font-family: Inter;
  font-size: ${isMobileOnly ? "12px" : isTablet ? "20px" : "24px"};
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  font-family: Inter;

  & > span {
    margin-left: 8px;
    background: linear-gradient(80deg, #e96fc1 47.79%, #fea324 89.65%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Inter;
    font-size: ${isMobileOnly ? "12px" : isTablet ? "20px" : "24px"};
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
  }
`
export default Message
