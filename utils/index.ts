/**
 * async 方法错误捕获
 * @param {type: Function, desc: 异步方法（必填） } asyncFunc
 * @param  {type: } data
 * @param  {type: bool, desc: 是否是自定义信息 } flag
 */
export const errorCaptureRes = async (asyncFunc: (arg0: any) => any, data?: any, flag = true) => {
  try {
    const res = await asyncFunc(data)
    if (!res.success) {
      return [{ message: res.message || "未获取到信息", code: res.code }, res]
    }
    return [null, res]
  } catch (e: any) {
    // 如果是接口取消的错误，直接返回 null
    if (e.code === "ERR_CANCELED") {
      return [null, null]
    }
    // 其他错误正常返回
    return [e, null]
  }
}
