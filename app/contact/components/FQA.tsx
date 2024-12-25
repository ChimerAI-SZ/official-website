import styled from "@emotion/styled"
import Image from "next/image"

import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { AccordionList } from "../constant"

const FQA = () => {
  return (
    <Container className="contact-fqa-container">
      <Title>Frequently asked questions</Title>
      <StyledAccordion variant="splitted">
        {AccordionList.map(item => (
          <AccordionItem
            key={item.title}
            aria-label={item.title}
            title={item.title}
            indicator={({ isOpen }) => (
              <Image
                src={`/assets/images/contact/${isOpen ? "expanded" : "closed"}.svg`}
                alt="expanded"
                width={24}
                height={24}
              />
            )}
          >
            {Array.isArray(item.content) ? (
              item.content.map((content, index) => (
                <AccordionContent key={index}>
                  {content.title}
                  {content.list.map((list, index) => (
                    <AccordionContent key={index}>
                      <ContentSubTitle>{list.subtitle}</ContentSubTitle>
                      {list.content}
                    </AccordionContent>
                  ))}
                </AccordionContent>
              ))
            ) : item.isLink ? (
              <AccordionContent>
                <ContentLink>{item.content}</ContentLink>
              </AccordionContent>
            ) : (
              <AccordionContent>{item.content}</AccordionContent>
            )}
          </AccordionItem>
        ))}
      </StyledAccordion>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 20vh;

  @media (min-width: 1200px) {
    margin-top: unset;
  }
`
const Title = styled.div`
  color: rgba(0, 0, 0, 0.88);

  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  text-align: center;

  margin-bottom: 32px;
`

const AccordionContent = styled.div`
  color: #747474;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 10px;
`

const StyledAccordion = styled(Accordion)`
  width: 75%;
  margin: 0 auto 88px;

  & > div {
    box-shadow: unset;
    background-color: #f3f0f5;
  }
`

const ContentSubTitle = styled.div`
  color: #747474;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`

const ContentLink = styled.a`
  color: #0928db;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;

  cursor: pointer;
`

export default FQA
