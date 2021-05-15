-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: dbproject.3utilities.com    Database: bugtracker
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `work_on`
--

DROP TABLE IF EXISTS `work_on`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_on` (
  `staffID` binary(16) DEFAULT NULL,
  `bug_id` binary(16) DEFAULT NULL,
  KEY `staffID` (`staffID`),
  KEY `bug_id` (`bug_id`),
  CONSTRAINT `work_on_ibfk_1` FOREIGN KEY (`staffID`) REFERENCES `people` (`id`),
  CONSTRAINT `work_on_ibfk_2` FOREIGN KEY (`bug_id`) REFERENCES `bug_report` (`bug_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_on`
--

LOCK TABLES `work_on` WRITE;
/*!40000 ALTER TABLE `work_on` DISABLE KEYS */;
INSERT INTO `work_on` VALUES (_binary 'VP\�\0��\�f\r�\\[',_binary 'М�*�\�\�f\r�\\['),(_binary 'VP\�\0��\�f\r�\\[',_binary 'М�*�\�\�f\r�\\[');
/*!40000 ALTER TABLE `work_on` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-15 21:37:10
