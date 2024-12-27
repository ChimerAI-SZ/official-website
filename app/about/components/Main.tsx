import styled from "@emotion/styled"
import Image from "next/image"
import { isTablet, isMobileOnly, isBrowser } from "react-device-detect"

// 提取共用类型
type DeviceProps = {
  $isTablet: boolean
  $isMobileOnly: boolean
}

type TextContainerProps = DeviceProps & {
  $isBrowser: boolean
}

// 提取常量
const DIMENSIONS = {
  LOGO: {
    DESKTOP: 415,
    TABLET: 300,
    MOBILE: 150,
    HEIGHT: 60
  },
  ABOUT_IMAGE: {
    WIDTH: 546,
    HEIGHT: 100
  } as const
}

const Main = () => {
  // 计算 logo 宽度
  const logoWidth = isTablet ? DIMENSIONS.LOGO.TABLET : isMobileOnly ? DIMENSIONS.LOGO.MOBILE : DIMENSIONS.LOGO.DESKTOP

  return (
    <AboutContainer $isTablet={isTablet} $isMobileOnly={isMobileOnly}>
      <TextContainer $isTablet={isTablet} $isBrowser={isBrowser} $isMobileOnly={isMobileOnly}>
        <Title>
          <Image src="/assets/images/logo-black.png" alt="logo" width={logoWidth} height={DIMENSIONS.LOGO.HEIGHT} />
          <Text $isTablet={isTablet} $isMobileOnly={isMobileOnly}>
            {"is reshaping fashion with Al-powered design, crafting garments that embody your brand's identity."}
          </Text>
          <Text $isTablet={isTablet} $isMobileOnly={isMobileOnly}>
            {
              "Leveraging advanced technology and the world's largest manufacturing network, we turn your vision into high-quality, on-demand reality, and sales-driven production."
            }
          </Text>
        </Title>
      </TextContainer>
      <StyledImage
        src="/assets/images/about/about_us.png"
        alt="about"
        width={DIMENSIONS.ABOUT_IMAGE.WIDTH}
        height={DIMENSIONS.ABOUT_IMAGE.HEIGHT}
        $isTablet={isTablet}
        $isMobileOnly={isMobileOnly}
      />
    </AboutContainer>
  )
}

const AboutContainer = styled.div<DeviceProps>`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  padding-top: 72px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${({ $isTablet, $isMobileOnly }) => ($isTablet || $isMobileOnly) && "flex-direction: column;"}
`

const TextContainer = styled.div<TextContainerProps>`
  font-size: 16px;
  color: #000;
  font-family: Inter;
  ${({ $isBrowser }) => $isBrowser && `width: calc(100% - ${DIMENSIONS.ABOUT_IMAGE.WIDTH}px - 80px);`}

  ${({ $isTablet }) => $isTablet && "width: 70vw; margin-top: 72px;"}
    
  ${({ $isMobileOnly }) => $isMobileOnly && "width: 80vw; margin-top: 40px;"}
`
const Title = styled.div`
  font-size: 24px;
  font-family: Inter;
  color: #000;
  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`
const Text = styled.p<{ $isTablet: boolean; $isMobileOnly: boolean }>`
  color: #000;
  font-family: Inter;
  font-size: ${({ $isTablet, $isMobileOnly }) => ($isTablet ? "20px" : $isMobileOnly ? "16px" : "24px")};
  font-style: normal;
  font-weight: 400;
  line-height: ${({ $isTablet, $isMobileOnly }) => ($isTablet ? "28px" : $isMobileOnly ? "20px" : "32px")};
`
const StyledImage = styled(Image)<{ $isTablet: boolean; $isMobileOnly: boolean }>`
  position: absolute;
  right: 0;
  ${({ $isTablet, $isMobileOnly }) =>
    ($isTablet || $isMobileOnly) &&
    ` position: relative;
      margin-top:88px;`}
`

export default Main
