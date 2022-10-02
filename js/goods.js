$(function () {

    // // 购物车图标滑过出现提示
    // $('.icon-gouwuche').hover(
    //     function () {
    //         $('.carTip').css('display', 'block')
    //     },
    //     function () {
    //         $('.carTip').css('display', 'none')
    //     }
    // )
    // // 登录图标滑过出现提示
    // $('.dengLu').hover(
    //     function () {
    //         $('.lgTips').css('display', 'block')
    //     },
    //     function () {
    //         $('.lgTips').css('display', 'none')
    //     }
    // )

    // // cookie判断用户是否登录，已登录，显示退出按钮
    // var cookie = document.cookie
    // if (cookie) {
    //     var account = getCookie('user')
    //     if (account) {
    //         $('.account').text(account)
    //         $('.quit').css('display', 'block')
    //     }
    // }
    // // 点击退出登录，滑过登录图标出现请登录
    // $('.quit').click(
    //     function () {
    //         deleteCookie('user')
    //         location.reload()
    //         $('.account').text('请先登录')
    //     }
    // )

    // // 回到顶部
    // $('.icon-huidaodingbu').click(
    //     function () {
    //         window.scrollTo({
    //             left: 0,
    //             top: 0,
    //             behavior: "smooth"
    //         }
    //         )
    //     }
    // )

    // 加载数据列表
    // var wd = ''
    var col = "id"
    var type = "asc"
    var page = 1
    var size = 8
    var version = ''

    // 主页【其他页面】都有搜索，判断地址栏是否携带数据跳转【提前判断有没有携带数据跳转过来】
    var params = paramsQuery()
    var { wd = '' } = params // 商品关键词没做编码处理，不需要解码

    // wd = wd == undefined ? '' : wd // 直接用默认值！
    loadGoods()

    // 搜索商品
    var timer = null
    $('.search .ssuoBt').click(
        function () {
            clearTimeout(timer)
            setTimeout(
                function () {
                    wd = $('.search>input').val()
                    if (wd) {
                        loadGoods()
                    } else {
                        alert('亲，请先输入商品名称！')
                    }
                }, 300
            )
        }
    )


    // 分类查询
    $('.submit').click(
        function () {
            var arr = []
            if ($('input:checked').length) {
                $('input:checked').each(
                    function () {
                        arr.push($(this).val())
                    }
                )
                version = arr.join(',')
                loadGoodsByV()
            } else {
                location.href = 'goods.html'
            }
        }
    )

    // 重置分类查询并清除地址栏携带数据
    $('.reset').click(
        function () {
            location.href = 'goods.html'
        }
    )


    // 加载数据封装
    function loadGoods() {
        searchGoodsOrderLimit({
            wd,
            col,
            type,
            page,
            size
        }).then(data => {
            var { status, message, count, maxPage, current, list } = data

            if (status) {
                page = current
                $('.pageTips').text(`${current}/${maxPage}`)
                var html = ''
                list.forEach(({ id, title, img, price }) => {
                    html += `<li class="listWatch">
                    <a href="detail.html?product_id=${id}">
                        <img title="${title}" src="${img}" alt="">
                    </a>
                    <h2 class="listR"><a href="detail.html?product_id=${id}">${title}</a></h2>
                    <hr class="listLine">
                    <p class="amount">￥${price}</p>
                </li>`
                })

                $('.list').html(html)
                // 每次点击[click在函数内部，又给next和prev绑定了点击事件，click是事件监听封装的]取消掉上次绑定的点击事件
                $('.next').off().click(
                    function () {
                        if (page >= maxPage) return false
                        page++
                        // 如果是数据加载就执行数据加载的函数，是选择商品类型就加载用户选择的数据【点击事件叠加，进行判断处理】
                        if (!$('input:checked').length) loadGoods()
                    }
                )
                $('.prev').off().click(
                    function () {
                        if (page <= 1) return false
                        page--
                        if (!$('input:checked').length) loadGoods()
                    }
                )
            } else {
                throw message
            }
        }).catch(err => {
            throw err
        })
    }


    // 用户选择类型加载数据封装
    function loadGoodsByV() {
        searchGoodsByVersion({
            wd,
            col,
            type,
            page,
            size,
            version
        }).then(data => {
            var { status, message, maxPage, current, list } = data
            if (status) {
                page = current
                $('.pageTips').text(`${current}/${maxPage}`)
                var html = ''
                list.forEach(({ id, title, img, price }) => {
                    html += `<li class="listWatch">
                    <a href="detail.html?product_id=${id}">
                        <img title="${title}" src="${img}" alt="">
                    </a>
                    <h2 class="listR"><a href="detail.html?product_id=${id}">${title}</a></h2>
                    <hr class="listLine">
                    <p class="amount">￥${price}</p>
                </li>`
                })
                $('.list').html(html)
                // 每次点击[clcik在函数内部，又给next和prev绑定了点击事件，click是事件监听封装的]取消掉上次绑定的点击事件
                $('.next').off().click(
                    function () {
                        if (page >= maxPage) return false
                        page++
                        if ($('input:checked').length) loadGoodsByV()
                    }
                )
                $('.prev').off().click(
                    function () {
                        if (page <= 1) return false
                        page--
                        if ($('input:checked').length) loadGoodsByV()
                    }
                )
            } else {
                throw message
            }
        }).catch(err => {
            throw err
        })
    }
})