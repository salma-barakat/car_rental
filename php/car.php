

<?php
// echo "Hi";

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
print_r($_SERVER['REQUEST_METHOD']);
$data = json_encode(file_get_contents("php://input"));
echo "received data";
echo '<pre>';
print_r($data);
echo '<pre>';
// var_dump($data);
?>