const express = require('express');
const app = express();
const port = 3000;

const budget = {
    myBudget: [
    {
        title: 'Eat out',
        budget: 30
    },
    {
        title: 'Rent',
        budget: 10
    },
    {
        title: 'groceries',
        budget: 60
    },
    ]
};





app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send("Hello World");
});

app.get('/budget', (req, res) => {
    res.json(require("./mydata.json").myBudget);
});

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
});
