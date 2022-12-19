--Creation of database 
CREATE DATABASE Car_Rental_System;

--Creation tables with only primary key defined
--No forgein key restrictions
--Creation of car table
CREATE TABLE car(
	plate_id int not null,
	make varchar(100) not null,
    model varchar(100) not null,
    `year` int not null,
    description varchar(225),
    price double not null,
    car_status varchar(100) not null,
    is_available varchar(100) not null,
    color varchar(100),
    origin varchar(100),
    engin_capacity varchar(10) not null,
    img varchar(225) not null,
    PRIMARY KEY (plate_id)
);
--Creation of car table
CREATE TABLE `user`(
	fname varchar(50) not null,
	lname varchar(50) not null,
    password varchar(50) not null,
    email varchar(50) not null,
    phone varchar(15) not null,
    is_admin boolean not null DEFAULT false,
    PRIMARY KEY (email)
);
--Creation of reservation table
CREATE TABLE reservation(
	plate_id int not null,
    email varchar(50) not null,
	payment varchar(100),
    time_reservation datetime not null,
    pickup_time datetime not null,
    return_time datetime not null,
    is_paid boolean not null,
    PRIMARY KEY (plate_id,email)
);

ALTER TABLE reservation ADD FOREIGN KEY (plate_id) REFERENCES car (plate_id)
On DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE reservation ADD FOREIGN KEY (email) REFERENCES `user` (email)
On DELETE CASCADE ON UPDATE CASCADE;