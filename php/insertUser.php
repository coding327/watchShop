<?php

@include_once('conn.php');

if (!(isset($_POST["user"]) && isset($_POST["phone"]) && isset($_POST["email"]) && isset($_POST["pwd"]))) {
    exit('{"status": "false", "message": "请传入完整的参数!"}');
}

$user = $_POST["user"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$pwd = $_POST["pwd"];

$searchSql = "select user,phone,email from `userinfo` where user = '$user' or phone = '$phone' or email = '$email'";

$search_result = mysqli_query($conn, $searchSql);

$obj = array();

if ($search_result) {

    $item = mysqli_fetch_assoc($search_result);
    if (!$item) {
        $insert = "insert into `userinfo`(user,phone,email,pwd) value ('$user','$phone','$email','$pwd')";

        $insert_result = mysqli_query($conn, $insert);
        if ($insert_result) {
            // 新增是会影响行数,新方法mysqli_affected_rows($conn)
            $rows = mysqli_affected_rows($conn);
            // 判断影响行数
            if ($rows > 0) {
                $obj["status"] = true;
                $obj["message"] = "注册成功";
            } else {
                $obj["status"] = false;
                $obj["message"] = "注册失败";
            }
        } else {
            $obj["status"] = false;
            $obj["message"] = "sql2语句有误";
            $obj["sql"] = $insert;
        }
    } else {
        $obj["status"] = false;
        $obj["message"] = "该账户已注册!";
    }
} else {
    $obj["status"] = false;
    $obj["message"] = 'sql1语句有误';
    $obj["sql"] = $searchSql;
}

echo json_encode($obj);
