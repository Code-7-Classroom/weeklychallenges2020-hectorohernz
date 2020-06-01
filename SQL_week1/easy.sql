show databases;
use sqlWeek;

create table Books(
	 Id INT NOT NULL auto_increment PRIMARY KEY,
     Title VARCHAR(50),
     Publish_Date DATE,
     FirstName VARCHAR(30),
     LastName VARCHAR(30)
);

INSERT INTO Books(Title,Publish_Date,FirstName,LastName)
values('The Giver','1993-01-25','Louis','Lowry'),
('The Maze Runner','2009-05-05','James','Dasher'),
('Goosebumps: One Day At Horrorland','1994-02-01','R.L','Stine'),
('The House On Mango Street','1984-01-25','Sandra','Cisneros');
INSERT INTO Books(Title,Publish_Date,FirstName,LastName)
values('OUTLIERS','2008-12-05','Malcolm','Gladwell'),('Homo Deus','2015-11-01','Yuval','Harari');

SELECT * FROM Books;

--  Remove the oldest book Provide an additional query giving the sum of all books
SELECT * FROM Books ORDER BY Publish_Date ASC;
DELETE FROM Books WHERE Publish_Date = '1984-01-25';
SELECT COUNT(Id) FROM Books;