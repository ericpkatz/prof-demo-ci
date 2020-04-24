const { Client } = require('pg');

const client = new Client(process.env.DATABAS_URL || 'postgres://localhost/acme_users_db');

client.connect();

const getUsers = async()=> {
  return (await client.query('select * from users;')).rows;
};

const sync = async()=> {
  const SQL = `
    DROP TABLE IF EXISTS users;
    CREATE TABLE users(
      name VARCHAR(100)
    );
    INSERT INTO users(name) values('lucy');
    INSERT INTO users(name) values('moe');
  `;
  await client.query(SQL);
};


module.exports = {
  getUsers,
  sync
};
