var express = require('express');
var router = express.Router();
var fs = require('fs');
var productRouter = require('./products.js');

const dataPath = './favouritesData.json';

    // helper methods
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

    // READ
    router.get('/', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // CREATE
    router.post('/', (req, res) => {
        let key = req.body.data.id;
        readFile(data => {
            
       
            // add the new favourite
            data[key.toString()] = req.body.data;
            data[key.toString()].fav = true;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('Favourite added');
            });
        }, 
        true);

        productRouter.favUpdateInProducts(key,true);
    

    });


    // DELETE
    router.delete('/:id', (req, res) => {

        const key = req.params["id"];
        readFile(data => {
            
            delete data[key];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('SUCCESS');
            });
        },
            true);

        productRouter.favUpdateInProducts(key,false);
    });


module.exports = router;