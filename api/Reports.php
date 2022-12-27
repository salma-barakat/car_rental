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
        // // echo $path[3];
        // if (isset($path[3]) && is_numeric($path[3])) {
        //     $sql .= " WHERE plate_id = $path[3]";
        //     $stmt = $conn->prepare($sql);
        //     //   $stmt->bindParam(':id', $path[2]);
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
        $user = json_decode(file_get_contents('php://input'));
        if (count($path) < 4 || $path[3] == 'Query1') {
            // echo $path[3];      
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
            // echo  $user->specificDay;
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
            // $stmt->bindParam(':returnDate1', $user->returnDate1);

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($data);
        }else if (count($path) < 4 || $path[3] == 'Query4') {
            
            $user = json_decode(file_get_contents('php://input'));
            // echo  $user->specificDay;
            $sql = "SELECT r.plate_id,r.time_reservation,r.pickup_time,r.return_time,r.is_paid,`status`,u.fname,u.lname,c.model
            FROM reservation AS r JOIN `user` AS u ON r.email=u.email JOIN car AS c ON r.plate_id=c.plate_id
            WHERE r.user_id=:id";
            ;
        

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $user->id);
            // $stmt->bindParam(':returnDate1', $user->returnDate1);

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($data);
        } else if (count($path) < 4 || $path[3] == 'Query5') {
            
            $user = json_decode(file_get_contents('php://input'));
            // echo  $user->specificDay;
            $sql = "SELECT r.pickup_time As `DAY` ,SUM( DATEDIFF(r.return_time, r.pickup_time)*c.price ) AS daily_payment
            FROM reservation AS r JOIN car AS c ON r.plate_id=c.plate_id
            WHERE ( r.pickup_time BETWEEN :startingDate AND :endingDate )
            GROUP BY (r.pickup_time);";
            
        // echo $user->startingDate;
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':startingDate', $user->startingDate);
            $stmt->bindParam(':endingDate', $user->endingDate);
            // $stmt->bindParam(':returnDate1', $user->returnDate1);

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($data);
        }
   
        break;

    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $sql = "UPDATE car SET make=:make,model=:model,`year`=:year,`description`=:description,price=:price,is_available=:is_available,color=:color,country=:country,engin_capacity=:engin_capacity WHERE plate_id = $path[4] ";
        $stmt = $conn->prepare($sql);
        // $updated_at = date('Y-m-d');
        // $stmt = $conn->prepare($sql);
        // $stmt->bindParam(':plate_id', $user->plate_id);
        $stmt->bindParam(':make', $user->make);
        $stmt->bindParam(':model', $user->model);
        $stmt->bindParam(':year', $user->year);
        $stmt->bindParam(':description', $user->description);
        $stmt->bindParam(':price', $user->price);
        $stmt->bindParam(':is_available', $user->is_available);
        $stmt->bindParam(':color', $user->color);
        $stmt->bindParam(':country', $user->country);
        $stmt->bindParam(':engin_capacity', $user->engin_capacity);
        // $stmt->bindParam(':imgURL', $user->imgURL);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $sql = "DELETE FROM car WHERE plate_id =$path[4] ";
        // $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        // $stmt->bindParam(':id', $path[3]);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
