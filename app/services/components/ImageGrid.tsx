import styled from "@emotion/styled"
import Image from "next/image"
import { memo } from "react"
import { isBrowser } from "react-device-detect"

interface RibbonProps {
  src: string
  alt: string
  width: number
  height: number
  style: React.CSSProperties
}

const RibbonComponent = memo(({ src, alt, width, height, style }: RibbonProps) => (
  <Ribbon style={style}>
    <Image src={src} alt={alt} width={width} height={height} />
  </Ribbon>
))

RibbonComponent.displayName = "RibbonComponent"

interface TrendProps {
  list: { label: string; key: number }[]
  keyword: string
}

const Trend: React.FC<TrendProps> = ({ list, keyword }) => {
  const renderRibbons = (index: number) => {
    if (!isBrowser) return null

    if (index === 0) {
      return (
        <>
          <RibbonComponent
            src="/assets/images/services/ribbon_1.svg"
            alt="trend 1"
            width={100}
            height={100}
            style={{ top: "200px", left: "-100px" }}
          />
          <RibbonComponent
            src="/assets/images/services/ribbon_2.svg"
            alt="trend 2"
            width={150}
            height={150}
            style={{ top: "350px", right: "-50px" }}
          />
        </>
      )
    }

    if (index === 2) {
      return (
        <>
          <RibbonComponent
            src="/assets/images/services/ribbon_3.svg"
            alt="trend 3"
            width={200}
            height={200}
            style={{ top: "350px", left: "-200px" }}
          />
          <RibbonComponent
            src="/assets/images/services/ribbon_4.svg"
            alt="trend 4"
            width={400}
            height={400}
            style={{ top: "350px", right: "-367px" }}
          />
        </>
      )
    }

    return null
  }

  return (
    <TrendContainer className={`${keyword}-tab-container`}>
      <ImageGrid>
        {list.map((item, index) => (
          <ImageItem key={item.key}>
            {renderRibbons(index)}
            <ImageWrapper style={{ zIndex: item.key <= 2 ? 15 : 5 }}>
              <Image
                src={`/assets/images/services/${keyword}_${item.key}.png`}
                alt={`${keyword} ${item.key}`}
                width={300}
                height={300}
                quality={100}
                style={{
                  objectFit: "contain",
                  width: "auto",
                  height: "100%"
                }}
                priority={item.key === 1}
              />
              <TrendTitle>
                <div>
                  <div>{item.label}</div>
                </div>
              </TrendTitle>
            </ImageWrapper>
          </ImageItem>
        ))}
      </ImageGrid>
    </TrendContainer>
  )
}

const TrendContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 36px;
  padding: 0 1rem;

  @media screen and (min-width: 1920px) {
    max-width: 1400px;
  }
`

const ImageGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 2rem 0;
`

const Ribbon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

const ImageItem = styled.div`
  position: relative;
`

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60vh;
  min-height: 400px;

  @media screen and (min-width: 1920px) {
    height: 70vh;
  }

  img {
    position: relative !important;
    object-fit: contain;
    border-radius: 8px;
  }
`

const TrendTitle = styled.span`
  background: var(--gradient-primary);
  border-radius: 100px;

  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background: #fff;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    white-space: nowrap;

    & > div {
      background: var(--gradient-primary);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

export default memo(Trend)
