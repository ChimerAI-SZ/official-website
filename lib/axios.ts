import axios, {
  AxiosRequestConfig,
  RawAxiosResponseHeaders,
  CancelTokenSource,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponseHeaders
} from "axios"

interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  cancelToken?: CancelTokenSource["token"]
  headers: AxiosRequestHeaders
  data?: unknown
  msg?: string
}

// 统一定义一下 axios 返回类型
export interface AxiosResponse<T = unknown, D = unknown> {
  data: T
  code?: number
  message?: string
  success?: boolean
  value?: object
  status: number
  statusText: string
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders
  config: InternalAxiosRequestConfig<D>
  request?: unknown
  msg?: string
}

declare global {
  interface Window {
    $message?: {
      destroy: () => void
      error: (options: { content: string; duration: number; onClose: () => void }) => void
    }
  }
}

// 保留拦截的用于请求后端转发 ideogram api 的 Axios 实例（
export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "/",
  timeout: 50000
})

// 用于存储 pending 的请求（处理多条相同请求）
const pendingRequest = new Map<string, CancelTokenSource>()

// 生成 request 的唯一 key
const generateRequestKey = (config: AxiosRequestConfig): string => {
  const { url, method, params, data } = config
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join("&")
}

// 将重复请求添加到 pendingRequest 中
const addPendingRequest = (config: ExtendedAxiosRequestConfig): void => {
  const key = generateRequestKey(config)
  if (!pendingRequest.has(key)) {
    const source = axios.CancelToken.source()
    config.cancelToken = source.token
    pendingRequest.set(key, source)
  }
}

// 取消重复请求
const removePendingRequest = (config: AxiosRequestConfig): void => {
  const key = generateRequestKey(config)
  if (pendingRequest.has(key)) {
    const source = pendingRequest.get(key)
    if (source) source.cancel(key) // 取消之前发送的请求
    pendingRequest.delete(key) // 请求对象中删除 requestKey
  }
}

// 为两个实例添加拦截器
;[instance].forEach(instance => {
  instance.interceptors.request.use(
    config => {
      const extendedConfig = config as ExtendedAxiosRequestConfig
      removePendingRequest(extendedConfig)
      addPendingRequest(extendedConfig)

      return extendedConfig
    },
    error => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // 在一个 ajax 响应后再执行一下取消操作，把已经完成的请求从 pending 中移除
      removePendingRequest(response.config)

      return response
    },
    error => {
      const { status } = error?.response || {}
      if (status === 500) {
        window.$message?.destroy()
        console.error(status)
      } else if (status === 401) {
      }
      return Promise.reject(error)
    }
  )
})
