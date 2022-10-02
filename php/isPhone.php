<?php

@include_once('conn.php');

if (!isset($_POST["phone"])) {
    exit('{"status": "false", "message": "请传入完整的参数!"}');
}

$phone = $_POST["phone"];

$search = "select phone from `userinfo` where phone = '$phone'";

$search_result = mysqli_query($conn, $search);

$obj = array();

if ($search_result) {

    $item = mysqli_fetch_assoc($search_result);
    if (!$item) {
        $obj["status"] = true;
        $obj["message"] = "OK!";
    } else {
        $obj["status"] = false;
        $obj["message"] = "手机号已存在!";
    }
} else {
    $obj["status"] = false;
    $obj["message"] = 'sql1语句有误';
    $obj["sql"] = $search;
}

echo json_encode($obj);