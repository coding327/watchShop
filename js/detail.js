$(function () {

    $('.add').click(
        function () {
            var num = $('.num').text()
            num++
            $('.num').text(num)
        }
    )
    $('.reduce').click(
        function () {
            var num = $('.num').text()
            if (num > 1) {
                num--
            } else {
                num = 1
            }
            $('.num').text(num)
        }
    )


    // 商品页跳转详情页携带商品id
    var search = location.search
    if (search) {
        var params = paramsQuery()
        var { product_id: id } = params
        searchGoodsById({ id }).then(res => {
            var { status, message, data } = res
            if (status) {
                var { title, img, price } = data
                $('.bigGlassL').html(
                    `<div class="viewImg">
                            <img class="smallImg" src="${img}" alt="">
                            <div class="shadow"></div>
                        </div>
                        <div class="viewZoom">
                            <img class="bigImg" src="${img}" alt="">
                        </div>`)

                $('.bigGlassR>h2').text(title)
                $('.bigGlassR>h5').text(`￥${price}`)

                var maxLeft = null
                var maxTop = null
                var scale = null
                $('.viewImg').mouseenter(function () {
                    $('.shadow').css('display', 'block')
                    $('.viewZoom').css('display', 'block')
                    maxLeft = $('.viewImg').width() - $('.shadow').width()
                    maxTop = $('.viewImg').height() - $('.shadow').height()
                    scale = $('.bigImg').width() / $('.smallImg').width()
                    $(this).css('border', '1px solid #000')
                    $('.viewZoom').css('border', '1px solid #000')
                })

                $('.viewImg').mouseleave(function () {
                    $('.shadow').css('display', 'none')
                    $('.viewZoom').css('display', 'none')
                    $(this).css('border', 0)
                })

                $('.viewImg').mousemove(function (e) {
                    // values: e.clientX, e.clientY, e.pageX, e.pageY
                    var e = e || window.Event
                    var x = e.pageX - $('.bigGlass')[0].offsetLeft - $('.productC')[0].offsetLeft - $('.shadow').width() / 2
                    var y = e.pageY - $('.bigGlass')[0].offsetTop - $('.productC')[0].offsetTop - $('.shadow').height() / 2
                    x = Math.min(Math.max(0, x), maxLeft)
                    y = Math.min(Math.max(0, y), maxTop)
                    $('.shadow').css({
                        "left": x + 'px',
                        "top": y + 'px'
                    })
                    $('.bigImg').css({
                        "left": `${-scale * x}px`,
                        "top": `${-scale * y}px`
                    })
                })

                $(document).on('click', '.joinCarL', function () {
                    if (account) {
                        joinCarL({
                            user: account,
                            goodsId: id,
                            buyNum: $('.num').text()
                        }).then(res => {
                            var { status, message } = res
                            if (status) {
                                if (confirm('加入成功，是否跳转购物车')) {
                                    var buyNum = $('.num').text()
                                    setCookie('count', buyNum, 7 * 24 * 60 * 60)
                                    location.href = 'shopCar.html'
                                }
                            } else {
                                alert(message)
                            }
                        }).catch(err => {
                            throw err
                        })
                    } else {
                        location.href = 'login.html?returnUrl=' + encodeURIComponent(location.href)
                    }
                })
            }
        }).catch(err => {
            throw err
        })
    } else {
        location.href = 'goods.html'
    }


    $('.narration>li').click(
        function () {
            var index = $(this).index()
            $(this).css('border-top-color', '#000').siblings().css('border-top-color', 'transparent')
            $('.sw').eq(index).css('display', 'block').siblings().css('display', 'none')
        }
    )

})