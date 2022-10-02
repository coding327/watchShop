<?php

@include_once("conn.php");

if (!(isset($_POST["id"]) && isset($_POST["user"]))) {
    exit('{"status":false,"message":"请传入完整参数!"}');
}
$id = $_POST["id"];
$user = $_POST["user"];

$search = "select *  from `shopcar` where goodsid = $id and user = '$user'";

$searchResult = mysqli_query($conn, $search); // 查询 => 结果对象(解析之后才有数据)

if ($searchResult) {
    $item = mysqli_fetch_assoc($searchResult);

    if ($item) {

        $sql = "delete from `shopcar` where goodsid = $id and user = '$user'";

        $result = mysqli_query($conn, $sql);

        $obj = array();
        if ($result) {

            $rows = mysqli_affected_rows($conn);

            if ($rows > 0) {
                $obj["status"] = true;
                $obj["message"] = "商品删除成功";
            } else {
                $obj["status"] = false;
                $obj["message"] = "语句执行成功,但是数据库未改变";
            }
        } else { // sql语句执行失败
            $obj["status"] = false;
            $obj["message"] = "sql语句有误";
            $obj["sql"] = $sql;
        }
    } else { // 没有数据
        $obj["status"] = false;
        $obj["message"] = "数据已被删除";
    }
} else {
    $obj["status"] = false;
    $obj["message"] = "sql语句有误";
    $obj["sql"] = $search;
}

echo json_encode($obj);
