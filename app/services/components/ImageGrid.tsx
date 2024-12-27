import styled from "@emotion/styled"
import Image from "next/image"
import { memo, useCallback, useEffect, useRef, useState } from "react"
import { isBrowser, isMobileOnly, isTablet } from "react-device-detect"

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
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

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
            style={{ top: "25%", left: "-100px" }}
          />
          <RibbonComponent
            src="/assets/images/services/ribbon_2.svg"
            alt="trend 2"
            width={150}
            height={150}
            style={{ top: "50%", right: "-80px" }}
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
            style={{ top: "50%", left: "-200px" }}
          />
          <RibbonComponent
            src="/assets/images/services/ribbon_4.svg"
            alt="trend 4"
            width={450}
            height={450}
            style={{ top: "40%", right: "-415px" }}
          />
        </>
      )
    }

    return null
  }

  // 处理滚动按钮点击
  const handlePrev = () => {
    if (containerRef.current && canScrollLeft) {
      const cardWidth = 300
      const gap = 32
      const targetScroll = containerRef.current.scrollLeft - (cardWidth + gap)
      containerRef.current.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth"
      })
    }
  }

  const handleNext = () => {
    if (containerRef.current && canScrollRight) {
      const cardWidth = 300
      const gap = 32
      const targetScroll = containerRef.current.scrollLeft + (cardWidth + gap)
      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      })
    }
  }

  // 检查滚动位置
  const checkScroll = useCallback(() => {
    if (containerRef.current && !isBrowser) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth)
    }
  }, [])

  // 添加滚动检测效果
  useEffect(() => {
    const timer = setTimeout(() => {
      checkScroll()
    }, 0)
    return () => clearTimeout(timer)
  }, [checkScroll])

  useEffect(() => {
    const container = containerRef.current
    if (container && !isBrowser) {
      container.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)
    }

    return () => {
      container?.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  return (
    <TrendContainer className={`${keyword}-tab-container`}>
      <ImageGrid ref={containerRef} $isMobile={!isBrowser}>
        {list.map((item, index) => (
          <ImageItem key={item.key} $isMobile={!isBrowser}>
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
                  height: "calc(100% - 50px)"
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
      {!isBrowser && (
        <ButtonGroup>
          <NavButton onClick={handlePrev} disabled={!canScrollLeft} $isDisabled={!canScrollLeft}>
            <div>
              <Image
                src={`/assets/images/services/left_arrow${canScrollLeft ? "" : "_disabled"}.svg`}
                alt="arrow-left"
                width={15}
                height={15}
              />
            </div>
          </NavButton>
          <NavButton onClick={handleNext} disabled={!canScrollRight} $isDisabled={!canScrollRight}>
            <div>
              <Image
                src={`/assets/images/services/right_arrow${canScrollRight ? "" : "_disabled"}.svg`}
                alt="arrow-right"
                width={15}
                height={15}
              />
            </div>
          </NavButton>
        </ButtonGroup>
      )}
    </TrendContainer>
  )
}

const TrendContainer = styled.div`
  max-width: 1200px;
  ${!isBrowser &&
  `
    max-width: 100%;
    margin: 0 auto 36px;
  `}

  @media screen and (min-width: 1920px) {
    max-width: 1400px;
  }
`

const ImageGrid = styled.div<{ $isMobile: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${isBrowser ? "64px" : isMobileOnly ? "0.5rem" : "32px"};
  margin: 2rem 0;
  padding: 0 ${isTablet ? "54px" : "1rem"};
  scroll-padding: ${isTablet ? "54px" : "1rem"};

  ${props =>
    props.$isMobile &&
    `
    margin: 0;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `}
`

const Ribbon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

const ImageItem = styled.div<{ $isMobile: boolean }>`
  position: relative;
  ${props =>
    props.$isMobile &&
    `
    scroll-snap-align: start;
    min-width:250px;
  `}
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
      background: var(--gradient-heavy);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 20px;
  padding: 0 1rem;
`

const NavButton = styled.button<{ $isDisabled?: boolean }>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--gradient-primary);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.$isDisabled ? "#999" : "white")};
  cursor: ${props => (props.$isDisabled ? "not-allowed" : "pointer")};

  & > div {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default memo(Trend)
