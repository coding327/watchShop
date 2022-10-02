// 设置cookie用法
// setBtn.onclick = function () {
//     // 注意实参键值对和path是字符串类型，而过期时间会转字符串
//     setCookie('user', 'a123', 7 * 24 * 60 * 60, '/')
// }

// 获取cookie用法
// getBtn.onclick = function () {
//     document.write(getCookie('user'))
// }


// 设置cookie, 过期时间以秒为准【如果值是数组和对象为保留结构，需要转JSON字符串，同时获取时需要解析】
function setCookie(key, value, expires, path = '/') {
    if (expires != undefined) {
        var date = new Date()
        date.setSeconds(date.getSeconds() + expires)
        // 字符串拼接
        // document.cookie = key + '=' + encodeURIComponent(value) + '; expires=' + date.toUTCString() + '; path=' + path
        // 模板字符串
        document.cookie = `${key}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=${path}`
    } else {
        // 字符串拼接
        // document.cookie = key + '=' + encodeURIComponent(value) + '; path=' + path
        // 模板字符串
        document.cookie = `${key}=${encodeURIComponent(value)}; path=${path}`
    }
}

// 获取cookie键对应的值【正则表达式版本】
function getCookie(key) {
    var cookie = document.cookie
    // 注意cookie也可以是空字符串
    if (cookie) {
        var reg = /(\w+)=([^;]+)/g
        while (reg.exec(cookie)) {
            var name = RegExp.$1
            if (key === name) {
                return decodeURIComponent(RegExp.$2)
            }
        }
    }
    // 如果cookie内容为空,直接返回空字符串
    return ''
}

// 删除cookie,cookie是删除了，但是需要刷新页面，只要调用这个删除方法记得刷新页面，补上一行代码 location.reload()----[浏览器当前页面已经载入cookie需要刷新]
function deleteCookie(key, path = '/') {
    setCookie(key, '', -1, path)
}