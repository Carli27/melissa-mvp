DROP TABLE if exists favourites;

CREATE TABLE `favourites`(
    `name` VARCHAR(255) NOT NULL,
    `from` LONGTEXT NOT NULL,
    `to` LONGTEXT NOT NULL,
    `mode` LONGTEXT NOT NULL,
    `fare` INT UNSIGNED NOT NULL,
    `image` VARCHAR(4000) NOT NULL,PRIMARY KEY(`id`)
);

INSERT INTO favourites (name, from, to, mode, fare, image) VALUES ('Test', 'Test', 'Test', 'Test', 450, 'https://www.chilipeppermadness.com/wp-content/uploads/2018/03/96bf577e2682bc7925dad067c2022909.jpg');
    







