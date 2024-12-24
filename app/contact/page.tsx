"use client"

import styled from "@emotion/styled"

import ContactInfo from "./components/ContactInfo"
import ContactForm from "./components/ContactForm"
import FQA from "./components/FQA"

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContentWrapper>
        <ContactInfo />
        <ContactForm />
      </ContentWrapper>
      <FQA />
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  padding-top: 72px;
`

const ContentWrapper = styled.div`
  display: flex;
  gap: 48px;

  height: 100vh;

  @media (min-width: 1200px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export default ContactPage
