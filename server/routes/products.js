var express = require('express');
var router = express.Router();
var dataPath = './landingData.json';
var fs = require('fs');


const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
  fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
          throw err;
      }

      callback(returnJson ? JSON.parse(data) : data);
  });
};

const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

  fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
          throw err;
      }

      callback();
  });
};

router.get('/', function(req, res, next) {

  var fs = require('fs');
  fs.readFile('./landingData.json', 'utf8', function (err, data) {
   if (err) throw err;
    data = JSON.parse(data);
    res.send(data);
  });

 });

  router.favUpdateInProducts =(productId,favState)=>{
    readFile(data =>{
      data[productId.toString()].fav = favState;    
      writeFile(JSON.stringify(data, null, 2), () => {
          
      });
    
    
    },true)
 }
 

module.exports = router;
