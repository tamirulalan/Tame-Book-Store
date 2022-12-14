require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const product = require("./models/product.js");
const app = express();

app.use(express.static('./public'));
app.use(express.json());


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

app.get("/", (req, res) => {
    res.render('home')
  })
// Index
app.get("/product", (req, res) => {
    product.find({}, (error, allproduct) => {
         res.status(200).render("Index", {
            product: allproduct
       })  
    })
  })



app.get('/product/new', (req,res)=>{
    res.render('new')
})

// Delete - Delete this one record
app.delete('/product/:id', (req, res)=>{
    product.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/product');//redirect back to fruits index
    });
  });
  
  // Update - Modifying a record
  
  app.put('/product/:id', (req, res)=>{
    
    product.findByIdAndUpdate(req.params.id, req.body, (err, updatedproduct)=>{
       console.log(updatedproduct)
        res.redirect(`/product/${req.params.id}`); // redirecting to the Show page
    });
  });
  
  
  //Create
  app.post("/product", (req, res) => {
      product.create(req.body, (error, createdproduct) => {
          if(!error) {
              res.status(200).redirect("/product")
          } else {
              res.status(400).send(error)
          }
      })
    })
    
  // Edit - Get the form with the record to update
  
  app.get('/product/:id/edit', (req, res)=>{
    product.findById(req.params.id, (err, foundproduct)=>{ //find the fruit
      if(!err){
        res.render(
          'Edit',
        {
          product: foundproduct //pass in the found fruit so we can prefill the form
        }
      );
    } else {
      res.send({ msg: err.message })
    }
    })
  })
  
  
  // Show
  app.get("/product/:indexOfproductArray", function (req, res) {
    product.findById(req.params.indexOfproductArray, (err, foundproduct) => {
      res.render("Show", {
        product: foundproduct,
      });
    });
  });
  
  // buy
  app.put("/product/buy/:indexOfproductArray", function (req, res) {
    product.findById(req.params.indexOfproductArray, (err, foundproduct) => {
     let item =foundproduct
     item.Qty =item.Qty-1
     product.findByIdAndUpdate(req.params.indexOfproductArray, item, (err, foundproduct) => {
      res.redirect(`/product/${req.params.indexOfproductArray}`)
     })
     
    });
  });
app.listen(3000, ()=>{
    console.log('Start listning to port 3000')
})