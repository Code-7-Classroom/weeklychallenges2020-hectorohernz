/*
*** At the beginning of your API code, please comment in your endpoints so that I can test your code via Postman.
You can use a similar technique as the one shown above in the API design.

// Get Endpoints = localhost:3000/employees
// Get ID Endpoint = localhost:3000/employees/:id
// Post Endpoint = localhost:3000/employees
// Put Endpoint = localhost:3000/employees/:id
// Delete Endpoint = localhost:300/employees/:id

*/
const Joi = require('joi');
const express = require('express');
const app = express();
const userData = require('./fakeDate.json');
app.use(express.json());
const employees = userData.employees;

app.get('/employees',(req,res) => {
    res.status(200).send(employees);
});
app.get('/employees/:id', (req,res) => {
    const searchId = req.params.id;
    const userFind = userData.employees.find(Element => Element.id === Number(searchId));
    if(!userFind) return res.status(404).send("User Can't Be Found");

    res.status(200).send(userFind);
})


app.post("/employees", (req,res) => {
    const { error } = validEmployee(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    const employee = {
        id: userData.employees.length + 1,
        name: req.body.name,
        salary: req.body.salary,
        deparment: req.body.deparment
    };
 
    employees.push(employee);
    res.status(200).send(employees);    
});


app.put('/employees/:id', (req,res) => {
    const queryId = req.params.id;
    const queryUser = userData.employees.find(Element => Element.id === Number(queryId));
    if(!queryUser) return res.status(404).send("User Can't Be Found");

    const { error } = validEmployee(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    queryUser.name = req.body.name;
    queryUser.salary = req.body.salary;
    queryUser.deparment = req.body.deparment;
    res.status(200).send(queryUser);
});


app.delete('/employees/:id', (req,res) => {
    const queryId = req.params.id;
    const queryUser = userData.employees.find(el => el.id === Number(queryId));
    if(!queryUser) return res.status(404).send("User Can't Be Found");
    
    const indexOfUser = userData.employees.indexOf(queryUser);
    userData.employees.splice(indexOfUser,1);
    res.status(200).send('Successfully Deleted')
})


var validEmployee = (user) => {
    const userInfo = {
        name: Joi.string().min(2).required(),
        salary: Joi.number().required(),
        deparment: Joi.string().min(2).required()
    }
    return Joi.validate(user,userInfo);
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server Is On On localhost:${port}`);
})