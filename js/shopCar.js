$(function () {

    loadShopCar()

    function loadShopCar() {
        var user = getCookie('user')
        searchGoodsByUser({ user }).then(data => {
            var { status, list } = data
            if (status) {
                // css默认，加载购物车通过请求判断有没有商品做处理
                // $('.noProduct').css('display', 'none')
                // $('.commodityBox').css('display', 'flex')
                var html = ''
                list.forEach(({ goodsid, img, title, price, buynum }) => {
                    html += `<li data-id="${goodsid}">
                            <div class="delG">
                                <img class="delGoods" src="../images/indexImg/car_03.jpg" alt="">
                            </div>
                            <img class="goodsImg" src="${img}" alt="">
                            <p class="goodsTitle">${title}</p>
                            <p class="goodsPrice">￥${price}</p>
                            <div class="godNum">
                                <div class="reduce">-</div>
                                <div class="goodsNum">${buynum}</div>
                                <div class="add">+</div>
                            </div>
                            <div class="smallTotal">￥${price * buynum}</div>
                        </li>`
                })
                $('.comN').html(html)

                subPrice()
                // 元素加载完再绑定事件
                $('.comN').on('click', '.delGoods', function () {
                    $(this).parent().parent().remove()
                    subPrice()
                    var id = $(this).parent().parent().attr('data-id')
                    deleteGoods({ user, id }).then(data => {
                        var { status, message } = data
                        if (status) {
                            alert('商品删除成功')
                            // 购物车加购商品===0
                            // searchGoodsByUser({ user }).then(data => {
                            //     var { status } = data
                            //     if (!status) {
                            //         $('.commodityBox').css('display', 'none')
                            //         $('.noProduct').css('display', 'block')
                            //     }
                            // })
                            // 购物车加购商品 === 0
                            // 前端做处理，不需要再通过查找用户，还有没有加入购物车的商品
                            if ($('.comN>li').length == 0) {
                                $('.commodityBox').css('display', 'none')
                                $('.noProduct').css('display', 'block')
                                setCookie('count', 0, 7 * 24 * 60 * 60)
                            }
                        } else {
                            throw message
                        }
                    }).catch(err => {
                        throw err
                    })
                })

                $('.comN').on('click', '.godNum>.add', function () {
                    var num = $(this).prev().text()
                    num++
                    $(this).prev().text(num)
                    var price = $(this).parent().prev().text().replace('￥', '')
                    var smlTotal = num * price
                    $(this).parent().next().text('￥' + smlTotal)
                    subPrice()
                    var id = $(this).parent().parent().attr('data-id')
                    updateGoodsNum({ user, id, num }).then(data => {
                        var { status, message } = data
                        if (!status) throw message
                    }).catch(err => {
                        throw err
                    })
                })

                $('.comN').on('click', '.godNum>.reduce', function () {
                    var num = $(this).next().text()
                    if (num > 1) {
                        num--
                    } else {
                        num = 1
                    }
                    $(this).next().text(num)
                    var price = $(this).parent().prev().text().replace('￥', '')
                    var smlTotal = num * price
                    $(this).parent().next().text('￥' + smlTotal)
                    subPrice()
                    var id = $(this).parent().parent().attr('data-id')
                    updateGoodsNum({ user, id, num }).then(data => {
                        var { status, message } = data
                        if (!status) throw message
                    }).catch(err => {
                        throw err
                    })
                })
            } else {
                $('.commodityBox').css('display', 'none')
                $('.noProduct').css('display', 'block')
                setCookie('count', 0, 7 * 24 * 60 * 60)
            }
        }).catch(err => {
            throw err
        })
    }



    // 总价与用户购买商品总数量
    function subPrice() {
        var total = 0
        var count = 0
        $('.comN>li').each(function () {
            var smlTotal = +$(this).children('.smallTotal').text().replace('￥', '')
            var sNum = +$(this).children('.godNum').children('.goodsNum').text()
            total += smlTotal
            count += sNum
        })
        $('.subTotal').text('￥' + total)
        setCookie('count', count, 7 * 24 * 60 * 60)
    }


    // 返回商店绑定点击事件
    $('.returnToStore').click(function () {
        location.href = 'goods.html'
    })
})

