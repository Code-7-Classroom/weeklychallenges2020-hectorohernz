show databases;

use sqlWeek;
show tables;
;

-- Create a new query that adds an additional column to the results to show how many cars have the same Make.

CREATE TABLE vCars (
    Id INT auto_increment PRIMARY KEY,
    Make VARCHAR(20),
    Model VARCHAR(20),
    Year INT
);

INSERT INTO vCars(Make,Model,Year)
values('Jeep','Wrangler',2019),
('Toyota','Brz',2015),
('Mclaren','P1',2020);

SELECT * FROM vCars;

ALTER TABLE vCars ADD Price int;
ALTER TABLE vCars ADD Color varchar(30);

UPDATE Vcars SET Price = 32000 WHERE Id = 1;
UPDATE Vcars SET Price = 25000 WHERE Id = 2;
UPDATE Vcars SET Price = 120000 WHERE Id = 3;

UPDATE Vcars SET Color = 'Blue' WHERE Id = 1;
UPDATE Vcars SET Color = 'Black' WHERE Id = 2;
UPDATE Vcars SET Color = 'Grey' WHERE Id = 3;

SELECT CONCAT(Make, ' ', Model) FROM vCars;
