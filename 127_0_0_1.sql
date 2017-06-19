-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Loomise aeg: Mai 27, 2017 kell 07:26 PL
-- Serveri versioon: 10.1.22-MariaDB
-- PHP versioon: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Andmebaas: `techwizard`
--
CREATE DATABASE IF NOT EXISTS `techwizard` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `techwizard`;

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Andmete tõmmistamine tabelile `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Monitors'),
(2, 'Laptops'),
(3, 'Phones');

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `order_product`
--

CREATE TABLE `order_product` (
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Andmete tõmmistamine tabelile `order_product`
--

INSERT INTO `order_product` (`orderId`, `productId`) VALUES
(7, 1),
(8, 2),
(9, 2);

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `total` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Andmete tõmmistamine tabelile `orders`
--

INSERT INTO `orders` (`id`, `address`, `userId`, `total`) VALUES
(7, 'asd', 15, 897),
(8, 'Kaitse 2', 15, 1198),
(9, 'Kaitse 3 ', 15, 1198);

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `type` int(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Andmete tõmmistamine tabelile `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `type`, `image`) VALUES
(1, 'BenQ XL2411z', '299', 'Best monitor, Very big, very bright, much gaming!', 1, '/products/benq.jpg'),
(2, 'Iphone 5', '599', 'Best Iphone in the world, android is better But I dont give a shit I had to write something here!', 3, '/products/iphone.jpg'),
(4, 'Asus Desktop PC', '1099', 'My best asus desktop PC, very powerful very good, very RUSSIAN', 1, '/products/desktop.jpg'),
(7, 'id nunc interdum', '640', 'Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris.', 3, 'interdum.'),
(9, 'non, luctus sit', '146', 'metus. In nec orci. Donec nibh. Quisque nonummy ipsum', 3, 'at'),
(11, 'vitae aliquam eros', '32', 'orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi', 1, 'congue'),
(12, 'dolor. Fusce feugiat.', '553', 'leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor,', 2, 'libero.'),
(13, 'diam luctus lobortis.', '277', 'et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat', 3, 'ipsum.'),
(14, 'est arcu ac', '441', 'parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit', 1, 'venenatis'),
(15, 'Praesent eu dui.', '60', 'blandit', 2, 'arcu.'),
(16, 'nec urna et', '32', 'nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat.', 1, 'mi'),
(17, 'lectus sit amet', '718', 'dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus.', 1, 'felis'),
(18, 'Duis dignissim tempor', '821', 'metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et', 1, 'tempus'),
(19, 'cursus in, hendrerit', '167', 'Aenean eget magna. Suspendisse', 2, 'dolor.'),
(20, 'Nunc laoreet lectus', '127', 'leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenati', 3, 'sagittis.'),
(21, 'ligula. Nullam feugiat', '760', 'sapien, cursus in, hendrerit consectetuer,', 2, 'gravida'),
(22, 'rutrum, justo. Praesent', '25', 'amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobor', 3, 'justo.'),
(23, 'eu dui. Cum', '79', 'habitant morbi tristique senectus et netus et malesuada fames ac turpis', 3, 'dui'),
(24, 'pretium neque. Morbi', '455', 'rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor', 2, 'eget'),
(25, 'mollis. Duis sit', '87', 'egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis', 1, 'Duis'),
(26, 'fermentum fermentum arcu.', '321', 'aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lor', 3, 'litora'),
(27, 'iaculis, lacus pede', '293', 'Aenean', 3, 'nisi.'),
(28, 'turpis vitae purus', '622', 'mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id en', 2, 'Fusce'),
(29, 'montes, nascetur ridiculus', '23', 'at, velit. Cras lorem lorem, luctus', 1, 'non'),
(30, 'a, magna. Lorem', '50', 'eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti', 1, 'sit'),
(31, 'Nam ac nulla.', '325', 'lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus or', 1, 'sapien.'),
(32, 'Etiam laoreet, libero', '398', 'Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus.', 2, 'Cras'),
(33, 'venenatis lacus. Etiam', '732', 'id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, 'vitae,'),
(34, 'blandit congue. In', '92', 'taciti sociosqu ad litora torquent per conubia', 3, 'quam'),
(35, 'nulla. Donec non', '120', 'habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem', 3, 'Cras'),
(36, 'vitae erat vel', '555', 'sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus', 1, 'ultrices.'),
(37, 'Morbi non sapien', '830', 'Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur', 2, 'magna.'),
(38, 'molestie pharetra nibh.', '259', 'scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna', 2, 'sagittis'),
(39, 'Nulla tempor augue', '116', 'Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer', 1, 'In'),
(40, 'dictum eleifend, nunc', '118', 'nec, leo. Morbi neque tellus,', 1, 'quis'),
(41, 'Lorem ipsum dolor', '404', 'ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla,', 3, 'urna'),
(42, 'cursus non, egestas', '421', 'Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egest', 1, 'eu,'),
(43, 'eros. Proin ultrices.', '613', 'magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper', 1, 'risus'),
(44, 'Quisque imperdiet, erat', '876', 'facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames', 1, 'eget'),
(45, 'sem. Pellentesque ut', '173', 'velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus', 1, 'augue'),
(46, 'Sed eu nibh', '418', 'ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc', 2, 'turpis.'),
(47, 'nulla. Donec non', '939', 'sagittis placerat. Cras', 1, 'laoreet'),
(48, 'neque vitae semper', '76', 'velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget', 3, 'Nunc'),
(49, 'dignissim. Maecenas ornare', '51', 'mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla', 1, 'odio,'),
(50, 'vehicula et, rutrum', '216', 'aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue', 3, 'Mauris'),
(51, 'In faucibus. Morbi', '85', 'tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna s', 3, 'ac'),
(52, 'Donec at arcu.', '461', 'vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleif', 1, 'ornare'),
(53, 'purus, in molestie', '678', 'sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ali', 3, 'elit,'),
(54, 'nec, cursus a,', '418', 'convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum', 3, 'eu'),
(55, 'et, rutrum non,', '709', 'Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismo', 3, 'mattis'),
(56, 'vestibulum massa rutrum', '539', 'egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor.', 1, 'quam.'),
(57, 'amet metus. Aliquam', '503', 'quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auc', 1, 'est'),
(58, 'velit eget laoreet', '42', 'Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean eu', 3, 'Mauris'),
(59, 'hendrerit a, arcu.', '200', 'vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus.', 2, 'ac'),
(60, 'feugiat nec, diam.', '694', 'lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla.', 3, 'adipiscing'),
(61, 'auctor odio a', '326', 'ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In', 2, 'sociis'),
(62, 'imperdiet ornare. In', '882', 'metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel', 3, 'blandit'),
(63, 'dictum mi, ac', '315', 'sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo', 2, 'ultricies'),
(64, 'vitae, orci. Phasellus', '584', 'dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget,', 3, 'enim'),
(65, 'eu neque pellentesque', '590', 'eu, placerat eget, venenatis a, magna. Lorem ipsum dolor', 2, 'ultricies'),
(66, 'Nunc lectus pede,', '861', 'quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum', 3, 'natoque'),
(67, 'libero mauris, aliquam', '752', 'lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehic', 1, 'egestas'),
(68, 'odio sagittis semper.', '148', 'nulla. Donec non', 1, 'tellus'),
(69, 'Nunc ac sem', '978', 'ante bibendum ullamcorper. Duis cursus, diam at pretium', 2, 'libero'),
(70, 'eu nibh vulputate', '212', 'adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at,', 2, 'cursus,'),
(71, 'neque tellus, imperdiet', '416', 'in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod', 1, 'magna.'),
(72, 'Nullam enim. Sed', '905', 'Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis.', 1, 'quis'),
(73, 'odio sagittis semper.', '709', 'blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim', 2, 'orci'),
(74, 'lacus. Cras interdum.', '469', 'ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur r', 3, 'sit'),
(75, 'amet nulla. Donec', '699', 'et malesuada fames ac turpis', 1, 'vitae'),
(76, 'turpis vitae purus', '711', 'lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam p', 3, 'metus.'),
(77, 'libero lacus, varius', '157', 'lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis', 3, 'Aenean'),
(78, 'eleifend. Cras sed', '241', 'malesuada vel, convallis in,', 3, 'elementum'),
(79, 'volutpat ornare, facilisis', '325', 'in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel', 2, 'ac'),
(80, 'mollis non, cursus', '784', 'in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus ', 2, 'Suspendisse'),
(81, 'accumsan interdum libero', '497', 'enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc', 3, 'risus.'),
(82, 'sagittis. Duis gravida.', '117', 'arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae ', 2, 'erat.'),
(83, 'hymenaeos. Mauris ut', '701', 'non quam. Pellentesque habitant morbi tristique senectus et netus', 2, 'bibendum.'),
(84, 'neque venenatis lacus.', '116', 'Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus,', 3, 'ac'),
(85, 'lectus. Cum sociis', '938', 'Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non,', 3, 'arcu'),
(86, 'dictum mi, ac', '221', 'in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere,', 2, 'non,'),
(87, 'velit. Sed malesuada', '261', 'Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula.', 2, 'aliquam'),
(88, 'enim. Nunc ut', '585', 'augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante.', 2, 'condimentum.'),
(89, 'vel sapien imperdiet', '412', 'Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti', 2, 'eu'),
(90, 'pellentesque, tellus sem', '857', 'venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibu', 3, 'lobortis'),
(91, 'tincidunt dui augue', '475', 'ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci.', 2, 'et'),
(92, 'consequat auctor, nunc', '704', 'tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper,', 2, 'ac'),
(93, 'lacus vestibulum lorem,', '746', 'Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus', 1, 'gravida'),
(94, 'sodales at, velit.', '577', 'scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor,', 2, 'interdum'),
(95, 'orci lobortis augue', '589', 'Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc', 2, 'turpis'),
(96, 'non, sollicitudin a,', '353', 'dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu', 2, 'ligula'),
(97, 'tincidunt, neque vitae', '658', 'metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis', 1, 'Proin'),
(98, 'eleifend non, dapibus', '982', 'Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam ', 1, 'lobortis'),
(99, 'Vestibulum ut eros', '523', 'leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit', 1, 'varius'),
(100, 'vel lectus. Cum', '998', 'luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id', 2, 'erat'),
(101, 'consectetuer ipsum nunc', '203', 'nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend', 2, 'ipsum'),
(102, 'placerat, augue. Sed', '670', 'neque. Nullam ut nisi a', 3, 'risus.'),
(103, 'egestas rhoncus. Proin', '537', 'dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl.', 1, 'porttitor'),
(104, 'sed tortor. Integer', '876', 'ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus', 3, 'dolor');

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `slides`
--

CREATE TABLE `slides` (
  `id` int(11) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Andmete tõmmistamine tabelile `slides`
--

INSERT INTO `slides` (`id`, `location`) VALUES
(1, '/slides/desktops.jpg'),
(2, '/slides/monitors.jpg'),
(3, '/slides/phones.jpg');

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Andmete tõmmistamine tabelile `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `password`, `admin`) VALUES
(15, 'Joosep', 'Sisas', 'joosep.sisas@gmail.com', '$2a$10$QamBpgsMtSpT2Zu4FcNZcuU1wbsL0wh/TL137Ko8bkar13rqX.4bi', 1),
(16, 'asd', 'asd', 'joosepasd.sisas@gmail.com', '$2a$10$0C.tHNc.nZ9nggW5Z4baHOmCuZptq1h0u7qmBEYhq6LWhiMx7gujK', 0);

--
-- Indeksid tõmmistatud tabelitele
--

--
-- Indeksid tabelile `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeksid tabelile `order_product`
--
ALTER TABLE `order_product`
  ADD KEY `orderId` (`orderId`),
  ADD KEY `productId` (`productId`);

--
-- Indeksid tabelile `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeksid tabelile `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type` (`type`),
  ADD KEY `type_2` (`type`),
  ADD KEY `type_4` (`type`),
  ADD KEY `type_5` (`type`),
  ADD KEY `type_6` (`type`);

--
-- Indeksid tabelile `slides`
--
ALTER TABLE `slides`
  ADD PRIMARY KEY (`id`);

--
-- Indeksid tabelile `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT tõmmistatud tabelitele
--

--
-- AUTO_INCREMENT tabelile `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT tabelile `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT tabelile `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;
--
-- AUTO_INCREMENT tabelile `slides`
--
ALTER TABLE `slides`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT tabelile `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- Tõmmistatud tabelite piirangud
--

--
-- Piirangud tabelile `order_product`
--
ALTER TABLE `order_product`
  ADD CONSTRAINT `OrderId` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `ProductId` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Piirangud tabelile `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Piirangud tabelile `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`type`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
