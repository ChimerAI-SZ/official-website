import styled from "@emotion/styled"
import { isTablet, isMobileOnly } from "react-device-detect"

const Address = () => {
  return (
    <AddressSection $isMobile={isMobileOnly} $isTablet={isTablet}>
      <h3>Address</h3>
      <p>3 Fraser Street #04-23A Duo Tower, Singapore 189352</p>
      <h3>Contact</h3>
      <a href="mailto:contact@creamoda.ai">contact@creamoda.ai</a>
    </AddressSection>
  )
}

// 各个区块的通用样式
const Section = styled.div`
  width: 168px;
  h3 {
    color: rgba(255, 255, 255, 0.5);

    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    margin-bottom: 24px;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  a {
    color: var(--Neutral-White, #fff);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */

    &:hover {
      color: #000;
    }
  }
`

const AddressSection = styled(Section)<{ $isMobile: boolean; $isTablet: boolean }>`
  color: var(--Graysclae-300, #d4d4d4);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  width: 280px;

  & > h3 {
    color: rgba(255, 255, 255, 0.5);

    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */

    margin-bottom: 8px;
  }

  & > p {
    color: var(--Neutral-White, #fff);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */

    margin-bottom: 16px;
  }
`

export default Address
