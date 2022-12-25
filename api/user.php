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
    case "GET":
        // $sql = "SELECT * FROM car";
        // $path = explode('/', $_SERVER['REQUEST_URI']);
        // // echo "$path[4]";
        // if (isset($path[4]) && is_numeric($path[4])) {
        //     $sql .= " WHERE plate_id = $path[4]";
        //     $stmt = $conn->prepare($sql);
        //     $stmt->bindParam(':id', $path[4]);
        //     $stmt->execute();
        //     $cars = $stmt->fetch(PDO::FETCH_ASSOC);
        // } else {
        //     $stmt = $conn->prepare($sql);
        //     $stmt->execute();
        //     $cars = $stmt->fetchAll(PDO::FETCH_ASSOC);
        // }

        // echo json_encode($cars);
        // break;

    case "POST":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (count ($path)>3 ){
        if( $path[3] == 'New') {
            $response='';

            $user = json_decode(file_get_contents('php://input'));
            $sql = 'select * from user where email = :email ';
            $stmt = $conn->prepare($sql);
            // echo $user->email;
            $stmt->bindParam(':email', $user->email);
            // $stmt->bindParam(':password', $user->password);
            if ($stmt->execute()) {
                // $response = ['status' => 1, 'message' => 'Record created successfully.'];
                $row = $stmt->fetch();
                if ($row) {
                    $response = ['status' => 0, 'message' => "Registered before"];

                }
                else{
                //   $sql=" INSERT INTO `user`(id,fname,lname,email,password,phone) VALUES (NULL,:firstname,:lastName,:email,:password,:phoneNo) ";
                  $sql=" INSERT INTO `user`(fname , lname , email , `password` ,phone ) VALUES (:firstName , :lastName , :email , password(:password) ,:phoneNo) ";
                    $stmt = $conn->prepare($sql);
                    // echo $user->email.'heeeee';
                    $stmt->bindParam(':firstName', $user->firstName);
                    $stmt->bindParam(':lastName', $user->lastName);
                    $stmt->bindParam(':email', $user->email);
                    $stmt->bindParam(':password', $user->password);
                    $stmt->bindParam(':phoneNo', $user->phoneNo);
                    // print_r( $stmt);
                    if ($stmt->execute()) {
                    $sql = ' select * from user where email = :email ';
                    $stmt = $conn->prepare($sql);
                    $stmt->bindParam(':email', $user->email);
                    if ($stmt->execute()) {
                        // $response = ['status' => 1, 'message' => 'Record created successfully.'];
                        $row = $stmt->fetch();
                        $response = ['status' => 1, 'message' => $row['id']];
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

            $sql = 'select * from user where email = :email and password = password(:password) ';
            $stmt = $conn->prepare($sql);
            // echo $user->email;
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':password', $user->password);
            if ($stmt->execute()) {
                // $response = ['status' => 1, 'message' => 'Record created successfully.'];
                $row = $stmt->fetch();
                if ($row) {
                    $response = ['status' => 1, 'message' => $row['id'] , 'isAdmin'=>$row['is_admin']];
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

    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE users SET name= :name, email =:email, mobile =:mobile, updated_at =:updated_at WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $updated_at = date('Y-m-d');
        $stmt->bindParam(':id', $user->id);
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobile', $user->mobile);
        $stmt->bindParam(':updated_at', $updated_at);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM users WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
