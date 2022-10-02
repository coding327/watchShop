<?php
    // 公共php文件
    // 接口返回数据时,配置响应数据类型  text/json  text/html
    @header("Content-type:text/json;charset=utf-8");

    // 配置CORS【允许访问来源】
    @header("Access-Control-Allow-Origin:*"); // 允许所有的来源
    // @header("Access-Control-Allow-Origin:http://127.0.0.1:8848"); // 允许Hbuilder

    // 连接主机，参数：远程主机、账号、密码、数据库名【上线】
    $conn = mysqli_connect("b-plflp0oxib9kan.bch.rds.gz.baidubce.com", "b_plflp0oxib9kan", "12345678", "b_plflp0oxib9kan");

    // 如果连接失败,不执行后续代码
    if (!$conn) {
        exit('{"status": false}, "message": "数据库连接失败!"');
    }

    // 设置编码格式
    mysqli_query($conn, "set names utf8");
    mysqli_query($conn, "set character set utf8");
?>