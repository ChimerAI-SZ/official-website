import styled from "@emotion/styled"
import Image from "next/image"
import { isTablet, isMobileOnly, isBrowser } from "react-device-detect"

// 提取常量
const DIMENSIONS = {
  LOGO: {
    DESKTOP: 240,
    TABLET: 205,
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
    <AboutContainer>
      <TextContainer>
        <Title>
          <Image src="/assets/images/logo-black.png" alt="logo" width={logoWidth} height={DIMENSIONS.LOGO.HEIGHT} />
          <Text>
            {"is reshaping fashion with Al-powered design, crafting garments that embody your brand's identity."}
          </Text>
          <Text>
            {
              "Leveraging advanced technology and the world's largest manufacturing network, we turn your vision into high-quality, on-demand reality, and sales-driven production."
            }
          </Text>
        </Title>
      </TextContainer>
      <StyledImage>
        {isBrowser && (
          <>
            <Image
              src="/assets/images/about/ribbon_1.svg"
              alt="about"
              width={1000}
              height={800}
              style={{
                position: "absolute",
                top: "305px",
                left: "-720px",
                maxWidth: "unset"
              }}
            />
            <Image
              src="/assets/images/about/ribbon_2.svg"
              alt="about"
              width={130}
              height={130}
              style={{
                position: "absolute",
                top: "-56px",
                right: "20px",
                maxWidth: "unset"
              }}
            />
          </>
        )}
        <Image
          src="/assets/images/about/about_us.png"
          alt="about"
          width={DIMENSIONS.ABOUT_IMAGE.WIDTH}
          height={DIMENSIONS.ABOUT_IMAGE.HEIGHT}
        />
      </StyledImage>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 72px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 780px) {
    height: 100vh;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const TextContainer = styled.div`
  font-size: 16px;
  color: #000;
  font-family: Inter;
  @media (min-width: 1024px) {
    width: calc(100% - ${DIMENSIONS.ABOUT_IMAGE.WIDTH}px - 80px);
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 70vw;
    margin-top: 72px;
  }

  @media (max-width: 767px) {
    width: 80vw;
    margin-top: 40px;
  }
`
const Title = styled.div`
  font-size: 24px;
  font-family: Inter;
  color: #000;
  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`
const Text = styled.p`
  color: #000;
  font-family: Inter;
  font-size: ${isMobileOnly ? "16px" : "20px"};
  font-style: normal;
  font-weight: 400;
  line-height: ${isTablet ? "28px" : isMobileOnly ? "20px" : "32px"};
`
const StyledImage = styled.div`
  position: absolute;
  right: 0;

  @media (max-width: 780px) {
    position: relative;
    margin: 88px 32px 32px;
    width: calc(100% - 64px);
  }
`

export default Main
