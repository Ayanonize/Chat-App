<?php


include 'conn.php';

$conn = OpenCon();

//check
$check_data = "SELECT * FROM `data` ORDER BY id DESC";
$check_result = $conn->query($check_data);

$x = array();

while ($row = $check_result->fetch_assoc()) {


    $myObj = new stdClass();


    $myObj->id = $row['id'];
    $myObj->message = $row['message'];
    $myJSON = $myObj;
    array_push($x, $myJSON);
}

print_r(json_encode($x));
