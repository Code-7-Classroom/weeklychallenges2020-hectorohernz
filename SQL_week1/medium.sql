use sqlWeek;

CREATE TABLE Movies(
	Id INT NOT NULL auto_increment PRIMARY KEY,
    Title VARCHAR(50),
    Rating INT,
    Release_Year YEAR
);

SELECT * FROM Movies;

insert into Movies(Title,Rating,Release_Year)
VALUES('The Wrong Missy',4,'2020'),
('Uncut Gems',7,'2019'),
('SCOOB!',1,'2020'),
('The Platform',9,'2019'),
('The Red Ballon',8,'1970');
SELECT * FROM Movies WHERE Title LIKE '%s%';