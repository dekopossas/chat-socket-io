const connection = require('./connection');

const creatOrUpdate = (username, lastSigned) => connection
  .then((db) => db.updateOne(
    { username },
    { $set: { lastSigned } },
    { upsert: true },
  ));

  module.exports = {
    creatOrUpdate,
  };
  