import { config } from 'dotenv';
import mysql from 'mysql2'
import fs from 'fs'
import csvParser from 'csv-parser'


config();


const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASS;
const database = process.env.DB;
console.log(host,user,password,database)
// Create a database connection
// const connection = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASS,
//   database: process.env.DB,
// });
// // const connection = mysql.createConnection({
// //     host: '127.0.0.1',
// //     user: 'root',
// //     password: 'sql@123',
// //     database: 'expensesdb',
// //   });
  
//   // Connect to the database
//   connection.connect((err) => {
//     if (err) {
//       console.error('Error connecting to the database:', err);
//       return;
//     }
//     console.log('Connected to the database!');
//   }); 
  
  // // Read and process the CSV file
  // fs.createReadStream('template.csv')
  //   .pipe(csvParser())
  //   .on('data', (row) => {
  //     const expenseID = generateExpenseID();
  //     const sqlSelect = 'SELECT COUNT(*) AS count FROM transactions WHERE userID = ? AND Date = ? AND Amount = ? AND Category=? AND PayMethod=? AND Provider=?';
  //     const selectValues = [Object.values(row)[0], row.Date, row.Amount, row.Category, row.PayMethod, row.Provider];
  
  //     connection.query(sqlSelect, selectValues, (error, results, fields) => {
  //       if (error) {
  //         console.error('Error checking record existence:', error);
  //       } else {
  //         const recordCount = results[0].count;
  //         if (recordCount > 0) {
  //           console.log('Record already exists:', row);
  //         } 
  //         else {
  //           const sqlInsert = `INSERT INTO transactions (expenseID, userID, Date, Time, Amount, Category, PayMethod, Provider) VALUES (?, ?, ?, CURTIME(), ?, ?, ?, ?)`;
  //           const insertValues = [expenseID, Object.values(row)[0], row.Date, row.Amount, row.Category, row.PayMethod, row.Provider];

  //           connection.query(sqlInsert, insertValues, (error, results, fields) => {
  //             if (error) {
  //               console.error('Error inserting data:', error);
  //             } else {
  //               console.log('Record inserted:', row);
  //             }
  //           });
  //         }
  //       }
  //     });
  //   })
  // .on('end', () => {
  //   // Close the database connection once all data is inserted
  //   connection.end();
  // });

  // function generateExpenseID() {
  //   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   const numericPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  //   const alphabetPart = Array.from({ length: 2 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
  //   return alphabetPart + numericPart;
  // }