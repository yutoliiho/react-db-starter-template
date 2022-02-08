const db = require('./index')
const fs = require('fs');
const v8 = require('v8');
const faker = require('faker');
var csv = require('csvtojson');
const { v4 } = require('uuid');
const csvFilePath = "bill.csv";

const writeLine = (writer, callback) => {
  return csv()
    .fromFile(csvFilePath)
    .then((bills) => {
      var i = 0;
      function writeFile() {
        let ok = true;
        while (i < bills.length && ok) {
          console.log(bills[i]);
          var queryString = 'INSERT INTO all_expenses (tran_time,tran_type,store,item,in_out,amount,method,status,id,bus_id,misc) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
          var queryParams =
            [
              bills[i].tran_time,
              bills[i].tran_type,
              bills[i].store,
              bills[i].item,
              bills[i].in_out,
              bills[i].amount,
              bills[i].method,
              bills[i].status,
              bills[i].id,
              bills[i].bus_id,
              bills[i].misc
            ];
          db.query(queryString, queryParams, (error, results) => {
            if (error) {
              console.log(`什么鬼。。`, error);
              // console.log(`Failed to insert data to bills at id`, error);
            }
            else {
              console.log('inserted to All_Expenses')
            }
          });
          if (i === bills.length - 1) {

            writer.write("", 'utf-8', callback);
          } else {
            console.log("done")
          }
          i++;
        }
        if (i < bills.length) {
          writer.once('drain', writeFile)
        }
      }
      writeFile();
    })
}
// const writeStream = fs.createWriteStream('./color.csv')
const writeStream = "?";
// const line1 = 'product_id,color,img_group\n';
// writeStream.write(line1);

writeLine(writeStream, () => {
  console.log('write_by_color written for cassandra!')
})

var getRandomNonRepeatingColor = (colors) => {
  var idx = Math.floor(Math.random() * Math.floor(5));
  return colors[idx];
}
const checkMemoryNative = () => {
  console.log("Memory Usage: ", process.memoryUsage())
}
const printHeapStats = () => {
  console.log('Heap Status', v8.getHeapSpaceStatistics())
}



  // const db = require('./index')
  // const bills = wechat_bill;
  // const moment = require('moment');
  // const faker = require('faker');

  // const generateListings = function (callback) {
  //   for (let i = 1; i <= 3; i++) {
  //     var nightly_fee = Math.floor(Math.random() * (1300, 800 + 1) + 800);
  //     var queryString = 'INSERT INTO Listings (nightly_fee) VALUES (?)';
  //     let queryParams = [nightly_fee];

  //     // INSERT DATA TO DB;
  //     db.query(queryString, queryParams, (error, results) => {
  //       if (error) {
  //         console.log(`Failed to insert data to Listings`, error);
  //       } else {
  //         callback(i);
  //       }
  //     });
  //   }
  // }

  // // GENERATEE RESERVATION FOR EACH LISTINGS:
  // const generateReservations = function (listingID) {
  //   var dates = [];
  //   var totalBookings = Math.floor(Math.random() * (10 - 2) + 2);
  //   // console.log(listingID, totalBookings);

  //   for (let i = 0; i < totalBookings; i++) {
  //     // generate a random booked date between a range;
  //     var randomDate = faker.date.between('2020-08-01', '2021-08-01');
  //     var randomNum = faker.random.number({
  //       'min': 3,
  //       'max': 13
  //     });
  //     var check_in = moment(randomDate).format('YYYY-MM-DD');
  //     var check_out = moment(randomDate).add(randomNum, 'd').format('YYYY-MM-DD');

  //     dates.push([check_in, check_out]);
  //   }

  //   // Iterate over the dates array
  //   for (let i = 0; i < dates.length; i++) {
  //     var queryString = 'INSERT INTO Reservations (listing_id, check_in, check_out) VALUES (?, ?, ?)';
  //     var queryParams = [listingID, dates[i][0], dates[i][1]];
  //     db.query(queryString, queryParams, (error, results) => {
  //       if (error) {
  //         console.log(`Failed to insert data to Reservations at listing_id = ${listing_id}`, error);
  //       }
  //       // else {
  //       // console.log('inserted to Reservations')
  //       // }
  //     });
  //   }
  // }
  // // INVOKE FUNCTIONS:
  // generateListings(generateReservations);