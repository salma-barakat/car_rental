-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 26, 2022 at 01:39 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_rental_system`
--

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`plate_id`, `make`, `model`, `year`, `description`, `price`, `is_available`, `color`, `country`, `engin_capacity`, `img`) VALUES
(123, 'Fiat', 'Mini SUV', 2020, 'It is a nice SUV Car', 900.5, 'Available for rent', 'Grey', 'Italy', '1600 CC', 'https://cdn.motor1.com/images/mgl/PO9Y4/s3/fiat-363-suvfiat.webp'),
(456, 'Mercedes', 'Sedan', 2022, 'A huge family car which is practical for trips', 5000, 'Out of Service', 'White', 'Germany', '1496 CC', 'https://images.unsplash.com/photo-1546518071-fddcdda7580a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVyY2VkZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
(567, 'Lamborgini', 'Huracan', 2021, 'It is a luxurious car', 8000, 'Available for rent', 'Gold', 'Egypt', '6498 CC', 'https://images.unsplash.com/photo-1578656415093-e7e19e5e132b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbWJvcmdoaW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
(901, 'Toyota', 'Corolla', 2017, 'A car where limitless fun meets ultimate performance', 2000, 'Available for rent', 'Silver', 'Japan', '1598 CC', 'https://toyota.com.eg/storage/17011/CORO1811-1001.jpg'),
(911, 'Porsche', 'Boxter', 2019, 'It is a comfortable car', 3000, 'Out of Service', 'Black', 'Canada', '1000 CC', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),
(921, 'Hyundai', 'Elantra', 2013, 'Practical car for work and duty', 4000, 'Available for rent', 'Burgandy', 'South Korea', '1493 CC', 'https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2013HYU003a/2013HYU003a01.jpg'),
(6606, 'Chevrolet', 'Optra', 2015, 'Practical and elegant', 950.5, 'Available for rent', 'Blue', 'U.S', '1500 CC', 'https://www.chevroletarabia.com/content/dam/chevrolet/middle-east/egypt/english/index/cars/2019-optra/colorizer/01-images/01-images/2018-Optra-Persian-Blue.jpg?imwidth=600');

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`plate_id`, `user_id`, `email`, `payment`, `time_reservation`, `pickup_time`, `return_time`, `is_paid`, `status`) VALUES
(123, 2, 'youmnaahmed@gmail.com', NULL, '2022-04-03', '2022-09-10', '2023-10-10', 0, 'reserved'),
(456, 5, 'nadasaid@gmail.com', NULL, '2022-03-03', '2022-03-10', '2022-04-10', 0, 'reserved'),
(567, 3, 'nourhanmohamed@gmail.com', NULL, '2019-05-22', '2019-08-24', '2019-12-23', 0, 'reserved'),
(901, 6, 'mariamsalama@gmail.com', NULL, '2019-05-22', '2019-05-24', '2019-07-23', 0, 'reserved'),
(911, 4, 'salmabarakat@gmail.com', 'VISA', '2020-06-10', '2020-06-20', '2020-08-25', 1, 'reserved'),
(921, 7, 'yasminahmed@gmail.com', NULL, '2019-05-25', '2019-08-24', '2019-12-25', 0, 'reserved'),
(6606, 4, 'salmabarakat@gmail.com', 'VISA', '2020-06-10', '2020-06-20', '2020-07-25', 1, 'reserved');

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `email`, `fname`, `lname`, `password`, `phone`, `is_admin`) VALUES
(6, 'mariamsalama@gmail.com', 'Mariam', 'Salama', 'd937fa3c3c831e4fd9b29c485abaa8b0', '01568936009', 0),
(5, 'nadasaid@gmail.com', 'Nada', 'Said', '417b5660c80cf66f93c674b66f09e208', '01236782099', 0),
(3, 'nourhanmohamed@gmail.com', 'Nourhan', 'Mohamed', '803d217a53160134cff472bbfb23a32f', '015095672891', 0),
(1, 'rowansamy@gmail.com', 'Rowan', 'Samy', '1b142484ba9664073af827f4f9d30332', '01062888126', 1),
(4, 'salmabarakat@gmail.com', 'Salma', 'Barakat', 'fc8869424e7f70897c41799eb81d0c20', '01056830916792', 0),
(7, 'yasminahmed@gmail.com', 'yasmin', 'ahmed', '3b2d8947d68c718313f576554d78af46', '01967490823', 0),
(2, 'youmnaahmed@gmail.com', 'Youmna', 'Ahmed', '0bbd557bef01cb2f6423eec89c3df824', '01148710934', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
