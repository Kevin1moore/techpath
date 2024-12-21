-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2024 at 12:24 AM
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
-- Database: `techpath`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `career_interest` varchar(100) NOT NULL,
  `skill_level` enum('Beginner','Intermediate','Advanced') NOT NULL,
  `time_commitment` enum('Full-time','Part-time','Casual') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `career_interest`, `skill_level`, `time_commitment`, `created_at`) VALUES
(25, 'kevin Jones Lamptey', 'superadmin@gmail.com', '$2b$10$9Lc7pu.UkZF8nNYTYmvTPOgwOJszLoPVE17a.XWDb4A25ffbf1UD.', 'Web Development', 'Intermediate', 'Full-time', '2024-12-05 17:53:12'),
(26, 'kevin Jones Lamptey', 'superadmin@gmail.comm', '$2b$10$aQxH3ZnI9aQJmQF5wWAdCuq2u4toXdOzpWjaKb4PO78SWF4RGVxR6', 'Web Development', 'Beginner', 'Full-time', '2024-12-05 17:53:51'),
(27, 'kevin Jones Lamptey', 'knl@super.com', '$2b$10$qcfy3v7KQHdQkFNukOgP0.wqDhfRJQUousu8Z255wnWaiRfB1spIO', 'Web Development', 'Intermediate', 'Full-time', '2024-12-05 18:02:35'),
(28, 'kevin Jones Lamptey', 'knl@super.comnn', '$2b$10$WZe.MIo2J.GDxhoP1mFwbO1DOBJqF1UJTuuiSp2sV7K1skIy3IAA.', 'Web Development', 'Beginner', 'Full-time', '2024-12-05 18:11:58'),
(29, 'kevin Jones Lamptey', 'www@t.c', '$2b$10$KScqQA9sEoDksMJkBjEgj.POttNRjzf9oILBSwPoMj.PmYMNmeSbe', 'Web Development', 'Beginner', 'Full-time', '2024-12-05 18:45:16'),
(30, 'kevin Jones Lamptey', 'kelly@me.com', '$2b$10$wNtqKm/uNLXOjbdAt7jyCefxyT61LLripVFvmb51WcjsHGVPB41Eq', 'Web Development', 'Beginner', 'Full-time', '2024-12-05 19:34:34'),
(31, 'Junior', 'junior@junior.com', '$2b$10$Xi/bJV8qOm7VAuMe4tOhSezgzvutsdfNljiI95GmyhmtrBCG.8r4C', 'Cybersecurity', 'Intermediate', 'Full-time', '2024-12-05 19:49:46'),
(32, 'Ron Killings', 'ron@ron.com', '$2b$10$.vFfXbgsfAJbJifW2BgcNueHJ4JglZqH65suWI5zhvXk45tHo0jPu', 'Web Development', 'Beginner', 'Full-time', '2024-12-05 20:04:39'),
(33, 'James Lawson', 'j.man@g.com', '$2b$10$aZ/JiIbVCdY/eGIW2ZhMSuMh484OsM5GoQac4rNlw5yWR4tvdVm5q', 'Web Development', 'Beginner', 'Full-time', '2024-12-05 21:56:59'),
(34, 'kevin Jones Lamptey', 'j@me.com', '$2b$10$/jYEJbAz9rmFh/YAALa0i.NizVjek6J/2mA2qpaGAPJVoJkh5XMVi', 'Web Development', 'Intermediate', 'Full-time', '2024-12-06 09:04:38'),
(35, 'Christina', 'castrillochristina662@gmail.com', '$2b$10$h5EhOyREqaa3r0EyxftWluQ0SBpGDer/B3SKgtrmTHX8CbfWGF7W2', 'Cloud Engineering', 'Beginner', 'Full-time', '2024-12-14 22:56:40'),
(36, 'Ron Killing', 'r@c.d', '$2b$10$Nxy0JWk3ezTOetRrf2ug9.MvLSM.Ef0A5w0Y62L6Or7GpPKswgQWG', 'AI & Machine Learning', 'Beginner', 'Full-time', '2024-12-17 17:48:50'),
(38, 'Ron Killing', 'r@c.dd', '$2b$10$vtLzwL16hHf.t7Shhw1MyO/deFbR0624Ury5cTVKrLu0uxU0krOB6', 'Web Development', 'Beginner', 'Full-time', '2024-12-17 17:50:23'),
(40, 'Ron Killingss', 'r@c.ddd', '$2b$10$s/nl.oP.wB0G67zxRaL3.OtcZrI2pvEtoK0sWHP1PNddEqng8UdJu', 'Cloud Engineering', 'Beginner', 'Full-time', '2024-12-17 17:56:43'),
(41, 'Ron Killing', 'r@c.dde', '$2b$10$h.X3Nn7OI7Sb.d3EC.xue.hg5jFHstLNz1NgB9n4JuccLtp9c.xVa', 'Cloud Engineering', 'Beginner', 'Full-time', '2024-12-17 17:57:28'),
(42, 'Ron Killingw', 'r@c.ddee', '$2b$10$phVL9sVco1H6oqYoEdwOTOoRF6/nBMCNCKkJ6LxhePuTYvdnQdCbq', 'Cloud Engineering', 'Beginner', 'Full-time', '2024-12-17 17:58:31'),
(43, 'Ron Killing', 'r@cc.c', '$2b$10$xtIqYzt67OLW7JSEuq2UtO4pkVmIVxB8MKlnHN0Tj6DL59IV0ZKpq', 'AI & Machine Learning', 'Beginner', 'Full-time', '2024-12-17 18:02:08'),
(44, 'Ron Killingg', 'r@cc.bn', '$2b$10$LO9HqBocYu6PlUn5My.DJOTc1H3cPY1POVNtq30fP96wVgDCmGR0.', 'Cloud Engineering', 'Beginner', 'Full-time', '2024-12-17 18:38:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
