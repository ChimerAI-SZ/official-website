import { useState, useRef } from "react"
import styled from "@emotion/styled"
import Image from "next/image"
import {
  Input,
  Textarea,
  Select,
  SelectItem,
  Button,
  Form,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter
} from "@nextui-org/react"

import { scaleList, platformList as initPlatformList } from "../constant"
import { fetchVerification } from "@lib/request/contact"

import styles from "../Contact.module.css"

const ContactForm = () => {
  const [platformList, setPlatformList] = useState<{ key: string; label: string }[]>(initPlatformList)
  const [modalVisible, setModalVisible] = useState(false) // 发送成功弹窗是否可见

  const [platform, setPlatform] = useState("")

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

      setTimeout(() => {
        setPlatform(newPlatform)
      }, 100)

      // 用完清空
      inputRef.current!.value = ""
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget) as unknown as Iterable<[string, string]>)

    // 后面开放选择目标部门
    data.category = "product"

    const res = await fetchVerification(data)

    if (res?.data?.success) {
      setModalVisible(true)
    } else {
      // todo handle error
    }
  }

  return (
    <FormContainer>
      <Form
        className="w-full max-w-xs flex flex-col gap-4 flex-grow"
        validationBehavior="native"
        onSubmit={handleSubmit}
      >
        <DoubleGroup>
          <Input
            isRequired
            errorMessage="Please enter a valid name"
            label="Name"
            labelPlacement="outside"
            name="name"
            placeholder="Enter your name"
            type="text"
            variant="bordered"
          />
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email Address"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
            validate={value => {
              if (!value.includes("@")) {
                return "Please enter a valid email"
              }

              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
              if (!emailRegex.test(value)) {
                return "Please enter a valid email"
              }

              return null
            }}
          />
        </DoubleGroup>

        <InputGroup>
          <Textarea
            errorMessage="Please enter your message"
            isRequired
            label="How can we help?"
            name="content"
            labelPlacement="outside"
            placeholder="Tell us about your project"
            variant="bordered"
          />
        </InputGroup>

        <DoubleGroup>
          <Select
            name="platforms"
            label="Platforms"
            placeholder="Select platform"
            variant="bordered"
            items={platformList}
            labelPlacement="outside"
            selectedKeys={[platform]}
            onChange={e => {
              setPlatform(e.target.value)
            }}
          >
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
          <Select
            name="company_scale"
            label="Scale of company"
            placeholder="Select company scale"
            variant="bordered"
            labelPlacement="outside"
          >
            {scaleList.map(scale => (
              <SelectItem key={scale.key}>{scale.label}</SelectItem>
            ))}
          </Select>
        </DoubleGroup>

        {/* <Checkbox>I agree to the Terms and Conditions.</Checkbox> */}

        <Button color="primary" size="lg" type="submit" className="w-full mt-[38px]">
          Send Message
        </Button>
      </Form>

      <Modal isOpen={modalVisible} hideCloseButton>
        <ModalContent>
          {onClose => (
            <>
              <ModalBody>
                <SuccessIcon>
                  <Image src="/assets/images/contact/success_icon.png" alt="success" width={42} height={42} />
                </SuccessIcon>
                <SuccessContent>Send Successfully!</SuccessContent>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <StyledOKBtn
                  onPress={() => {
                    setModalVisible(false)
                    onClose()
                  }}
                >
                  OK
                </StyledOKBtn>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  // --nextui-radius-medium: 8px;
`

const InputGroup = styled.div`
  width: 100%;

  @media (min-width: 780px) {
    margin-bottom: 27px;
  }
`

const DoubleGroup = styled(InputGroup)`
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (min-width: 780px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`

const AddBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
`

const SuccessIcon = styled.div`
  width: 106px;
  height: 106px;
  border-radius: 60px;
  background: linear-gradient(
    77deg,
    rgba(0, 143, 247, 0.3) -8.4%,
    rgba(160, 144, 249, 0.3) 33.27%,
    rgba(239, 108, 188, 0.3) 61.49%,
    rgba(254, 163, 36, 0.3) 86.49%
  );

  margin: 16px auto 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

const SuccessContent = styled.div`
  color: #000;

  leading-trim: both;

  text-edge: cap;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  text-align: center;
`

const StyledOKBtn = styled(Button)`
  background-color: #000;
  color: #f5f5f5;
  width: 248px;
  height: 48px;
  line-height: 48px;
`

export default ContactForm
