<?php


include 'conn.php';

$conn = OpenCon();

//check

$insert_data = "INSERT INTO `data`(`message`) VALUES ('" . $_GET['message'] . "')";
$conn->query($insert_data);
