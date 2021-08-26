# ************************************************************
# Sequel Ace SQL dump
# Version 3038
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: 127.0.0.1 (MySQL 8.0.26)
# Database: sqlmore
# Generation Time: 2021-08-26 18:01:20 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table albums
# ------------------------------------------------------------

DROP TABLE IF EXISTS `albums`;

CREATE TABLE `albums` (
  `albumId` int NOT NULL AUTO_INCREMENT,
  `title` varchar(160) DEFAULT NULL,
  `artistId` int DEFAULT NULL,
  PRIMARY KEY (`albumId`),
  KEY `artistId` (`artistId`),
  CONSTRAINT `artistId` FOREIGN KEY (`artistId`) REFERENCES `artists` (`artistId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Dump of table artists
# ------------------------------------------------------------

DROP TABLE IF EXISTS `artists`;

CREATE TABLE `artists` (
  `artistId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`artistId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Dump of table customers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `customers`;

CREATE TABLE `customers` (
  `customerId` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(40) DEFAULT NULL,
  `lastName` varchar(20) DEFAULT NULL,
  `company` varchar(80) DEFAULT NULL,
  `address` varchar(70) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `state` varchar(40) DEFAULT NULL,
  `country` varchar(40) DEFAULT NULL,
  `postalCode` varchar(10) DEFAULT NULL,
  `phone` varchar(24) DEFAULT NULL,
  `fax` varchar(24) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`customerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Dump of table genres
# ------------------------------------------------------------

DROP TABLE IF EXISTS `genres`;

CREATE TABLE `genres` (
  `genreId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`genreId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Dump of table invoice_items
# ------------------------------------------------------------

DROP TABLE IF EXISTS `invoice_items`;

CREATE TABLE `invoice_items` (
  `invoiceItemId` int NOT NULL AUTO_INCREMENT,
  `invoiceId` int DEFAULT NULL,
  `trackId` int DEFAULT NULL,
  `unitPrice` decimal(10,0) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`invoiceItemId`),
  KEY `invoiceId` (`invoiceId`),
  KEY `trackId` (`trackId`),
  CONSTRAINT `invoice_items_ibfk_1` FOREIGN KEY (`invoiceId`) REFERENCES `invoices` (`invoiceId`),
  CONSTRAINT `invoice_items_ibfk_2` FOREIGN KEY (`trackId`) REFERENCES `tracks` (`trackId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Dump of table invoices
# ------------------------------------------------------------

DROP TABLE IF EXISTS `invoices`;

CREATE TABLE `invoices` (
  `invoiceId` int NOT NULL AUTO_INCREMENT,
  `customerId` int DEFAULT NULL,
  `invoiceData` datetime DEFAULT NULL,
  `billingAddress` varchar(70) DEFAULT NULL,
  `billingCity` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`invoiceId`),
  KEY `customerId` (`customerId`),
  CONSTRAINT `customerId` FOREIGN KEY (`customerId`) REFERENCES `customers` (`customerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Dump of table media_types
# ------------------------------------------------------------

DROP TABLE IF EXISTS `media_types`;

CREATE TABLE `media_types` (
  `mediaTypeId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`mediaTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Dump of table playlist_track
# ------------------------------------------------------------

DROP TABLE IF EXISTS `playlist_track`;

CREATE TABLE `playlist_track` (
  `playlistId` int DEFAULT NULL,
  `trackId` int DEFAULT NULL,
  KEY `playlistId` (`playlistId`),
  KEY `trackId` (`trackId`),
  CONSTRAINT `playlist_track_ibfk_1` FOREIGN KEY (`playlistId`) REFERENCES `playlists` (`playlistId`),
  CONSTRAINT `playlist_track_ibfk_2` FOREIGN KEY (`trackId`) REFERENCES `tracks` (`trackId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Dump of table playlists
# ------------------------------------------------------------

DROP TABLE IF EXISTS `playlists`;

CREATE TABLE `playlists` (
  `playlistId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`playlistId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Dump of table tracks
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tracks`;

CREATE TABLE `tracks` (
  `trackId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(120) DEFAULT NULL,
  `albumId` int DEFAULT NULL,
  `mediaTypeId` int DEFAULT NULL,
  `genreId` int DEFAULT NULL,
  `composer` varchar(220) DEFAULT NULL,
  `milliseconds` int DEFAULT NULL,
  `bytes` int DEFAULT NULL,
  `unitPrice` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`trackId`),
  KEY `albumId` (`albumId`),
  KEY `mediaTypeId` (`mediaTypeId`),
  KEY `genreId` (`genreId`),
  CONSTRAINT `albumId` FOREIGN KEY (`albumId`) REFERENCES `albums` (`albumId`),
  CONSTRAINT `genreId` FOREIGN KEY (`genreId`) REFERENCES `genres` (`genreId`),
  CONSTRAINT `mediaTypeId` FOREIGN KEY (`mediaTypeId`) REFERENCES `media_types` (`mediaTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
