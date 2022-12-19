<?php

   header('Location: ' . $url, true, $statusCode);

 session_start();
 $connection= mysqli_connect("localhost","root","","Car_Rental_System");
 if( $connection->connect_error)
 {

     die ("Connection failed ".$connection->connect_error);
 }

    // /**
    // * Database Connection
    // */
    // class DbConnect {
    //     private $server = 'localhost';
    //     private $dbname = 'Car_Rental_System';
    //     private $user = 'root';
    //     private $pass = '';
    //     public function connect() {
    //         try {
    //             $conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pass);
    //             $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //             return $conn;
    //         } catch (\Exception $e) {
    //             echo "Database Error: " . $e->getMessage();
    //         }
    //     }
    // }
?>
<script>
console.log("hjkkj");
</script>