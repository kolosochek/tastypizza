const express = require("express");
const cors = require("cors")
const fs = require("fs");
const filePath = "data.json";
const app = express();
const PORT = process.env.PORT || 4001;
app.use(cors())


// return all items
app.get("/api/pizza", function (req, res) {
    const content = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(content);
    res.type('application/json')
    res.json(data);
});

// get item by id
app.get("/api/pizza/:id", function (req, res) {
    const id = req.params.id; // получаем id
    const content = fs.readFileSync(filePath, "utf8");
    const pizzaList = JSON.parse(content);
    let pizzaItem = null;
    // search for pizzaItem in Pizza list by given id
    for (let i = 0; i < pizzaList.length; i++) {
        if (pizzaList[i].id === id) {
            pizzaItem = pizzaList[i];
            break;
        }
    }
    // if we found something - send it
    if (pizzaItem) {
        res.type('application/json')
        res.send(pizzaItem);
    }
    else {
        res.status(404).send();
    }
});

app.listen(PORT, () => {
    console.log(`Express server has been started on port ${PORT}`)
})
