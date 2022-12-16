require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const product = require("./models/product.js");
const path = require('path');
const app = express();
const Router = require('./routes/router')

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))
// app.use(express.static(__dirname + 'public'))



const methodOverride = require('method-override');

//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Setting up Mongoose
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo"); 
});

app.use(Router)

app.listen(3000, ()=>{
    console.log('Start listning to port 3000')
})