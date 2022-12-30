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
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE plate_id = $path[3]";
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
        
        if (count($path) < 4 || $path[3] != 'New') {
            // search
            $where = "where";
            $And = "";
            $user = json_decode(file_get_contents('php://input'));
            $help='';

            if (isset($user->plate_id) and ($user->plate_id) != '') {
                $help .= $where . $And . " car.plate_id = :plate_id ";
                $where = '';
                $And = "and";
            }
            if (isset($user->make) and ($user->make) != '') {
                $help .= $where . $And . " car.make like :make ";
                $where = '';
                $And = "and";
            }
            if (isset($user->model) and ($user->model) != '') {
                $help .= $where . $And . " car.model like :model ";
                $where = '';
                $And = "and";
            }
            if (isset($user->year) and ($user->year) != '') {
                $help .= $where . $And . " car.year like :year ";
                $where = '';
                $And = "and";
            }
            if (isset($user->country) and ($user->country) != '') {
                $help .= $where . $And . " car.country like :country ";
                $where = '';
                $And = "and";
            }
            if (isset($user->price) and ($user->price) != '') {
                $help .= $where . $And . " car.price like :price ";
                $where = '';
                $And = "and";
            }
            if (isset($user->color) and ($user->color) != '') {
                $help .= $where . $And . " car.color like :color ";
                $where = '';
                $And = "and";
            }
            if (isset($user->car_status) and ($user->car_status) != '') {
                $help .= $where . $And . " car.is_available = :car_status ";
                $where = '';
                $And = "and";
            }
            if (isset($user->email) and ($user->email) != '') {
                $help .= $where . $And . " `user`.email like :email ";
                $where = '';
                $And = "and";
            }
            if (isset($user->phone) and ($user->phone) != '') {
                $help .= $where . $And . " `user`.phone like :phone ";
                $where = '';
                $And = "and";
            }
            if (isset($user->reservationDate) and ($user->reservationDate) != '') {
                $help .= $where . $And . " reservation.time_reservation	 like :reservationDate ";
                $where = '';
                $And = "and";
            }
            $sql = "SELECT car.*,reservation.time_reservation,reservation.pickup_time,reservation.return_time,reservation.status,`user`.* from reservation natural join car right join `user` on `user`.`user_id`=reservation.user_id
            ".$help ." UNION ".
            "SELECT car.*,reservation.time_reservation,reservation.pickup_time,reservation.return_time,reservation.status,`user`.* from reservation natural join `user` right join car on car.plate_id=reservation.plate_id
            ".$help;
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
            if (isset($user->email) and ($user->email) != '') {
                $stmt->bindParam(':email', $q);
                $q = $user->email . "%";
            }
            if (isset($user->phone) and ($user->phone) != '') {
                $stmt->bindParam(':phone', $e);
                $e = $user->phone . "%";
            }
            if (isset($user->reservationDate) and ($user->reservationDate) != '') {
                $stmt->bindParam(':reservationDate', $a );
                $a = $user->reservationDate . "%";
            }

            if ($stmt->execute()) {
                // $response = ['status' => 1, 'message' => 'Record created successfully.'];
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($data);
        } else {
           
            $user = json_decode(file_get_contents('php://input'));

            $sql = "select * from car where plate_id = :plate_id ";
            // to check thereis no car has the same plate id
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':plate_id', $user->plate_id);

            if ($stmt->execute()) {
                $row = $stmt->fetch();
                if (!$row) { 
                    $sql = " INSERT INTO car (plate_id,make,model,`year`,`description`,price,is_available,color,country,engin_capacity,img) VALUES 
                    (:plate_id,:make,:model,:year, :carDescription ,:price,:car_status,:color,:car_location,:engineCapacity,:imgURL);
                        ";

                    $stmt = $conn->prepare($sql);
                    $stmt->bindParam(':plate_id', $user->plate_id);
                    $stmt->bindParam(':make', $user->make);
                    $stmt->bindParam(':model', $user->model);
                    $stmt->bindParam(':year', $user->year);
                    $stmt->bindParam(':carDescription', $user->carDescription);
                    $stmt->bindParam(':price', $user->price);
                    $stmt->bindParam(':car_status', $user->car_status);
                    $stmt->bindParam(':color', $user->color);
                    $stmt->bindParam(':car_location', $user->car_location);
                    $stmt->bindParam(':engineCapacity', $user->engineCapacity);
                    $stmt->bindParam(':imgURL', $user->imgURL);

                    if ($stmt->execute()) {
                        $response = ['status' => 1, 'message' => 'Record created successfully.'];
                       
                            } else {
                                $response = ['status' => 0, 'message' => 'Failed to create record.'];
                            }
                            echo json_encode($response);
                        }
                     else {
                        $response = ['status' => 0, 'message' => 'Car already exists'];
                        echo json_encode($response);
                    }
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to create record.'];
                    echo json_encode($response);
                }

            }
        
        break;

    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $sql = "UPDATE car SET make=:make,model=:model,`year`=:year,`description`=:description,price=:price,is_available=:is_available,color=:color,country=:country,engin_capacity=:engin_capacity WHERE plate_id = $path[4] ";
        $stmt = $conn->prepare($sql);
        
        $stmt->bindParam(':make', $user->make);
        $stmt->bindParam(':model', $user->model);
        $stmt->bindParam(':year', $user->year);
        $stmt->bindParam(':description', $user->description);
        $stmt->bindParam(':price', $user->price);
        $stmt->bindParam(':is_available', $user->is_available);
        $stmt->bindParam(':color', $user->color);
        $stmt->bindParam(':country', $user->country);
        $stmt->bindParam(':engin_capacity', $user->engin_capacity);

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
        $stmt = $conn->prepare($sql);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
