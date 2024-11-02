CREATE database uni_web_semana8;
USE uni_web_semana8;

CREATE TABLE login(
    id int(11)  PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL, 
    password VARCHAR(20) NOT NULL
);