<?php

@include_once('conn.php');

if (!isset($_POST["email"])) {
    exit('{"status": "false", "message": "请传入完整的参数!"}');
}

$email = $_POST["email"];

$search = "select email from `userinfo` where email = '$email'";

$search_result = mysqli_query($conn, $search);

$obj = array();

if ($search_result) {

    $item = mysqli_fetch_assoc($search_result);
    if (!$item) {
        $obj["status"] = true;
        $obj["message"] = "OK!";
    } else {
        $obj["status"] = false;
        $obj["message"] = "邮箱已存在!";
    }
} else {
    $obj["status"] = false;
    $obj["message"] = 'sql1语句有误';
    $obj["sql"] = $search;
}

echo json_encode($obj);