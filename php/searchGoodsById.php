<?php

@include_once("conn.php");
if (!isset($_GET["id"])) {
    exit('{"status":false,"message":"请传入完整参数!"}');
}
$id = $_GET["id"];
$sql = "select * from `goodlist` where id = $id";
$result = mysqli_query($conn, $sql);
$obj = array();
if ($result) {
    $item = mysqli_fetch_assoc($result);

    if ($item) {
        $obj["status"] = true;
        $obj["message"] = "OK!";
        $obj["data"] = $item;
    } else {
        $obj["status"] = false;
        $obj["message"] = "数据不存在";
    }
} else {
    $obj["status"] = false;
    $obj["message"] = "sql语句有误";
    $obj["sql"] = $sql;
}

echo json_encode($obj);
