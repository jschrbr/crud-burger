DROP DATABASE IF EXISTS mu91fxunx4cpnnhb;
CREATE DATABASE mu91fxunx4cpnnhb;

use mu91fxunx4cpnnhb;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(20),
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
)