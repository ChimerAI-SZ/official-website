"use client"

import { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import styled from "@emotion/styled"

import ContactInfo from "./components/ContactInfo"
import ContactForm from "./components/ContactForm"
import FQA from "./components/FQA"

// 创建一个单独的组件来处理滚动逻辑
const ScrollHandler = () => {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.has("fqa")) {
      const fqaElement = document.getElementById("fqa-container")
      if (fqaElement) {
        fqaElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [searchParams])

  return null
}

const ContactPage = () => {
  return (
    <ContactContainer>
      <Main>
        <ContentWrapper>
          <ContactInfo />
          <ContactForm />
        </ContentWrapper>
      </Main>
      <FQA />
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 72px;

  @media (max-width: 780px) {
    max-width: 100%;
  }
`
const Main = styled.div`
  @media (max-width: 780px) {
    padding: 60px 32px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  gap: 48px;
  height: calc(100vh - 132px);
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 20vh;
  }
`

export default ContactPage
