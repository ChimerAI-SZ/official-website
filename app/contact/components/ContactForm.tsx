import styled from "@emotion/styled"
import { Input, Textarea, Select, SelectItem, Checkbox, Button } from "@nextui-org/react"

const ContactForm = () => {
  return (
    <Form>
      <InputGroup>
        <Input label="First Name" placeholder="Enter your first name" variant="bordered" />
        <Input label="Email Address" placeholder="Enter your email" variant="bordered" />
      </InputGroup>

      <Textarea label="How can we help?" placeholder="Tell us about your project" variant="bordered" />

      <InputGroup>
        <Select label="Platforms" placeholder="Select platform" variant="bordered">
          <SelectItem key="web">Web</SelectItem>
          <SelectItem key="mobile">Mobile</SelectItem>
          <SelectItem key="desktop">Desktop</SelectItem>
        </Select>

        <Select label="Scale of company" placeholder="Select company scale" variant="bordered">
          <SelectItem key="startup">Startup</SelectItem>
          <SelectItem key="small">Small Business</SelectItem>
          <SelectItem key="medium">Medium Business</SelectItem>
          <SelectItem key="large">Large Enterprise</SelectItem>
        </Select>
      </InputGroup>

      <Checkbox>I agree to the Terms and Conditions.</Checkbox>

      <Button color="primary" size="lg">
        Send Message
      </Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
  flex: 1;
`

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`

export default ContactForm
