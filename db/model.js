const db = require('./index');

module.exports = {
  getListing: function (callback) {
    var queryStr = `SELECT * FROM all_expenses;`;
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  getItems: function (callback) {

    var queryStr = `SELECT * FROM dinner;`;
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },
  // POST:
  postItem: function (item, callback) {
    var itemName = item.itemName;
    console.log("item : ", item);
    var queryStr = `INSERT INTO dinner (itemName, quantity) VALUES ('${itemName}', 1)`;

    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },
  // updateItem: function (callback) { },
  deleteItem: function (item, callback) {
    var itemName = item.itemName;
    var queryStr = `DELETE FROM dinner WHERE itemName='${itemName}'`;
    // console.log(queryStr);
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }

}
