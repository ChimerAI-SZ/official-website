"登录页面"
import axios from "../axios"

// 发送验证码
export const fetchVerification = (params: object) => {
  return axios.post("/api/official/feedback", params)
}
