INSERT INTO car(plate_id,make,model,`year`,description,price,car_status,is_available,color,origin,engin_capacity,img) VALUES (123,'Fiat','Mini SUV',2020, 'It is a nice SUV Car',90000.5,'Availbale for rent','Available','Grey','Italy','1600 CC','https://cdn.motor1.com/images/mgl/PO9Y4/s3/fiat-363-suvfiat.webp');
INSERT INTO car(plate_id,make,model,`year`,description,price,car_status,is_available,color,origin,engin_capacity,img) VALUES (567,'Lamborgini','Huracan',2021, 'It is a luxurious car',100000,'Availbale for rent','Available','Gold','Italy','6498 CC','https://images.unsplash.com/photo-1578656415093-e7e19e5e132b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbWJvcmdoaW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
INSERT INTO car(plate_id,make,model,`year`,description,price,car_status,is_available,color,origin,engin_capacity,img) VALUES (911,'Porsche','Boxter',2019, 'It is a comfortable car',300000,'Availbale for rent','Outof Service','Black','Canada','1000 CC','https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
INSERT INTO car(plate_id,make,model,`year`,description,price,car_status,is_available,color,origin,engin_capacity,img) VALUES (456,'Mercedes','Sedan',2022, 'A huge family car which is practical for trips',500000,'Reserved','Outof Service','White','Germany','1496 CC','https://images.unsplash.com/photo-1546518071-fddcdda7580a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVyY2VkZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
INSERT INTO car(plate_id,make,model,`year`,description,price,car_status,is_available,color,origin,engin_capacity,img) VALUES (901,'Toyota','Corolla',2017, 'A car where limitless fun meets ultimate performance',200000,'Reserved','Available','Silver','Japan','1598 CC','https://toyota.com.eg/storage/17011/CORO1811-1001.jpg');
INSERT INTO car(plate_id,make,model,`year`,description,price,car_status,is_available,color,origin,engin_capacity,img) VALUES (921,'Hyundai','Elantra',2013, 'Practical car for work and duty',50000,'Available for rent','Available','Burgandy','South Korea','1493 CC','https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2013HYU003a/2013HYU003a01.jpg');
INSERT INTO car(plate_id,make,model,`year`,description,price,car_status,is_available,color,origin,engin_capacity,img) VALUES (6606,'Chevrolet','Optra',2015, '',150000,'rented','Available','Blue','U.S','1500 CC','https://www.chevroletarabia.com/content/dam/chevrolet/middle-east/egypt/english/index/cars/2019-optra/colorizer/01-images/01-images/2018-Optra-Persian-Blue.jpg?imwidth=600');


INSERT INTO `user`(fname,lname,email,phone,is_admin) VALUES ('Rowan','Samy','rowansamy1@gmail.com','01062888126',true);
INSERT INTO `user`(fname,lname,email,phone) VALUES ('Youmna','Ahmed','youmnaahmed2@gmail.com','01148710934');
INSERT INTO `user`(fname,lname,email,phone) VALUES ('Nourhan','Mohamed','nourhanmohamed3@gmail.com','015095672891');
INSERT INTO `user`(fname,lname,email,phone) VALUES ('Salma','Barakat','salmabarakat4@gmail.com','01056830916792');
INSERT INTO `user`(fname,lname,email,phone) VALUES ('Nada','Said','nadasaid5@gmail.com','01236782099');
INSERT INTO `user`(fname,lname,email,phone) VALUES ('Mariam','Salama','mariamsalama6@gmail.com','01568936009');


INSERT INTO reservation (plate_id,email,payment,time_reservation,pickup_time,return_time,is_paid) VALUES (456,'nadasaid5@gmail.com',NULL,'2022-03-03 01:20:40','2022-03-10 10:20:40','2022-04-10 11:00:30',false);
INSERT INTO reservation (plate_id,email,payment,time_reservation,pickup_time,return_time,is_paid) VALUES (901,'mariamsalama6@gmail.com',NULL,'2019-05-22 16:41:02','2019-05-24 18:35:01','2019-07-23 20:41:02',false);
INSERT INTO reservation (plate_id,email,payment,time_reservation,pickup_time,return_time,is_paid) VALUES (6606,'salmabarakat4@gmail.com','VISA','2020-06-10 13:00:02','2019-06-20 12:15:05','2019-07-25 19:10:05',true);
