const mysql = require("mysql2/promise");

class repository {
  async getConnection() {
    try {
      const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "smarthomes",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
      console.log("Connected to MySQL");
      return connection;
    } catch (error) {
      console.error("Error connecting to MySQL:", error.message);
      throw error;
    }
  }

  async queryExecutor(query, data) {
    try {
      const connection = await this.getConnection();
      const [rows, fields] = data
        ? await connection.execute(query, data)
        : await connection.execute(query);
      //console.log("Query Results from repository:", rows);
      connection.end();
      return rows;
    } catch (error) {
      console.error("Error executing query in repository:", error.message);
      return error;
    }
  }

// async readData(searchId) {
//   try {
//     const connection = await getConnection();
//     const [rows] = await connection.execute('SELECT * FROM Productdetails');
//     const data = new Map(rows.map((row) => [row.Id, row]));

//     const sb = [];
//     for (const [id, product] of data) {
//       if (product.productName.toLowerCase().startsWith(searchId)) {
//         sb.push(`<product><id>${product.Id}</id><productName>${product.productName}</productName></product>`);
//       }
//     }
//     return sb.join('');
//   } catch (error) {
//     console.error('Error reading data:', error.message);
//     throw error;
//   }
// }

}
module.exports = repository;
