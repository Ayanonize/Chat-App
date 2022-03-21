
<?php

function OpenCon()
{
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $dbname = "chatapp";

    $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

    return $conn;
}

function CloseCon($conn)
{
    $conn->close();
}


?>