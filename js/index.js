$(function () {

    // $('.icon-gouwuche').hover(
    //     function () {
    //         $('.carTip').css('display', 'block')
    //     },
    //     function () {
    //         $('.carTip').css('display', 'none')
    //     }
    // )
    // $('.dengLu').hover(
    //     function () {
    //         $('.lgTips').css('display', 'block')
    //     },
    //     function () {
    //         $('.lgTips').css('display', 'none')
    //     }
    // )

    // var cookie = document.cookie
    // if (cookie) {
    //     var account = getCookie('user')
    //     if (account) {
    //         $('.account').text(account)
    //         $('.quit').css('display', 'block')
    //     }
    // }

    // $('.quit').click(
    //     function () {
    //         deleteCookie('user')
    //         location.reload()
    //         $('.account').text('请先登录')
    //     }
    // )

    // 轮播
    var index = 0
    var timer = null
    autoPlay()
    function autoPlay() {
        clearInterval(timer)
        timer = setInterval(function () {
            index++
            if (index >= $('.banner').length) {
                index = 0
            }
            $('.banner').eq(index).addClass('active').siblings().removeClass('active')
        }, 6000)
    }


    // 加载到指定位置加载动画
    $(window).scroll(
        function () {
            // 加载动画
            var sTop = document.documentElement.scrollTop || document.body.scrollTop
            var sHeight = $('.bigHeader').height() + $('.bigNav').height() + $('.bigBanner').height() / 2
            if ((sHeight - sTop) <= 50) {
                $('.storeR>h2').css({
                    "opacity": 1,
                    "animation": 'examples 0.8s 1 ease',
                    "-webkit-animation": 'examples 0.8s 1 ease'
                })
                $('.storeR ul .tt').css({
                    "opacity": 1,
                    "animation": "examples 0.9s 1 ease",
                    "-webkit-animation": "examples 0.9s 1 ease"
                })
                $('.storeR .ll').css({
                    "opacity": 1,
                    "animation": "examples 1s 1 ease",
                    "-webkit-animation": "examples 1s 1 ease"
                })
            }


            // 加载更换背景图
            var actualH = document.documentElement.scrollHeight || document.body.scrollHeight
            if (sTop < (actualH / 2)) {
                // 注意路径不要加../，index.html在站点下
                $('body').css('background', 'url(images/indexImg/indexs_bg.jpg) no-repeat fixed center')
            } else {
                $('body').css('background', 'url(images/indexImg/indexs_26.jpg) no-repeat fixed center')
            }
        }
    )

    // 了解详情
    $('.listTo').click(
        function () {
            location.href = 'html/goods.html'
        }
    )


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

    // 商品数据加载
    var wd = ''
    var col = "id"
    var type = "asc"
    var page = 1
    var size = 8

    // 页面加载时渲染一次
    loadGoods()

    // 搜索商品
    // var timer = null
    // $('.search .ssuoBt').click(
    //     function () {
    //         clearTimeout(timer)
    //         timer = setTimeout(
    //             function () {
    //                 // 不需要改全局wd，跳转
    //                 var wd = $('.search>input').val()
    //                 if (wd) {
    //                     // 商品关键词没做编码处理
    //                     location.href = 'goods.html?wd=' + wd
    //                 } else {
    //                     alert('亲，请先输入商品名称！')
    //                 }
    //             }, 300
    //         )
    //     }
    // )

    // 加载数据封装
    function loadGoods() {
        searchGoodsOrderLimitCy({
            wd, // 找全局wd
            col,
            type,
            page,
            size
        }).then(data => {
            var { status, message, count, maxPage, current, list } = data

            if (status) {
                var html = ''
                list.forEach(({ id, title, img, price }) => {
                    html += `<li class="listWatch">
                    <a href="html/detail.html?product_id=${id}">
                        <img title="${title}" src="${img}" alt="">
                    </a>
                    <h2 class="listR"><a href="html/detail.html?product_id=${id}">${title}</a></h2>
                    <hr class="listLine">
                    <p class="amount">￥${price}</p>
                </li>`
                })

                $('.list').html(html)
            }
        }).catch(err => {
            throw err
        })
    }
})