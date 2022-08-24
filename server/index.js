require("dotenv").config();
const express = require('express');
const { MongoClient } = require("mongodb");
const { keyChange } = require('./dataAlias');

const port = process.env.SERVER_PORT;
const app = express();

const uri = process.env.DB_URI;
const client = new MongoClient(uri);
const db = client.db(process.env.DB_NAME);
const foodData = db.collection(process.env.DB_COLL_FOOD);

app.post('/getFoodNamesAll', async function (req, res) {

    const result = (await foodData.find().toArray()).map(i => i.식품명);
    console.log(result);
    res.send(result);
});


app.listen(port, () => {
                    console.log(`${port} hello server`);
});
