

<?php
header('Access-Control-Allow-Origin: *',true); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
header('Access-Control-ALLow-Methods: POST, GET,OPTIONS, PUT, DELETE');
header('Access-Control-AlLow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');
header('Content-Type: application/json');
// echo "Hi";
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "Car_Rental_System"; 
 
$con = mysqli_connect($host, $user, $password,$dbname);
// $method = $_SERVER['REQUEST_METHOD'];
// echo $method;
print_r($_SERVER['REQUEST_METHOD']);
 $method="POST";
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
switch ($method) {
    case 'POST':    
        $sql = "Select * from car"; 
        $data = json_decode(file_get_contents("php://input"), TRUE);
        // $id = $data['id'];
        print_r( $data['form']);

    break;

}
 $id="";
// run SQL statement
// for ($x = 0; $x <= 10; $x++) {
$result = mysqli_query($con,$sql);
// $users = $result->fetchAll(PDO::FETCH_ASSOC);        
// $rows = $result->fetch_all(MYSQLI_ASSOC);

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
    echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
}
// return $rows;
// foreach ($rows as $row) {
//     echo($rows);
//     // printf("%s (%s)\n", $row["img"], $row["make"]);
// }

// $row = mysqli_fetch_assoc($result);
// echo '<pre>';
// print_r( $result);
//  echo '<pre>';
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}
 
// if ($method == 'POST') {
    
//     echo json_encode($result);
// } else {
//     echo mysqli_affected_rows($con);
// }
// header('Access-Control-Allow-Origin: *',true); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
// header('Access-Control-ALLow-Methods: POST, GET,OPTIONS, PUT, DELETE');
// header('Access-Control-AlLow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');
// header('Content-Type: application/json');
$con->close();
?>