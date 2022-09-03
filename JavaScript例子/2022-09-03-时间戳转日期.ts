export function timestampToTime(timestamp) {
    // 8 * 3600 * 1000 是因为后台返回的10位时间戳转成日期之后快了8个小时 所以减去8个小时
    return new Date(parseInt(timestamp) * 1000 - 8 * 3600 * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')
}