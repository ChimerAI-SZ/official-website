import styled from "@emotion/styled"
import Image from "next/image"

const LogoFC = () => {
  return (
    <LogoSection>
      <Logo>
        <Image
          src={`/assets/images/logo-white.png`}
          alt="CREAMODA"
          width={200}
          height={26}
          className="object-contain"
          priority
        />
      </Logo>
      <Description>
        CREAMODA is an AI-powered clothing design and supply chain platform, offering a comprehensive end-to-end service
        for independent fashion brands and retailers, from design to wholesale.
      </Description>
    </LogoSection>
  )
}

const LogoSection = styled.div`
  width: 280px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`

const Logo = styled.h2`
  font-size: 24px;
  font-family: Inter;
  margin-bottom: 20px;
`

const Description = styled.p`
  color: #ebebeb;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`

export default LogoFC
