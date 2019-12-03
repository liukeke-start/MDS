var wxd = {
        "current_year": "2019",
        "package_address": "https://dlie.sogoucdn.com/se/sogou_explorer_8.6_1000.exe",
        "package_date": "2019-11-04",
        "package_size": "50.5Mb",
        "package_version": "8.6.1.31701",
        "1package_address": "https://dlie.sogoucdn.com/se/sogou_explorer_8.6_1001.exe",
        "1package_date": "2019-11-05",
        "1package_size": "51.5Mb",
        "1package_version": "8.6.1.31701",
        "2package_address": "https://dlie.sogoucdn.com/se/sogou_explorer_8.6_1002.exe",
        "2package_date": "2019-11-06",
        "2package_size": "52.5Mb",
        "2package_version": "8.6.1.31701",
        "3package_address": "https://dlie.sogoucdn.com/se/sogou_explorer_8.6_1003.exe",
        "3package_date": "2019-11-07",
        "3package_size": "53.5Mb",
        "3package_version": "8.6.1.31701",
        "4package_address": "https://dlie.sogoucdn.com/se/sogou_explorer_8.6_1004.exe",
        "4package_date": "2019-11-08",
        "4package_size": "54.5Mb",
        "4package_version": "8.6.1.31701"
    }
    //高版本
function formatData(data) {
    let arr = []
    let reg = /[0-9]/
    for (let key in data) {
        if (key === 'current_year') continue

        let idx = key.slice(0, 1)
        let newKey = key
        let obj = {}
        if (reg.test(idx)) {
            idx = +idx
            newKey = key.slice(1)
        } else {
            idx = 0
        }
        obj[newKey] = data[key]
        arr[idx] = Object.assign({}, arr[idx], obj)
    }

    return arr
}

formatData(wxd)