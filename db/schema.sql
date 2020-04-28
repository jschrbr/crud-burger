DROP DATABASE IF EXISTS burgerDB;
CREATE DATABASE burgerDB;

use burgerDB;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(20),
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
)