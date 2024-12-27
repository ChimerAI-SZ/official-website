import styled from "@emotion/styled"

const Address = () => {
  return (
    <AddressSection>
      <h3>Address</h3>
      <p>3 Fraser Street #04-23A Duo Tower, Singapore 189352</p>
      <h3>Contact</h3>
      <p>contact@creamoda.ai</p>
    </AddressSection>
  )
}

const AddressSection = styled.div`
  width: 280px;

  h3 {
    color: #ebebeb;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 16px;
  }

  p {
    color: #ebebeb;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`

export default Address
