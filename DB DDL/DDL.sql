--Creation of database 
CREATE DATABASE Car_Rental_System;

--Creation of car table
CREATE TABLE car(
	plate_id int(11) NOT NULL,
	make varchar(100) NOT NULL,
    model varchar(100)  NOT NULL,
    `year` int(11)  NOT NULL,
    `description` varchar(225) DEFAULT NULL,
    price double  NOT NULL,
    is_available varchar(100) NOT NULL,
    color varchar(100)  DEFAULT NULL,
    country varchar(100) NOT NULL,
    engin_capacity varchar(10)  NOT NULL,
    img varchar(225) NOT NULL,
    PRIMARY KEY (plate_id)
);
--Creation of car table
CREATE TABLE `user`(
    user_id int(11) AUTO_INCREMENT NOT NULL UNIQUE,
    email varchar(50) NOT NULL,
	fname varchar(50) NOT NULL,
	lname varchar(50) NOT NULL,
    `password` varchar(50) NOT NULL,
    phone varchar(15) NOT NULL,
    is_admin boolean NOT NULL DEFAULT FALSE ,
    PRIMARY KEY (email)
);
--Creation of reservation table
CREATE TABLE reservation(
	plate_id int(11) NOT NULL,
    user_id int(11) NOT NULL,
    email varchar(50) NOT NULL,
	payment varchar(100) DEFAULT NULL,
    time_reservation date NOT NULL,
    pickup_time date NOT NULL,
    return_time date NOT NULL,
    is_paid boolean NOT NULL,
    `status` varchar(100) NOT NULL DEFAULT 'reserved',
    PRIMARY KEY (plate_id,email,pickup_time)
);

ALTER TABLE reservation ADD FOREIGN KEY (plate_id) REFERENCES car (plate_id)
On DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE reservation ADD FOREIGN KEY (email) REFERENCES `user` (email)
On DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE reservation ADD FOREIGN KEY (user_id) REFERENCES `user` (user_id)
On DELETE CASCADE ON UPDATE CASCADE;