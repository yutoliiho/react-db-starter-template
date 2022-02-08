const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const model = require('../db/model');

// MIDDLEWARE
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/listing', (req, res) => {
  model.getListing((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.get('/api/shopping_list', (req, res) => {

  model.getItems((err, data) => {

    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})
// POST
app.post('/api/shopping_list', function (req, res) {
  model.postItem(req.body, function (err, newItem) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      console.log(newItem);
      res.status(201).json(newItem);
    }
  })

})

app.delete('/api/shopping_list', function (req, res) {
  // console.log("req.body:  ", req.body);
  // res.send(req.body);

  model.deleteItem(req.body, function (err, itemToDelete) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(itemToDelete);
    }
  })

})




app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`)
})

// test origin