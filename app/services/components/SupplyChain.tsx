import { useState } from "react"
import styled from "@emotion/styled"
import { supplyChainList } from "../constant"

const SupplyChain = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + supplyChainList.length) % supplyChainList.length)
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % supplyChainList.length)
  }

  return (
    <Container>
      <CardContainer>
        {supplyChainList.map((item, index) => (
          <Card
            key={item.key}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              opacity: index === currentIndex ? 1 : 0
            }}
          >
            <CardTitle>{item.title}</CardTitle>
            <CardContent>{item.content}</CardContent>
          </Card>
        ))}
      </CardContainer>
      <ButtonGroup>
        <NavButton onClick={handlePrev}>&lt;</NavButton>
        <NavButton onClick={handleNext}>&gt;</NavButton>
      </ButtonGroup>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  overflow: hidden;
`
const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
`
const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  transition: all 0.5s ease;
`
const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #008ff7 0%, #a090f9 35%, #ef6cbc 65%, #fea324 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const CardContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(90deg, #008ff7 0%, #a090f9 100%);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`

export default SupplyChain
