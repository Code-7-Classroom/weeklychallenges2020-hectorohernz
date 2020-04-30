const express = require('express');
const app = express();
const userData = require('./database.json');
app.use(express.json());
app.get('/employees',(req,res) => {
    res.send(userData);
});
app.get('/employees/:id', (req,res) => {
    const searchId = req.params.id;
    const userFind = userData.employees.find(Element => Element.id === Number(searchId));
    if(!userFind) return res.status(404).send("User Can't Be Found");
    res.send(userFind);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server Is On On localhost:${port}`);
})