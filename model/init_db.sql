DROP TABLE if exists favourites;

CREATE TABLE `favourites`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `start` VARCHAR(255) NOT NULL,
    `end` VARCHAR(255) NOT NULL,
    `mode` VARCHAR(255) NOT NULL,
    `fare` INT UNSIGNED NOT NULL,PRIMARY KEY(`id`)
);


    






