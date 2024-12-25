import { useState, useRef } from "react"
import styled from "@emotion/styled"

import { Input, Textarea, Select, SelectItem, Button } from "@nextui-org/react"

import { scaleList, platformList as initPlatformList } from "../constant"

import styles from "../Contact.module.css"

const ContactForm = () => {
  const [platformList, setPlatformList] = useState<{ key: string; label: string }[]>(initPlatformList)

  // 把input的值放到state里，在add的时候会有拿不到的情况，所以直接存到ref里
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAddPlatform = () => {
    const newPlatform = inputRef.current?.value

    if (newPlatform) {
      setPlatformList(prev => [
        ...prev.slice(0, prev.length - 1),
        { key: newPlatform, label: newPlatform },
        ...prev.slice(prev.length - 1)
      ])

      // 用完清空
      inputRef.current!.value = ""
    }
  }

  return (
    <Form>
      <InputGroup>
        <Input label="First Name" placeholder="Enter your first name" variant="bordered" />
        <Input label="Email Address" placeholder="Enter your email" variant="bordered" />
      </InputGroup>

      <Textarea label="How can we help?" placeholder="Tell us about your project" variant="bordered" />

      <InputGroup>
        <Select label="Platforms" placeholder="Select platform" variant="bordered" items={platformList}>
          {platform => (
            <SelectItem
              className={platform.key === "Other" ? styles.otherPlatform : ""}
              key={platform.key}
              textValue={platform.label}
              {...(platform.key === "Other"
                ? {
                    isReadOnly: true,
                    hideSelectedIcon: true
                  }
                : {})}
              // 倒数第二个展示分割线
              showDivider={platform.key === platformList[platformList.length - 2].key}
            >
              {platform.key === "Other" ? (
                <AddBox onClick={e => e.stopPropagation()}>
                  <Input ref={inputRef} placeholder="Enter platform name" variant="bordered" />
                  <Button variant="bordered" size="sm" onPress={() => handleAddPlatform()}>
                    Add
                  </Button>
                </AddBox>
              ) : (
                platform.label
              )}
            </SelectItem>
          )}
        </Select>

        <Select label="Scale of company" placeholder="Select company scale" variant="bordered">
          {scaleList.map(scale => (
            <SelectItem key={scale.key}>{scale.label}</SelectItem>
          ))}
        </Select>
      </InputGroup>

      {/* <Checkbox>I agree to the Terms and Conditions.</Checkbox> */}

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

const AddBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
`

export default ContactForm
