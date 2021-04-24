const connection = require('./connection');

const createOrUpdate = (username, lastSigned) => connection()
  .then((db) => db.collection('user').updateOne(
    { username },
    { $set: { lastSigned } },
    { upsert: true },
  ));

  module.exports = {
    createOrUpdate,
  };
  // query fod4 de mais pra criar caso não exista, atualizar se existir para reativo.