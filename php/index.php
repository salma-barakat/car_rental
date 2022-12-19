
<!-- //http://localhost/devtest/reactjs/signup.php -->
<?php

header('Access-Control-Allow-Origin: *'); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
header('Access-Control-ALLow-Methods: POST, GET,OPTIONS, PUT, DELETE');
header('Access-Control-AlLow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "Car_Rental_System"; 
 
$con = mysqli_connect($host, $user, $password,$dbname);
 
$method = $_SERVER['REQUEST_METHOD'];
 
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
 
switch ($method) {
    case 'GET':    
        // $firstName = $_POST["firstName"];
        // $lastName = $_POST["lastName"];
        // $email = $_POST["email"];
        // $password = $_POST["password"];
        $sql = "Select * from car"; 
    break;
}
 
// run SQL statement
$result = mysqli_query($con,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}
 
if ($method == 'POST') {
    echo json_encode($result);
} else {
    echo mysqli_affected_rows($con);
}
 
$con->close();
