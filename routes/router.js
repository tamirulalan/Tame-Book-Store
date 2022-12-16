const express = require('express')
const router = express.Router()
const product = require('../models/product.js')

router.get("/", (req, res) => {
    res.render('home')
  })
// Index
router.get("/product", (req, res) => {
    product.find({}, (error, allproduct) => {
         res.status(200).render("Index", {
            product: allproduct
       })  
    })
  })



router.get('/product/new', (req,res)=>{
    res.render('new')
})

// Delete - Delete this one record
router.delete('/product/:id', (req, res)=>{
    product.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/product');//redirect back to fruits index
    });
  });
  
  // Update - Modifying a record
  
  router.put('/product/:id', (req, res)=>{
    
    product.findByIdAndUpdate(req.params.id, req.body, (err, updatedproduct)=>{
       console.log(updatedproduct)
        res.redirect(`/product/${req.params.id}`); // redirecting to the Show page
    });
  });
  
  
  //Create
  router.post("/product", (req, res) => {
      product.create(req.body, (error, createdproduct) => {
          if(!error) {
              res.status(200).redirect("/product")
          } else {
              res.status(400).send(error)
          }
      })
    })
    
  // Edit - Get the form with the record to update

  router.get('/product/:id/edit', (req, res)=>{
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
  router.get("/product/:indexOfproductArray", function (req, res) {
    product.findById(req.params.indexOfproductArray, (err, foundproduct) => {
      res.render("Show", {
        product: foundproduct,
      });
    });
  });
  
  // buy
  router.put("/product/buy/:indexOfproductArray", function (req, res) {
    product.findById(req.params.indexOfproductArray, (err, foundproduct) => {
     let item =foundproduct
     item.Qtity =item.Qtity-1
     product.findByIdAndUpdate(req.params.indexOfproductArray, item, (err, foundproduct) => {
      res.redirect(`/product/${req.params.indexOfproductArray}`)
     })
     
    });
  });

module.exports = router