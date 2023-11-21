require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;

// const createTableQuery = `
//   CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     first_name varchar(255),
//     last_name varchar(255),
//     age int,
//     active BOOLEAN NOT NULL DEFAULT true
//   );
// `;

// const createOrdersTableQuery = `
//   CREATE TABLE orders (
//     id SERIAL PRIMARY KEY,
//     price FLOAT,
//     date TIMESTAMP,
//     user_id INT,
//     FOREIGN KEY (user_id) REFERENCES users(id)
//   );
// `;

// // Using the pool to execute the create table command
// pool.query(createTableQuery, (error, result) => {
//   if (error) {
//     console.error('Error creating table:', error);
//   } else {
//     console.log('Table users created successfully');
//   }

//   // Release the client back to the pool
//   pool
//     .end()
//     .then(() => {
//       console.log('Pool has ended');
//     })
//     .catch((err) => {
//       console.error('Error ending the pool:', err);
//     });
// });

// // Using the pool to execute the create table command
// pool.query(createOrdersTableQuery, (error, result) => {
//   if (error) {
//     console.error('Error creating orders table:', error);
//   } else {
//     console.log('Table orders created successfully');
//   }

//   // Release the client back to the pool
//   pool
//     .end()
//     .then(() => {
//       console.log('Pool has ended');
//     })
//     .catch((err) => {
//       console.error('Error ending the pool:', err);
//     });
// });

// const insertUserQuery = `
//   INSERT INTO users (first_name, last_name, age)
//   VALUES ('John', 'Doe', 18);
// `;

// const insertUserQuery = `
//   INSERT INTO users (first_name, last_name, age)
//   VALUES ('Bob', 'Dylan', 30);
// `;
// const insertUserQuery = `
//   INSERT INTO users (first_name, last_name, age)
//   VALUES ('Jane', 'Doe', 25);
// `;

// // Using the pool to execute the insert query
// pool.query(insertUserQuery, (error, result) => {
//   if (error) {
//     console.error('Error inserting user:', error);
//   } else {
//     console.log('User inserted successfully');
//   }

//   // Release the client back to the pool
//   pool
//     .end()
//     .then(() => {
//       console.log('Pool has ended');
//     })
//     .catch((err) => {
//       console.error('Error ending the pool:', err);
//     });
// });

// const insertOrderQuery = `
//   INSERT INTO orders (price, date, user_id)
//   VALUES (18, '2021-01-01 00:00:00', 1);
// `;
// const insertOrderQuery = `
//   INSERT INTO orders (price, date, user_id)
//   VALUES (18, '2021-01-02 04:00:00', 1);
// `;
// const insertOrderQuery = `
//   INSERT INTO orders (price, date, user_id)
//   VALUES (18, '2021-01-03 05:00:00', 2);
// `;
// const insertOrderQuery = `
//   INSERT INTO orders (price, date, user_id)
//   VALUES (18, '2021-01-04 06:00:00', 2);
// `;

// Using the pool to execute the insert query
// pool.query(insertOrderQuery, (error, result) => {
//   if (error) {
//     console.error('Error inserting order:', error);
//   } else {
//     console.log('Order inserted successfully');
//   }

//   // Release the client back to the pool
//   pool
//     .end()
//     .then(() => {
//       console.log('Pool has ended');
//     })
//     .catch((err) => {
//       console.error('Error ending the pool:', err);
//     });
// });
