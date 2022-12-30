<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include 'DbConnect.php';

$objDb = new DbConnect;
$conn = $objDb->connect();
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (count ($path)>3 ){
        if( $path[3] == 'New') {
            $response='';
            $user = json_decode(file_get_contents('php://input'));
            $sql = 'select * from user where email = :email ';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email', $user->email);
            if ($stmt->execute()) {
                $row = $stmt->fetch();
                if ($row) {
                    $response = ['status' => 0, 'message' => "Registered before"];
                }
                else{
                  $sql=" INSERT INTO `user`(fname , lname , email , `password` ,phone ) VALUES (:firstName , :lastName , :email , MD5(:password) ,:phoneNo) ";
                    $stmt = $conn->prepare($sql);
                    $stmt->bindParam(':firstName', $user->firstName);
                    $stmt->bindParam(':lastName', $user->lastName);
                    $stmt->bindParam(':email', $user->email);
                    $stmt->bindParam(':password', $user->password);
                    $stmt->bindParam(':phoneNo', $user->phoneNo);
                    if ($stmt->execute()) {
                    $sql = ' select * from user where email = :email ';
                    $stmt = $conn->prepare($sql);
                    $stmt->bindParam(':email', $user->email);
                    if ($stmt->execute()) {
                        $row = $stmt->fetch();
                        $response = ['status' => 1, 'message' => $row['user_id']];
                    }
                    else     $response = ['status' => 0, 'message' => "Registered before"];

                    }
                    else  $response = ['status' => 0, 'message' => "Registered before"];
                }
            } else {
                $response = ['status' => 0, 'message' => 'Failed to Enter.'];
            }
            echo json_encode($response);
        
        } }else {
            $user = json_decode(file_get_contents('php://input'));

            $sql = "SELECT * from `user` WHERE email = :email and password = MD5 (:password) ";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':password', $user->password);
            if ($stmt->execute()) {
                $row = $stmt->fetch();
                if ($row) {
                    $response = ['status' => 1, 'message' => $row['user_id'] , 'isAdmin'=>$row['is_admin']];
                }
                else{
                    $response = ['status' => 0, 'message' => 'Failed to Enter.'];
                }

            } else {
                $response = ['status' => 0, 'message' => 'Failed to Enter.'];
            }
            echo json_encode($response);
        }

        break;
}
