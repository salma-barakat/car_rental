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
        $sql = "SELECT * FROM car";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[2]) && is_numeric($path[2])) {
            $sql .= " WHERE plate_id = $path[2]";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $cars = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $cars = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($cars);
        break;

    case "POST":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (count($path) < 4 || $path[3] != 'reserve') {
            // search
            $where = "where";
            $And = "";
            $user = json_decode(file_get_contents('php://input'));

            $sql = "SELECT * FROM car ";
            if (isset($user->plate_id) and ($user->plate_id) != '') {
                $sql .= $where . $And . " plate_id = :plate_id ";
                $where = '';
                $And = "and";
            }
            if (isset($user->make) and ($user->make) != '') {
                $sql .= $where . $And . " make like :make ";
                $where = '';
                $And = "and";
            }
            if (isset($user->model) and ($user->model) != '') {
                $sql .= $where . $And . " model like :model ";
                $where = '';
                $And = "and";
            }
            if (isset($user->year) and ($user->year) != '') {
                $sql .= $where . $And . " year like :year ";
                $where = '';
                $And = "and";
            }
            if (isset($user->country) and ($user->country) != '') {
                $sql .= $where . $And . " country like :country ";
                $where = '';
                $And = "and";
            }
            if (isset($user->price) and ($user->price) != '') {
                $sql .= $where . $And . " price like :price ";
                $where = '';
                $And = "and";
            }
            if (isset($user->color) and ($user->color) != '') {
                $sql .= $where . $And . " color like :color ";
                $where = '';
                $And = "and";
            }
            if (isset($user->car_status) and ($user->car_status) != '') {
                $sql .= $where . $And . " car_status = :car_status ";
                $where = '';
                $And = "and";
            }
            $stmt = $conn->prepare($sql);
            if (isset($user->plate_id) and ($user->plate_id) != '') {
                $stmt->bindParam(':plate_id', $user->plate_id);
            }
            if (isset($user->make) and ($user->make) != '') {
                $stmt->bindParam(':make', $x);
                $x = $user->make . '%';
            }
            if (isset($user->model) and ($user->model) != '') {
                $stmt->bindParam(':model', $y);
                $y = $user->model . "%";
            }
            if (isset($user->year) and ($user->year) != '') {
                $stmt->bindParam(':year', $z);
                $z = $user->year . "%";
            }
            if (isset($user->country) and ($user->country) != '') {
                $stmt->bindParam(':country', $w);
                $w = $user->country . "%";
            }
            if (isset($user->price) and ($user->price) != '') {
                $stmt->bindParam(':price', $q);
                $q = $user->price . "%";
            }
            if (isset($user->color) and ($user->color) != '') {
                $stmt->bindParam(':color', $e);
                $e = $user->color . "%";
            }
            if (isset($user->car_status) and ($user->car_status) != '') {
                $stmt->bindParam(':car_status', $user->car_status);
            }
            if ($stmt->execute()) {
                $cars = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($cars);
        } else {
            $UserId = $path[4];
            $CarId = $path[5];
            $user = json_decode(file_get_contents('php://input'));
            $sql = " (select plate_id from reservation as r where r.plate_id= $CarId and ((:pickDate BETWEEN r.pickup_time and r.return_time) or (:returnDate BETWEEN r.pickup_time and r.return_time)  ))";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':pickDate', $user->pickDate);
            $stmt->bindParam(':returnDate', $user->returnDate);
            if ($stmt->execute()) {
                $row = $stmt->fetch();
                if (!$row) { 
                    $sql = "Select * from `user` where user_id=$UserId ";
                    $stmt = $conn->prepare($sql);
                    if ($stmt->execute()) {
                        $row = $stmt->fetch();
                        if ($row) {
                            $email = strVal($row['email']);
                            $date = date('Y-m-d');
                            $sql = "INSERT INTO reservation (plate_id,user_id,payment,time_reservation,pickup_time,return_time,is_paid,`email`) VALUES 
                    ($CarId,$UserId,NULL,'$date',:pickDate,:returnDate,false,'$email')";
                            $stmt = $conn->prepare($sql);
                            
                            $stmt->bindParam(':pickDate', $user->pickDate);
                            $stmt->bindParam(':returnDate', $user->returnDate);
                            if ($stmt->execute()) {
                                $response = ['status' => 1, 'message' => 'Record created successfully.'];
                            } else {
                                $response = ['status' => 0, 'message' => 'Failed to create record1.'];
                            }
                            echo json_encode($response);
                        }
                    } else {
                        $response = ['status' => 0, 'message' => 'Car will be rented in this period.'];
                        echo json_encode($response);
                    }
                } else {
                    $response = ['status' => 0, 'message' => 'Already Reserved'];
                    echo json_encode($response);
                }
            }
        }
        break;
     }
