export class Utils {
  static createMarkup (arg) {
    return { __html: arg }
  }

  static formatPostDate (date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const n = new Date(date)
    const y = n.getFullYear()
    const m = months[n.getMonth()]
    const dw = n.getDate()
    return `${m} ${dw}, ${y}`
  }
}

export default Utils
