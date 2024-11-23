require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const BASE_URL = process.env.BASE_URL
const PORT = process.env.PORT;

require('./db/connection.js');
const router = require('./routes/routers.js')

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, ()=>{
    console.log(`server starting at :${BASE_URL}`)
});

