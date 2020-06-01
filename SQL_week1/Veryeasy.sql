use sqlWeek;


CREATE TABLE Cars(
    Id INT auto_increment PRIMARY KEY,
    Make VARCHAR(20),
    Model VARCHAR(20),
    Year INT
);

SELECT * FROM Cars;

INSERT INTO Cars(Make,Model,Year)
values('Jeep','Wrangler',2019),('Toyota','Brz',2015),('Mclaren','P1',2020);

INSERT INTO Cars(Make,Model,Year)
values('Toyota','Supra',2019),('Honda','Fit',2015);