-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 25, 2022 at 03:12 PM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

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

INSERT INTO `car` (`plate_id`, `make`, `model`, `year`, `description`, `price`, `car_status`, `is_available`, `color`, `origin`, `engin_capacity`, `img`) VALUES
(1, 'Toyota', 'Belta', 2019, 'A car where limitless fun meets ultimate performance', 200000, 'Reserved', 'Available', 'Red', 'Japan', '1598 CC', 'https://toyota.com.eg/storage/17011/CORO1811-1001.jpg'),
(123, 'Fiat', 'Mini SUV', 2020, 'It is a nice SUV Car', 90000.5, 'Availbale for rent', 'Available', 'Grey', 'Italy', '1600 CC', 'https://cdn.motor1.com/images/mgl/PO9Y4/s3/fiat-363-suvfiat.webp'),
(456, 'Mercedes', 'Sedan', 2022, 'A huge family car which is practical for trips', 500000, 'Reserved', 'Outof Service', 'White', 'Germany', '1496 CC', 'https://images.unsplash.com/photo-1546518071-fddcdda7580a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVyY2VkZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
(567, 'Lamborgini', 'Huracan', 2021, 'It is a luxurious car', 100000, 'Availbale for rent', 'Available', 'Gold', 'Italy', '6498 CC', 'https://images.unsplash.com/photo-1578656415093-e7e19e5e132b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbWJvcmdoaW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
(901, 'Toyota', 'Corolla', 2017, 'A car where limitless fun meets ultimate performance', 200000, 'Reserved', 'Available', 'Silver', 'Japan', '1598 CC', 'https://toyota.com.eg/storage/17011/CORO1811-1001.jpg'),
(911, 'Porsche', 'Boxter', 2019, 'It is a comfortable car', 300000, 'Availbale for rent', 'Outof Service', 'Black', 'Canada', '1000 CC', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),
(921, 'Hyundai', 'Elantra', 2013, 'Practical car for work and duty', 50000, 'Available for rent', 'Available', 'Burgandy', 'South Korea', '1493 CC', 'https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2013HYU003a/2013HYU003a01.jpg'),
(6606, 'Chevrolet', 'Optra', 2015, '', 150000, 'rented', 'Available', 'Blue', 'U.S', '1500 CC', 'https://www.chevroletarabia.com/content/dam/chevrolet/middle-east/egypt/english/index/cars/2019-optra/colorizer/01-images/01-images/2018-Optra-Persian-Blue.jpg?imwidth=600');

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`plate_id`, `user_id`, `payment`, `time_reservation`, `pickup_time`, `return_time`, `is_paid`) VALUES
(123, 1, NULL, '2022-12-23', '2022-12-23', '2022-12-23', 0),
(123, 1, NULL, '2022-12-23', '2022-12-27', '2022-12-28', 0),
(123, 1, NULL, '2022-12-23', '2022-12-29', '2022-12-31', 0),
(123, 1, NULL, '2022-12-23', '2023-01-07', '2023-01-07', 0),
(456, 1, NULL, '2022-03-03', '2022-03-10', '2022-04-10', 0),
(901, 1, NULL, '2022-12-23', '2022-12-23', '2022-12-23', 0),
(901, 1, NULL, '2022-12-23', '2022-12-24', '2022-12-31', 0),
(901, 2, NULL, '2019-05-22', '2019-05-24', '2019-07-23', 0),
(6606, 3, 'VISA', '2020-06-10', '2019-06-20', '2019-07-25', 1);

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `fname`, `lname`, `password`, `email`, `phone`, `is_admin`) VALUES
(1, 'Mariam', 'Salama', '*0D95220D632EEA67B67A60097599118F090379B5', 'mariamsalama6@gmail.com', '01568936009', 0),
(2, 'Nada', 'Said', '*AD04DA3A49A8C44128D27A8DD37D8409919EAF6F', 'nadasaid5@gmail.com', '01236782099', 0),
(3, 'Nourhan', 'Mohamed', '*5A94940621497B1E16F735AF274BB187828A120C', 'nourhanmohamed3@gmail.com', '015095672891', 0),
(4, 'Rowan', 'Samy', '*8D7B98F669B84EEF4B4E516E36D6C9F8EB2D298A', 'rowansamy1@gmail.com', '01062888126', 1),
(5, 'Salma', 'Barakat', '*6E94A7DE52C015A481380F2668EE8B6B4025841D', 'salmabarakat4@gmail.com', '01056830916792', 0),
(6, 'Youmna', 'Ahmed', '*6A3B9636F4D1BDB081F25A987168E6161E36B217', 'youmnaahmed2@gmail.com', '01148710934', 0),
(7, 'Nourhan', 'Ismail', '*23AE809DDACAF96AF0FD78ED04B6A265E05AA257', 'nourhan.moh.ismail@gmail.com', '123', 0),
(8, 'Nourhan', 'Ismail', '*23AE809DDACAF96AF0FD78ED04B6A265E05AA257', 'nourhan.moh@gmail.com', '123456', 0),
(9, 'Nourhan', 'Ismail', '*23AE809DDACAF96AF0FD78ED04B6A265E05AA257', 'nourhan@gmail.com', '147852', 0),
(10, 'Nourhan', 'Ismail', '*23AE809DDACAF96AF0FD78ED04B6A265E05AA257', 'nourhan.moh.ismail@yahoo.com', '12345', 0),
(11, 'Nourhan', 'Ismail', '*23AE809DDACAF96AF0FD78ED04B6A265E05AA257', 'nourhan.moh.ismail@gmail.eg', '1234', 0),
(12, 'Nourhan', 'Ismail', '*23AE809DDACAF96AF0FD78ED04B6A265E05AA257', 'nourhanismail@gmail.com', '159', 0),
(13, 'Nourhan', 'Ismail', '*23AE809DDACAF96AF0FD78ED04B6A265E05AA257', 'nourhan.m@gmail.com', '1236', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
