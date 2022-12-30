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
        $user = json_decode(file_get_contents('php://input'));
        if (count($path) < 4 || $path[3] == 'Query1') {
            $user = json_decode(file_get_contents('php://input'));
            $sql = "SELECT * 
            FROM reservation AS r JOIN user AS u ON r.email=u.email JOIN car AS c ON r.plate_id=c.plate_id
            WHERE ( pickup_time BETWEEN :pickDate1 AND :returnDate1 )
                    OR (return_time BETWEEN :pickDate1 AND :returnDate1)
                    OR (time_reservation BETWEEN :pickDate1 AND :returnDate1);
            ";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':pickDate1', $user->pickDate1);
            $stmt->bindParam(':returnDate1', $user->returnDate1);

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($data);
        } else if (count($path) < 4 || $path[3] == 'Query3') {
            
            $user = json_decode(file_get_contents('php://input'));
            $sql = "SELECT c.plate_id,`status`,make,model,`year`,`description`,price
            FROM reservation AS r JOIN car AS c ON r.plate_id=c.plate_id
            WHERE ( pickup_time <=:specificDay AND  return_time >= :specificDay ) 
                   OR  time_reservation=:specificDay
            UNION
            SELECT plate_id,is_available,make,model,`year`,`description`,price
            FROM  car 
            WHERE plate_id NOT IN (SELECT plate_id
                                   FROM   reservation 
                                    WHERE ( pickup_time <=:specificDay AND  return_time >= :specificDay ) 
                                    OR  time_reservation=:specificDay) ;
            ";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':specificDay', $user->specificDay);

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($data);
        }else if (count($path) < 4 || $path[3] == 'Query4') {
            
            $user = json_decode(file_get_contents('php://input'));
         
            $sql = "SELECT r.plate_id,r.time_reservation,r.pickup_time,r.return_time,r.is_paid,`status`,u.fname,u.lname,c.model
            FROM reservation AS r JOIN `user` AS u ON r.email=u.email JOIN car AS c ON r.plate_id=c.plate_id
            WHERE r.user_id=:id";
            ;
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $user->id);

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($data);
        } else if (count($path) < 4 || $path[3] == 'Query5') {
            
            $user = json_decode(file_get_contents('php://input'));
           
            $sql = "SELECT r.pickup_time As `DAY` ,SUM( (DATEDIFF(r.return_time, r.pickup_time)+1)
            *c.price ) AS daily_payment
            FROM reservation AS r JOIN car AS c ON r.plate_id=c.plate_id
            WHERE ( r.pickup_time BETWEEN :startingDate AND :endingDate )
            GROUP BY (r.pickup_time);";
       
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':startingDate', $user->startingDate);
            $stmt->bindParam(':endingDate', $user->endingDate);
           

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($data);
        }
   
        break;

}
