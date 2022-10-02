<?php
@include_once("conn.php");  // 引入并执行同目录下的conn.php

if (!(isset($_POST["user"]) && isset($_POST["goodsId"]) && isset($_POST["buyNum"]))) {
    exit('{"status":false,"message":"请传入完整参数!"}');
}

$user = $_POST["user"];
$goodsId = $_POST["goodsId"];
$buyNum = $_POST["buyNum"];

// mysqli_query($conn,$sql);   在指定数据库执行传入的sql语句

// 一般情况下,购买商品之前需要先判断 该用户是否购买过该商品
// 未购买 => 新增
// 已购买 => 更新数量

$search = "select * from `shopcar` where user = '$user' and goodsid = '$goodsId'";

$searchResult = mysqli_query($conn, $search); // 查询 => 结果对象(解析之后才有数据)

if ($searchResult) {
    $item = mysqli_fetch_assoc($searchResult);

    if (!$item) { // 没有数据  => 新增
        $sql = "insert into `shopcar`(user,goodsid,buynum) value('$user','$goodsId', $buyNum)";
    } else { // 有数据  => 更新数量
        $sql = "update `shopcar` set buynum = buynum + $buyNum where user = '$user' and goodsid = '$goodsId'";
    }

    $result = mysqli_query($conn, $sql);

    $obj = array();
    if ($result) { // sql语句执行成功 => 不一定有结果

        $rows = mysqli_affected_rows($conn);

        if ($rows >  0) {
            $obj["status"] = true;
            $obj["message"] = "加入成功";
        } else {
            $obj["status"] = false;
            $obj["message"] = "语句执行成功,但是数据库未改变"; // 新增不会出现此情况
        }
    } else { // sql语句执行失败
        $obj["status"] = false;
        $obj["message"] = "sql语句有误";
        $obj["sql"] = $sql;
    }
} else {
    $obj["status"] = false;
    $obj["message"] = "sql语句有误";
    $obj["sql"] = $search;
}


echo json_encode($obj);
