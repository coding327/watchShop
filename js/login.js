$(function () {

    $('.logBtn').click(
        function () {
            var customer = $('.user').val()
            // var user = null
            // var phone = null
            // var email = nul
            var pwd = $('.pwd').val()
            // var userReg = /^[a-zA-Z_$][\w$]{5,11}$/
            // var phoneReg = /^1[3-9]\d{9}$/
            // var emailReg = /^\w+@\w+\.[a-zA-Z]{2,}$/
            if (customer == '' || pwd == '') {
                $('.tips').text('用户名和密码不能为空').addClass('error')
            } else {
                // if (userReg.test(customer)) {
                //     user = customer
                // } else if (phoneReg.test(customer)) {
                //     phone = customer
                // } else if (emailReg.test(customer)) {
                //     email = customer
                // }
                $.ajax({
                    type: 'POST',
                    url: '../php/login.php',
                    data: {
                        user: customer,
                        pwd
                    },
                    async: true,
                    dataType: 'JSON',
                    success(res) {
                        var { status, message } = res
                        if (status) {
                            setCookie('user', customer, 7 * 24 * 60 * 60)
                            // 记住用户名和密码
                            if ($('#rb').prop('checked')) {
                                localStorage.setItem('user', customer)
                                localStorage.setItem('pwd', pwd)
                            }
                            // 判断是否携带跳转url,购物车回到登录再返回到购物车
                            var params = paramsQuery()
                            var { returnUrl } = params
                            if (returnUrl) {
                                location.href = decodeURIComponent(returnUrl)
                            } else {
                                location.href = '../index.html'
                            }
                        } else {
                            $('.tips').text(message).addClass('error')
                        }
                    }
                })
            }
        }
    )

    // 点击注册跳转注册页面
    $('.regBtn').click(
        function () {
            location.href = '../html/register.html'
        }
    )

})