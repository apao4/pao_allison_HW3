-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 14, 2018 at 06:39 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `plasticStraws`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_straws`
--

CREATE TABLE `tbl_straws` (
  `id` int(11) NOT NULL,
  `city` varchar(30) NOT NULL,
  `state` varchar(30) NOT NULL,
  `fact` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_straws`
--

INSERT INTO `tbl_straws` (`id`, `city`, `state`, `fact`) VALUES
(1, 'Alameda', 'California', 'Also, all to-go food ware must be reusable, compostable, or recyclable.'),
(2, 'Carmel', 'California', 'Plastic straws and utensils are banned for restaurants and food vendors.'),
(3, 'San-Luis-Obispo', 'California', 'Implemented an ordinance regulating the use/distribution of single-use straws.'),
(4, 'Davis', 'California', 'Continues working to increase awareness of simple decisions to reduce waste.'),
(5, 'Malibu', 'California', 'Promotes alternatives to plastic, such as paper, bamboo, or sugar cane. '),
(6, 'Manhattan-Beach', 'California', 'Banning all plastic straws, utensils and stirrers at city bars and restaurants.'),
(7, 'Oakland', 'California', 'The ordinance advocates for plastic bag and straw ban legislation.'),
(8, 'Richmond', 'California', 'Single-use plastic bags have been banned and paper bags must be 40% recyclable.'),
(9, 'Berkeley', 'California', 'This city currently has a ban on styrofoam, plastic bags, and plastic straws.  '),
(10, 'Seattle', 'Washington', 'The first major U.S. city to ban single-use plastic straws and utensils in food service.'),
(11, 'Edmonds', 'Washington', 'Phased in ban on single-use plastic, including straws, stirrers and cutlery.'),
(12, 'Monmouth-Beach', 'New Jersey', 'Retailers in the borough also can\'t package food in polystyrene foam.'),
(13, 'Miami-Beach', 'Florida', 'Prevents businesses from giving out single-use plastic bags or at town-sponsored events.'),
(14, 'Fort-Myers', 'Florida', 'Have already noticed a significant change in cleanliness of the beach.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_straws`
--
ALTER TABLE `tbl_straws`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_straws`
--
ALTER TABLE `tbl_straws`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
