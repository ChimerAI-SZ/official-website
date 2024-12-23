"use client"

import styled from "@emotion/styled"
import Main from "./components/Main"
import Message from "./components/Message"

const AboutPage = () => {
  return (
    <Container>
      <Main />
      <Message />
    </Container>
  )
}
const Container = styled.div`
  background-color: #faf9fb;
`

export default AboutPage
