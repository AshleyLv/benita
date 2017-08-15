-- create database
CREATE DATABASE IF NOT EXISTS catalyst default charset utf8 COLLATE utf8_general_ci;

-- test table user
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
