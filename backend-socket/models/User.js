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
  // query fod4 de mais pra criar caso não exista, atualizar se existir para reativo.