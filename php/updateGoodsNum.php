<?php

@include_once("conn.php");

if (!(isset($_POST["user"]) && isset($_POST["id"]) && isset($_POST["num"]))) {
    exit('{"status":false,"message":"请传入完整参数!"}');
}
$user = $_POST["user"];
$id = $_POST["id"];
$num = $_POST["num"];

$search = "select *  from `shopcar` where user = '$user' and goodsid = $id";

$searchResult = mysqli_query($conn, $search);

if ($searchResult) {
    $item = mysqli_fetch_assoc($searchResult);

    if ($item) {

        $sql = "update `shopcar` set buynum = $num where user = '$user' and goodsid = $id";
        $result = mysqli_query($conn, $sql);

        $obj = array();
        if ($result) {

            $rows = mysqli_affected_rows($conn);

            if ($rows > 0) {
                $obj["status"] = true;
                $obj["message"] = "修改成功";
            } else {
                $obj["status"] = true;
                $obj["message"] = "修改的数据和原数据一致";
            }
        } else { // sql语句执行失败
            $obj["status"] = false;
            $obj["message"] = "sql语句有误";
            $obj["sql"] = $sql;
        }
    } else { // 没有数据
        $obj["status"] = false;
        $obj["message"] = "该用户并未添加商品到购物车";
    }
} else {
    $obj["status"] = false;
    $obj["message"] = "sql语句有误";
    $obj["sql"] = $search;
}

echo json_encode($obj);
