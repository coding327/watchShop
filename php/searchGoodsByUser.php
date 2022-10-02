<?php

@include_once("conn.php");  // 引入并执行同目录下的conn.php

// 验证是否存在id字段
if (!isset($_POST["user"])) {
    exit('{"status":false,"message":"请传入完整参数!"}');
}

// 接收前端传递过来的数据
$user = $_POST["user"];


// 查询  => 单数据查询
// mysqli_query($conn,$sql);   在指定数据库执行传入的sql语句

// 返回值:
// 查询:  成功: 查询的结果对象(数据需要解析此对象才可以)  失败:false(sql语句有误)


$sql = "select s.id, s.goodsid, s.buynum, g.title, g.img, g.price as price from `shopcar` as s,`goodlist` as g where s.goodsid = g.id and s.user = '$user'";
$result = mysqli_query($conn, $sql);

$obj = array();
if ($result) {

    $list = array();
    while ($item = mysqli_fetch_assoc($result)) {
        array_push($list, $item);
    }

    if (count($list)) {
        $obj["status"] = true;
        $obj["message"] = "OK!";
        $obj["list"] = $list;
    } else {
        $obj["status"] = false;
        $obj["message"] = "您的购物车还是空的";
    }
} else {
    $obj["status"] = false;
    $obj["message"] = "sql语句有误";
    $obj["sql"] = $sql;
}

echo json_encode($obj);
