-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2023 at 10:28 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gallery-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `link`, `filename`, `size`) VALUES
(19, 'http://localhost/projects/gallery-app/upload/images/project_image64269935aa975.jpg', 'project_image64269935aa975.jpg', 218986),
(20, 'http://localhost/projects/gallery-app/upload/images/project_image64269938a1043.jpeg', 'project_image64269938a1043.jpeg', 501254),
(22, 'http://localhost/projects/gallery-app/upload/images/project_image642699467f211.jpg', 'project_image642699467f211.jpg', 244218),
(23, 'http://localhost/projects/gallery-app/upload/images/project_image64269948d39fa.jpg', 'project_image64269948d39fa.jpg', 150647),
(24, 'http://localhost/projects/gallery-app/upload/images/project_image6426994b3d0b2.jpg', 'project_image6426994b3d0b2.jpg', 2354632),
(25, 'http://localhost/projects/gallery-app/upload/images/project_image6426994d55a07.jpg', 'project_image6426994d55a07.jpg', 390661),
(26, 'http://localhost/projects/gallery-app/upload/images/project_image6426994f5354d.png', 'project_image6426994f5354d.png', 839286),
(27, 'http://localhost/projects/gallery-app/upload/images/project_image642699514bf78.jpg', 'project_image642699514bf78.jpg', 232855),
(28, 'http://localhost/projects/gallery-app/upload/images/project_image642699536f862.jpg', 'project_image642699536f862.jpg', 303035),
(29, 'http://localhost/projects/gallery-app/upload/images/project_image642699556fe55.jpg', 'project_image642699556fe55.jpg', 130426),
(30, 'http://localhost/projects/gallery-app/upload/images/project_image64269959664ea.jpg', 'project_image64269959664ea.jpg', 48064),
(31, 'http://localhost/projects/gallery-app/upload/images/project_image6426996e09425.jpg', 'project_image6426996e09425.jpg', 94523),
(32, 'http://localhost/projects/gallery-app/upload/images/project_image642699710244d.jpg', 'project_image642699710244d.jpg', 66320);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
