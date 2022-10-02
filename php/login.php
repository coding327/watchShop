<?php

@include_once('conn.php');

if (!(isset($_POST['pwd']) && isset($_POST["user"]))) {
    exit('{"status": "false", "message": "请传入完整的参数!"}');
}

$user = $_POST["user"];
$pwd = $_POST["pwd"];

// 用户名手机号邮箱都可以登录
$search = "select user,phone,email,pwd from `userinfo` where (user = '$user' or phone = '$user' or email = '$user') and pwd = '$pwd'";

$search_result = mysqli_query($conn, $search);

$obj = array();

if ($search_result) {

    $item = mysqli_fetch_assoc($search_result);
    if ($item) {
        $obj["status"] = true;
        $obj["message"] = "OK!";
    } else {
        $obj["status"] = false;
        $obj["message"] = "用户名或密码错误!";
    }
} else {
    $obj["status"] = false;
    $obj["message"] = 'sql1语句有误';
    $obj["sql"] = $search;
}

echo json_encode($obj);