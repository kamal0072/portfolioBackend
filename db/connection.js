const mongoose = require('mongoose');
const DB = process.env.BATABASE;
mongoose.set("strictQuery", false);

mongoose.connect(DB, )
.then(()=>console.log('Mongo db Connection Build up Successfully thanks.......'))
.catch((e)=>console.log("Its an Error : ", e.message))



