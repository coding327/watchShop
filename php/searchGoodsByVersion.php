<?php
error_reporting(E_ALL & ~E_NOTICE);
@include_once("conn.php");

if (!(isset($_GET["wd"]) && isset($_GET["col"]) && isset($_GET["type"]) && isset($_GET["page"]) && isset($_GET["size"]) && isset($_GET["version"]))) {
    exit('{"status": "false", "message": "请传入完整的参数!"}');
}

$wd = $_GET["wd"]; // wd=xxx 用于接收搜索的关键词
$col = $_GET["col"]; // 排序的列名 id class,chinese,math,english total
$type = $_GET["type"]; // 排序的方式 asc desc
$page = $_GET["page"]; // 页码（第几页）=> 限制范围[1,ceil(查询的总数居/size)]
$size = $_GET["size"]; // 每页显示多少条
$versionStr = $_GET["version"]; // 型号
$versionArr = explode(',', $versionStr);
[$version1, $version2, $version3, $version4, $version5] = $versionArr;
$version1 = $version1 ? $version1 : '';
$version2 = $version2 ? $version2 : '';
$version3 = $version3 ? $version3 : '';
$version4 = $version4 ? $version4 : '';
$version5 = $version5 ? $version5 : '';

// 查询所有数据【不做限制】
$search = "select * from `goodlist` where version = '$version1' or version = '$version2' or version = '$version3' or version = '$version4' or version = '$version5'";
$search_result = mysqli_query($conn, $search);
$obj = array();
if ($search_result) {

    $count = $search_result->num_rows;
    $maxPage = ceil($count / $size);

    // 限制范围
    $page = min(max(1, $page), $maxPage);

    $skip = ($page - 1) * $size;

    // 限制查询
    $sql = "select * from `goodlist` where version = '$version1' or version = '$version2' or version = '$version3' or version = '$version4' or version = '$version5' order by $col $type limit $skip,$size";

    $result = mysqli_query($conn, $sql);
    if ($result) {
        $arr = array();
        // $item = mysqli_fetch_assoc($result); // 多条数据就用循环
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
    $obj["message"] = "sql语句有误";
    $obj["sql"] = $search;
}

echo json_encode($obj);
