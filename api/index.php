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
        //echo $path[2];
        if (isset($path[2]) && is_numeric($path[2])) {
            $sql .= " WHERE plate_id = $path[2]";
            $stmt = $conn->prepare($sql);
         //   $stmt->bindParam(':id', $path[2]);
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
        if (count ($path)<4 || $path[4] != 'reserve') {
            // echo 'postt '.$path[4];
            // select * from reservation where `plate_id`='901' and `return_time`> "2019-09-24 18:35:01" 
            $user = new class
            {
            };
            $user->make = "1";
            $user->plate_id = "1";
            $where = "where";
            $And = "";
            $user = json_decode(file_get_contents('php://input'));

            $sql = "SELECT * FROM car ";
            $stmt = $conn->prepare($sql);

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
            if (isset($user->origin) and ($user->origin) != '') {
                $sql .= $where . $And . " origin like :origin ";
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
            if (isset($user->origin) and ($user->origin) != '') {
                $stmt->bindParam(':origin', $w);
                $w = $user->origin . "%";
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
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
                $cars = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($cars);
        } else {
            $UserId = $path[3];
            $CarId = $path[4];

            $user = json_decode(file_get_contents('php://input'));

            $sql = "select * from reservation where plate_id = $CarId and return_time > :pickDate ";
            $stmt = $conn->prepare($sql);
            // echo $user->pickDate;
            $stmt->bindParam(':pickDate', $user->pickDate);
            if ($stmt->execute()) {
                // $response = ['status' => 1, 'message' => 'Record created successfully.'];
                $row = $stmt->fetch();
                if (!$row) { // here! as simple as that
                    // echo 'No data found';
                    $date=date("Y-m-d",time());
                    // echo $date;
                    $sql = "INSERT INTO reservation (plate_id,user_id,payment,time_reservation,pickup_time,return_time,is_paid) VALUES 
                    ($CarId,$UserId,NULL,'2022-12-23',:pickDate,:returnDate,false)";
                    $stmt = $conn->prepare($sql);
                    // echo $user->pickDate;
                    $stmt->bindParam(':pickDate', $user->pickDate);
                    $stmt->bindParam(':returnDate', $user->returnDate);
                    if ($stmt->execute()) {
                        $response = ['status' => 1, 'message' => 'Record created successfully.'];
                        // $cars = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    } else {
                        $response = ['status' => 0, 'message' => 'Failed to create record.'];
                    }
                    echo json_encode($response);
                }
                else{
                    $response = ['status' => 0, 'message' => 'Car will be rented in this period.'];
                    echo json_encode($response);
                }
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
                echo json_encode($response);
            }
            // $x=$user->make.'%';
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
