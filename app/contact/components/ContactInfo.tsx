import styled from "@emotion/styled"

const ContactInfo = () => {
  return (
    <InfoContainer>
      <Title>GET IN TOUCH</Title>
      <SubTitle>
        We&apos;re easy to work with
        <br />
        and love a friendly collab!
      </SubTitle>
      <EmailText>
        You can also send us an email at <EmailLink href="mailto:contact@creamoda.ai">contact@creamoda.ai</EmailLink> if
        you prefer.
      </EmailText>
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
  flex: 1;

  @media (max-width: 780px) {
    flex-grow: 0;
  }
`

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.88);

  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 12px;

  @media (max-width: 780px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`

const SubTitle = styled.h2`
  color: rgba(0, 0, 0, 0.88);

  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 16px;

  @media (max-width: 780px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`

const EmailText = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 780px) {
    font-size: 12px;
  }
`

const EmailLink = styled.a`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;

  @media (max-width: 780px) {
    font-size: 12px;
  }
  }
`

export default ContactInfo
