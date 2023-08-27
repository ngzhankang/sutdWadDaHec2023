CREATE TABLE `User` (
  `id` INT PRIMARY KEY,
  `name` VARCHAR(32),
  `contact` INT(8),
  `house_tel` INT(8),
  `gender` ENUM ('Male', 'Female', 'Others'),
  `email` VARCHAR(255),
  `description` VARCHAR(255),
  `amt_discussion` int(255)
);

CREATE TABLE `Tutee` (
  `user_id` INT PRIMARY KEY,
  `level` VARCHAR(255),
  `partnering_organsation` VARCHAR(255),
  `subjects` VARCHAR(255),
  `strength` VARCHAR(255),
  `weakness` VARCHAR(255)
);

CREATE TABLE `Tutor` (
  `user_id` INT PRIMARY KEY,
  `end_date` DATETIME
);

CREATE TABLE `Session` (
  `session_id` INT,
  `tutee` INT,
  `tutor` INT,
  `date` DATETIME,
  `hours` INT,
  `description` VARCHAR(2000)
);

ALTER TABLE `Tutee` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);

ALTER TABLE `Tutor` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);

ALTER TABLE `Session` ADD FOREIGN KEY (`tutee`) REFERENCES `User` (`id`);

ALTER TABLE `Session` ADD FOREIGN KEY (`tutor`) REFERENCES `User` (`id`);
