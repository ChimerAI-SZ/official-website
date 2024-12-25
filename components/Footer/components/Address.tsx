import styled from "@emotion/styled"
import { isTablet, isMobileOnly } from "react-device-detect"

const Address = () => {
  return (
    <AddressSection $isMobile={isMobileOnly} $isTablet={isTablet}>
      <h3>Address</h3>
      <p>3 Fraser Street #04-23A Duo Tower, Singapore 189352</p>
      <h3>Contact</h3>
      <p>contact@creamoda.ai</p>
    </AddressSection>
  )
}

const AddressSection = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  color: #d4d4d4
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 280px;

  & > h3 {
    color: rgba(255, 255, 255, 0.5);

    font-family: Inter;
    font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "16px")};
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 8px;
  }

  & > p {
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;

    margin-bottom: 16px;
  }
`

export default Address
