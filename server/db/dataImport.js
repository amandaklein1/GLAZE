
const db = require('./index.js');
const mongoose = require('mongoose');
const videos = require('./videoSchema.js');
const data = require('./exampleData.json');

const importData = () => {
  videos.create(data)
    .then(() => {
      console.log('success inserting data!');
    })
    .catch((err) => {
      console.error('error inserting data: ', err);
    });
};

importData();