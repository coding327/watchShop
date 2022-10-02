<?php

@include_once('conn.php');

// 和前端配对键名
if (!(isset($_GET["wd"]) && isset($_GET["col"]) && isset($_GET["type"]) && isset($_GET["page"]) && isset($_GET["size"]))) {
    exit('{"status": "false", "message": "请传入完整的参数!"}');
}

$wd = $_GET["wd"]; // wd=xxx 用于接收搜索的关键词
$col = $_GET["col"]; // 排序的列名 id class,chinese,math,english total
$type = $_GET["type"]; // 排序的方式 asc desc
$page = $_GET["page"]; // 页码（第几页）=> 限制范围[1,ceil(查询的总数居/size)]
$size = $_GET["size"]; // 每页显示多少条

$search = "select * from `goodlist` where title like '%$wd%'";

$search_result = mysqli_query($conn, $search);

$obj = array();

if ($search_result) {
    $count = $search_result->num_rows;
    $maxPage = ceil($count / $size);

    // 限制范围
    $page = min(max(1, $page), $maxPage);

    $skip = ($page - 1) * $size; // 根据前端请求的页数和显示多少条对应数据库返回相应的数据

    $sql = "select * from `goodlist` where title like '%$wd%' order by $col $type limit $skip,$size";

    $result = mysqli_query($conn, $sql); // 查询成功，返回一个结果对象，这个对象是php对象
    if ($result) {
        $arr = array();
        while ($item = mysqli_fetch_assoc($result)) {
            array_push($arr, $item);
        }
        if (count($arr) > 0) {
            $obj["status"] = true;
            $obj["message"] = "OK!";
            $obj["count"] = $count;
            $obj["maxPage"] = $maxPage;
            $obj["current"] = $page;
            $obj["list"] = $arr;
        } else {
            $obj["status"] = false;
            $obj["message"] = "暂无数据!";
        }
    } else {
        $obj["status"] = false;
        $obj["message"] = "sql2语句有误";
        $obj["sql"] = $sql;
    }
} else {
    $obj["status"] = false;
    $obj["message"] = 'sql1语句有误';
    $obj["sql"] = $search;
}


echo json_encode($obj);
