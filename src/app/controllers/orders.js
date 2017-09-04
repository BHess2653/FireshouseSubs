const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Importing Models
const Product = mongoose.model('Product');
const Order = mongoose.model('Order');

module.exports = function(app){
	app.use('/api/v1', router);

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Get Orders
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.get('/order', (req, res) => {    
    Order.find()
      .populate('product_id') 
      .exec(function(err, product){
        res.json(product)
      });
    });

  router.get('/order/:orderID', (req, res) => {
    // console.log(req.params.orderID)
    Order.findById(req.params.orderID, (err, docs) => {
      console.log("DOCS REURNED--- ",docs)
      res.json(docs)
    }).populate('product_id') 

  })

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  //
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.post('/order', (req, res) => {
    console.log('Create NEW Order:', req.body.product_id);
    const newOrder = new Order(req.body)
    newOrder.save(function(err, order){
      if(err) return res.send(err);
      res.json(order);
    })
  })

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  //
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.put('/order/:orderID', (req, res) => {
    console.log("Update Order now: ", req.body )
    Order.findOneAndUpdate({_id: req.params.orderID}, req.body, (err, order) => {
      res.json(order);
    })
  })

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Deleting by the orderID.
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.delete('/order/:orderID', (req, res) => {
    Order.remove({_id: req.params.orderID}, (err) => {
      console.log("DELETE THIS NOW!!!! ", req.params.orderID )
      res.sendStatus(200);
    })
  })

  return router;
}
