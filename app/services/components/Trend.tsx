import styled from "@emotion/styled"
import Image from "next/image"

import { trendList } from "../constant"

const Trend = () => {
  return (
    <ImageGrid>
      <Ribbon>
        <Image
          src="/assets/images/services/ribbon.png"
          alt="Ribbon"
          width={360}
          height={100}
          style={{
            width: "120%",
            marginLeft: "-10%"
          }}
        />
      </Ribbon>
      {trendList.map(item => (
        <ImageWrapper key={item.key} style={{ zIndex: item.key <= 2 ? 15 : 5 }}>
          <Image
            src={`/assets/images/services/trend_${item.key}.png`}
            alt={`trend ${item.key}`}
            layout="intrinsic"
            objectFit="contain"
            width={300}
            height={300}
            priority={item.key === 1}
          />
          <TrendTitle>
            <div>
              <div>{item.label}</div>
            </div>
          </TrendTitle>
        </ImageWrapper>
      ))}
    </ImageGrid>
  )
}

const ImageGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 2rem 0;
`

const Ribbon = styled.div`
  position: absolute;
  inset: 0;
  left: -10%;
  right: -10%;
  width: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50vh;

  img {
    object-fit: cover;
    border-radius: 8px;
  }
`

const TrendTitle = styled.span`
  background: var(--222, linear-gradient(77deg, #008ff7 -8.4%, #a090f9 33.27%, #ef6cbc 61.49%, #fea324 86.49%));
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
      background: var(--222, linear-gradient(77deg, #008ff7 -8.4%, #a090f9 33.27%, #ef6cbc 61.49%, #fea324 86.49%));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

export default Trend