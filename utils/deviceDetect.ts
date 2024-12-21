import { headers } from "next/headers"
import { getSelectorsByUserAgent } from "react-device-detect"

export const getDeviceInfo = async () => {
  const headersReadOnly = await headers()
  const userAgent = headersReadOnly.get("user-agent")
  const { isTablet, isMobileOnly, isBrowser } = userAgent
    ? getSelectorsByUserAgent(userAgent)
    : {
        isTablet: false,
        isMobileOnly: false,
        isBrowser: false
      }

  return {
    isTablet,
    isMobileOnly,
    isBrowser
  }
}
