
CREATE TABLE Movies(
	Id INT NOT NULL auto_increment PRIMARY KEY,
    Title VARCHAR(50),
    Rating INT,
    Release_Year YEAR
);

insert into Movies(Title,Rating,Release_Year)
VALUES('The Wrong Missy',4,'2020'),
('Uncut Gems',7,'2019'),
('SCOOB!',1,'2020'),
('The Platform',9,'2019'),
('The Red Ballon',8,'1970');

-- add the director’sFirst Name and Last Name into two separate columns. 
alter table Movies
add firstName varchar(25);

alter table Movies
add LastName varchar(25);
SELECT * FROM Movies;

UPDATE Movies
SET LastName = 'Spindel', FirstName = 'Tyler'
WHERE Title = "The Wrong Missy";

UPDATE Movies
SET LastName = 'Safdie', FirstName = 'Josh'
WHERE Title = "Uncut Gems";

UPDATE Movies
SET LastName = 'Cervone', FirstName = 'Tony'
WHERE Title = "SCOOB!";

UPDATE Movies
SET LastName = 'Lamorisse', FirstName = 'Albert'
WHERE Title = "The Red Ballon";


select * FROM Movies;

-- Create a query that puts the names together. 
SELECT CONCAT(firstName, ' ', LastName) FROM Movies;


-- Create a query to put the list in alphabetical order by the last name from A-Z
Select * FROM Movies ORDER BY LastName ASC;

-- remove the Movies where the Last Name ends with ”R-Z” 
DELETE FROM Movies WHERE RIGHT(LastName,1) BETWEEN 'r' AND 'z';

-- Write a query where the first three appear
SELECT * FROM Movies LIMIT 3;

