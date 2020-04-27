/*
HARD: Create a JSON file that will have 10 employees in it, 
Their employeeID, their name, their salary and department name.
Then, create an express API so that when you hit the endpoint with
 a GET request we want the api to respond with all data on the employees.
If you hit the endpoint with their employeeID, we want to hand up only the
information on that one employee.
If you hit the endpoint with an incorrect employeeID, send back the correct HTTP
 status code and an error message stating that the employee was not found.
GET::myendpointname.com/employees = Json with information from all 10 employees.
GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.
 */
const express =  require('express');
const Joi = require('joi');
const app = express();
const data = require('./employeeid.json');

app.get('/employees',(req,res) => {
    if(!data) return res.status(404).send(`This File cannot be found`)
    res.send(data);
})

app.get("/employees/:id", (req,res) =>{
    const person = data.employees.find(x => Number(req.params.id) === x.id);
    if(!person) return res.status(404).send("THIS IS NOT A EMPLOYEE ID");
    res.send(person);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("SERVER IS WORKING")
})

