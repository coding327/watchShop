// 购物车图标滑过出现提示
$('.icon-gouwuche').hover(
    function () {
        $('.carTip').css('display', 'block')
    },
    function () {
        $('.carTip').css('display', 'none')
    }
)
// 登录图标滑过出现提示
$('.dengLu').hover(
    function () {
        $('.lgTips').css('display', 'block')
    },
    function () {
        $('.lgTips').css('display', 'none')
    }
)

var u = window.localStorage.getItem('user')
var p = window.localStorage.getItem('pwd')
if (u) $('.regC .user').val(u)
if (p) $('.regC .pwd').val(u)
if (u != null && p != null) {
    $('#rb').attr('checked', true)
} else {
    $('#rb').attr('checked', false)
}


// cookie判断用户是否登录，已登录，显示退出按钮
var cookie = document.cookie
if (cookie) {
    var account = getCookie('user')
    if (account) {
        $('.account').text(account)
        $('.quit').css('display', 'block')
        $('.carTip>p').text('亲，再多购买一件吧！')
        var regUrl = /^\S+((watchShop\/)(index\.html)?)$/
        if (regUrl.test(location.href)) {
            $('.avatar .userImg').attr('src', 'images/indexImg/userImg.jpg')
            // 登录成功，计算该用户购物车商品件数
            searchGoodsByUserC({ user: account }).then(data => {
                var { status, list } = data
                let count = 0
                if (status) {
                    list.forEach(({ buynum }) => {
                        count += +buynum
                    })
                    $('.carTip>p').text(`亲，您还有${count}件商品在购物车！`)
                    setCookie('count', count, 7 * 24 * 60 * 60)
                } else { // 购物车还是空的
                    $('.carTip>p').text('亲，赶快去商城购买商品吧！')
                    setCookie('count', count, 7 * 24 * 60 * 60)
                }
            }).catch(err => {
                throw err
            })
        } else {
            $('.avatar .userImg').attr('src', '../images/indexImg/userImg.jpg')
            // 登录成功，计算该用户购物车商品件数
            searchGoodsByUser({ user: account }).then(data => {
                var { status, list } = data
                let count = 0
                if (status) {
                    list.forEach(({ buynum }) => {
                        count += +buynum
                    })
                    $('.carTip>p').text(`亲，您还有${count}件商品在购物车！`)
                    setCookie('count', count, 7 * 24 * 60 * 60)
                } else { // 购物车还是空的
                    $('.carTip>p').text('亲，赶快去商城购买商品吧！')
                    setCookie('count', count, 7 * 24 * 60 * 60)
                }
            }).catch(err => {
                throw err
            })
        }
    } else {
        $('.carTip>p').text('亲，您还没登录！')
    }
}
// 点击退出登录，滑过登录图标出现请登录
$('.quit').click(
    function () {
        deleteCookie('user')
        deleteCookie('count')
        localStorage.removeItem('user')
        localStorage.removeItem('pwd')
        location.reload()
        $('.account').text('亲，请先登录！')
        var regUrl = /^\S+((watchShop\/)(index\.html)?)$/
        if (regUrl.test(location.href)) {
            $('.avatar .userImg').attr('src', 'images/indexImg/userImg.gif')
        } else {
            $('.avatar .userImg').attr('src', '../images/indexImg/userImg.gif')
        }
    }
)

// 搜索商品
var timer = null
$('.search .ssuoBt').click(
    function () {
        clearTimeout(timer)
        timer = setTimeout(
            function () {
                // 不需要改全局wd，跳转
                var wd = $('.search>input').val()
                if (wd) {
                    var regUrl = /^\S+((watchShop\/)(index\.html)?)$/
                    if (regUrl.test(location.href)) {
                        location.href = 'html/goods.html?wd=' + wd
                    } else {
                        location.href = 'goods.html?wd=' + wd
                    }
                } else {
                    alert('亲，请先输入商品名称！')
                }
            }, 300
        )
    }
)

// 回到顶部
$('.icon-huidaodingbu').click(
    function () {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"
        }
        )
    }
)

// 地址栏参数解析
function paramsQuery() {
    var search = location.search

    var reg = /(\w+)=([^&]+)/g
    var data = {}
    while (reg.exec(search)) {  // 先解析 再将解析的内容作为表达式 => []  null
        var key = RegExp.$1
        var val = RegExp.$2
        data[key] = val
    }
    return data
}







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

