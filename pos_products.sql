-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2024 at 10:47 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `pos_products`
--

CREATE TABLE `pos_products` (
  `Product_ID` int(100) NOT NULL,
  `Product_Name` varchar(100) NOT NULL,
  `Product_Price` varchar(100) NOT NULL,
  `Product_Description` varchar(100) NOT NULL,
  `createdAt` varchar(100) NOT NULL,
  `updatedAt` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pos_products`
--

INSERT INTO `pos_products` (`Product_ID`, `Product_Name`, `Product_Price`, `Product_Description`, `createdAt`, `updatedAt`) VALUES
(7, 'Milk', '60', 'Dex', '2024-05-19 22:26:52', '2024-05-19 22:26:52'),
(8, 'Yogurt', '50', 'Dex', '2024-05-19 22:27:05', '2024-05-19 22:27:05'),
(9, 'Bread', '80', 'Dex', '2024-05-19 22:27:22', '2024-05-19 22:27:22'),
(12, 'Bacon', '180', 'Dex', '2024-05-19 22:27:49', '2024-05-19 22:27:49'),
(13, 'Banana', '20', 'sasa', '2024-05-20 16:04:05', '2024-05-20 16:04:05'),
(14, 'Candy', '10', 'sasas', '2024-05-20 18:18:44', '2024-05-20 18:18:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pos_products`
--
ALTER TABLE `pos_products`
  ADD PRIMARY KEY (`Product_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pos_products`
--
ALTER TABLE `pos_products`
  MODIFY `Product_ID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
