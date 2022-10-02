$(function () {

    var isUserOk = false
    var isPwdOk = false
    var isEmailOk = false
    var isPhoneOk = false
    var isPwdRep = false

    // 注册
    // 用户名验证
    $('.user').blur(
        function () {
            var user = $(this).val()
            var reg = /^[a-zA-Z_$][\w$]{5,11}$/
            isUserOk = false
            if (user) {
                if (reg.test(user)) {
                    $.ajax({
                        type: "POST",
                        url: "../php/isUser.php",
                        data: { user },
                        async: true,
                        dataType: "JSON",
                        success: function (res) {
                            var { status, message } = res
                            if (status) {
                                $('.userTip').text('用户名ok').removeClass('error')
                                isUserOk = true
                            } else {
                                $('.userTip').text(message).addClass('error')
                            }
                        }
                    })
                } else {
                    $('.userTip').text('用户名不规范').addClass('error')
                }
            } else {
                $('.userTip').text('用户名不能为空').addClass('error')
            }
        }
    )

    // 手机号验证
    $('.phone').blur(
        function () {
            var phone = $(this).val()
            var reg = /^1[3-9]\d{9}$/
            isPhoneOk = false
            if (phone) {
                if (reg.test(phone)) {
                    $.ajax({
                        type: "POST",
                        url: "../php/isPhone.php",
                        data: { phone },
                        async: true,
                        dataType: "JSON",
                        success: function (res) {
                            var { status, message } = res
                            if (status) {
                                $('.phoneTip').text('手机号ok').removeClass('error')
                                isPhoneOk = true
                            } else {
                                $('.phoneTip').text(message).addClass('error')
                            }
                        }
                    })
                } else {
                    $('.phoneTip').text('手机号不规范').addClass('error')
                }
            } else {
                $('.phoneTip').text('手机号不能为空').addClass('error')
            }
        }
    )

    // 邮箱验证
    $('.email').blur(
        function () {
            var email = $(this).val()
            var reg = /^\w+@\w+\.[a-zA-Z]{2,}$/
            isEmailOk = false
            if (email) {
                if (reg.test(email)) {
                    $.ajax({
                        type: "POST",
                        url: "../php/isEmail.php",
                        data: { email },
                        async: true,
                        dataType: "JSON",
                        success: function (res) {
                            var { status, message } = res
                            if (status) {
                                $('.emailTip').text('邮箱ok').removeClass('error')
                                isEmailOk = true
                            } else {
                                $('.emailTip').text(message).addClass('error')
                            }
                        }
                    })
                } else {
                    $('.emailTip').text('邮箱名不规范').addClass('error')
                }
            } else {
                $('.emailTip').text('邮箱名不能为空').addClass('error')
            }
        }
    )

    // 密码验证
    $('.pwd').blur(
        function () {
            var pwd = $(this).val()
            var reg = /^[\w$]{6,12}$/
            isPwdOk = false
            isPwdRep = false
            if (pwd) {
                if (reg.test(pwd)) {
                    var isExistNum = /[0-9]/.test(pwd)
                    var isExistSmall = /[a-z]/.test(pwd)
                    var isExistBig = /[A-Z]/.test(pwd)
                    var isExistS = /[_$]/.test(pwd)
                    var loading = (isExistNum + isExistSmall + isExistBig + isExistS) * 25
                    $('.power').css('width', `${loading}%`)
                    $('.pwdTip').text('')
                    $('.pwdSTip').text('')
                    isPwdOk = true
                    // 密码确认失焦
                    $('.pwdS').blur(
                        function () {
                            var pwd = $('.pwd').val()
                            var pwdS = $('.pwdS').val()
                            if (pwd === pwdS) {
                                $('.pwdSTip').text('密码确认成功').removeClass('error')
                                isPwdRep = true
                            } else {
                                $('.pwdSTip').text('密码确认失败').addClass('error')
                            }
                        }
                    )
                } else {
                    $('.pwdTip').text('密码不符合规范').addClass('error')
                    // 密码确认聚焦
                    $('.pwdS').focus(
                        function () {
                            $('.pwdSTip').text('请先输入符合规范的密码再进行密码确认').addClass('error')
                        }
                    )
                }
            } else {
                $('.pwdTip').text('密码不能为空').addClass('error')
                // 密码确认聚焦
                $('.pwdS').focus(
                    function () {
                        $('.pwdSTip').text('请先输入密码再进行密码确认').addClass('error')
                    }
                )
            }
        }
    )

    // 注册
    $('.regBtn').click(
        function () {
            var user = $('.user').val()
            var phone = $('.phone').val()
            var email = $('.email').val()
            var pwd = $('.pwd').val()
            console.log(isEmailOk, isPhoneOk, isPwdOk, isPwdRep, isUserOk)
            if (isUserOk && isPhoneOk && isEmailOk && isPwdOk && isPwdRep) {
                $.ajax({
                    type: 'POST',
                    url: '../php/insertUser.php',
                    data: {
                        user,
                        phone,
                        email,
                        pwd
                    },
                    async: true,
                    dataType: 'JSON',
                    success(res) {
                        var { status, message } = res
                        if (status) {
                            window.location.href = '../html/login.html'
                        } else {
                            alert(message)
                        }
                    }
                })
            }
        }
    )

    // 点击登录跳转登录页面
    $('.logBtn').click(
        function () {
            location.href = '../html/login.html'
        }
    )

})

