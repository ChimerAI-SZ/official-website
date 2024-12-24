import styled from "@emotion/styled"
import { isTablet, isMobileOnly, isBrowser } from "react-device-detect"
import Image from "next/image"

const LogoWidth = isMobileOnly ? 120 : 200
const LogoHeight = isMobileOnly ? 16 : 26

const LogoFC = () => {
  return (
    <LogoSection $isMobile={isMobileOnly} $isTablet={isTablet}>
      <Logo>
        <Image
          src={`/assets/images/logo-white.png`}
          alt="CREAMODA"
          width={LogoWidth}
          height={LogoHeight}
          className="object-contain"
          priority
        />
      </Logo>
      <Description $isBrowser={isBrowser}>
        CREAMODA is an AI-powered clothing design and supply chain platform, offering a comprehensive end-to-end service
        for independent fashion brands and retailers, from design to wholesale.
      </Description>
    </LogoSection>
  )
}

// Logo 部分
const LogoSection = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  flex: 1;
  min-width: 280px;
`

const Logo = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`

const Description = styled.p<{ $isBrowser: boolean }>`
  color: var(--Graysclae-300, #d4d4d4);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  max-width: ${({ $isBrowser }) => ($isBrowser ? "280px" : "100%")};
`

export default LogoFC
