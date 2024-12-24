import { useState, useEffect, useRef, useCallback } from "react"
import styled from "@emotion/styled"
import { supplyChainList } from "../constant"

const SupplyChain = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const containerRef = useRef<HTMLDivElement>(null)

  // 检查滚动位置
  const checkScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      // 使用更精确的滚动位置判断
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth)
    }
  }, [])

  const handlePrev = () => {
    if (containerRef.current && canScrollLeft) {
      const cardWidth = 300
      const gap = 45
      const currentScroll = containerRef.current.scrollLeft
      const targetScroll = currentScroll - (cardWidth + gap)

      containerRef.current.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth"
      })
    }
  }

  const handleNext = () => {
    if (containerRef.current && canScrollRight) {
      const cardWidth = 300
      const gap = 45
      const currentScroll = containerRef.current.scrollLeft
      const targetScroll = currentScroll + (cardWidth + gap)

      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      })

      // 更新左侧按钮状态
      setCanScrollLeft(true)

      // 检查是否会滚动到最右侧
      if (containerRef.current.scrollWidth - targetScroll <= containerRef.current.clientWidth) {
        setCanScrollRight(false)
      }
    }
  }

  // 初始化时检查滚动状态
  useEffect(() => {
    // 确保DOM已经渲染完成
    const timer = setTimeout(() => {
      checkScroll()
    }, 0)

    return () => clearTimeout(timer)
  }, [checkScroll])

  // 监听滚动事件
  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      // 监听窗口大小变化
      window.addEventListener("resize", checkScroll)
    }

    return () => {
      container?.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  return (
    <Container>
      <ScrollContainer ref={containerRef} className="scroll-container">
        <ItemContainer>
          <CardSet>
            {supplyChainList.map(item => (
              <CardBox key={item.key}>
                <Card>
                  <CardTitle>{item.title}</CardTitle>
                  <CardContent>{item.content}</CardContent>
                </Card>
              </CardBox>
            ))}
          </CardSet>
        </ItemContainer>
      </ScrollContainer>
      <ButtonGroup>
        <NavButton onClick={handlePrev} disabled={!canScrollLeft} $isDisabled={!canScrollLeft}>
          <div>&lt;</div>
        </NavButton>
        <NavButton onClick={handleNext} disabled={!canScrollRight} $isDisabled={!canScrollRight}>
          <div>&gt;</div>
        </NavButton>
      </ButtonGroup>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`

const ScrollContainer = styled.div`
  position: relative;
  scroll-snap-type: x mandatory;
  overflow-x: auto; // 只设置横向滚动
  overflow-y: visible; // 确保垂直方向可见
  scroll-behavior: smooth;
  scrollbar-width: none;
  // 添加 scroll-padding 以及 ItemContainer 里的 padding 才会正常显示溢出部分
  scroll-padding: calc((100vw - 1200px) / 2);

  height: 50vh;
  display: flex;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
`

const ItemContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(1, auto);
  grid-template-columns: max-content;
  grid-auto-flow: column;
  grid-column-gap: 45px;
  column-gap: 45px;
  grid-row-gap: 0px;
  row-gap: 0px;
  width: -moz-fit-content;
  width: fit-content;
  padding: 0 calc((100vw - 1200px) / 2);
`

const CardSet = styled.ul`
  display: grid;
  grid-template-rows: repeat(1, auto);
  grid-template-columns: max-content;
  grid-auto-flow: column;
  grid-column-gap: 45px;
  column-gap: 45px;
  grid-row-gap: 0px;
  row-gap: 0px;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0;
  list-style: none;

  background: rgba(255, 255, 255, 0.5);
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(
      86deg,
      rgba(0, 143, 247, 0.1) 5.27%,
      rgba(160, 144, 249, 0.1) 39.5%,
      rgba(239, 108, 188, 0.1) 78.9%,
      rgba(254, 163, 36, 0.1) 98.84%
    );
    border-radius: 24px;
    filter: blur(10px);
    z-index: -1;
  }
`

const CardBox = styled.li`
  flex: 0 0 300px;
  scroll-snap-align: start;
  position: relative;
  z-index: 1;

  border-radius: 20px;
  background: linear-gradient(147deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100.08%);

  transition: background 0.5s ease-in-out;

  &:hover {
    background: #fff;
  }
`

const Card = styled.div`
  // 确保卡片内容可见
  position: relative;
  z-index: 1;
  width: 310px;
  padding: 36px 24px 64px;
`

const CardTitle = styled.h3`
  margin-bottom: 14px;

  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
const CardContent = styled.p`
  color: #000;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
`
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;

  max-width: 1200px;
  gap: 20px;

  margin-top: 30px;
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

export default SupplyChain
