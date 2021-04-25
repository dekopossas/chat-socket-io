const connection = require('./connection');

const createOrUpdate = (username, lastSignedIn) => connection().then((db) => 
  db.collection('users').updateOne(
    { username },
    { $set: { lastSignedIn } },
    { upsert: true }
  ));

  module.exports = {
    createOrUpdate,
  };
  // query fod4 de mais pra criar caso não exista, atualizar se existir para reativo.