DROP TABLE if exists favourites;

CREATE TABLE `favourites`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `start` VARCHAR(255) NOT NULL,
    `end` VARCHAR(255) NOT NULL,
    `mode` VARCHAR(255) NOT NULL,
    `fare` INT UNSIGNED NOT NULL,
    `image` VARCHAR(999) NOT NULL,PRIMARY KEY(`id`)
);

INSERT INTO favourites (name, start, end, mode, fare, image) VALUES ('Test', 'Test', 'Test', 'Test', 155, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F1b%2FTransport_for_London_logo_%25282013%2529.svg%2F2560px-Transport_for_London_logo_%25282013%2529.svg.png&tbnid=nTwDqk8tMGHg2M&vet=12ahUKEwjXxNG75MX_AhWgpycCHe_mB_UQMygAegUIARDiAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ATransport_for_London_logo_(2013).svg&docid=YrtJMDf9zn_TCM&w=2560&h=783&q=tfl%20logo&ved=2ahUKEwjXxNG75MX_AhWgpycCHe_mB_UQMygAegUIARDiAQ');
    






