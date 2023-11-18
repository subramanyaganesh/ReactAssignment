const repository = require("../repository/repositoryMain");


const axios = require("axios");

class controller {
  constructor() {
    this.repository = new repository();
   
  }

  async getFromDatabase(res, query) {
    try {
      console.log("This answer for getSpecificProduct", query);
      const rows = await this.repository.queryExecutor(query);
      res.status(200).send(rows);
    } catch (error) {
      console.error("Error executing query:", error.message);
      res.status(500).send("Error executing query");
    }
  }

  async deleteFromDatabase(res, productId) {
    try {
      const rows = await this.repository.queryExecutor(
        "delete from Productdetails where Id=?",
        [productId]
      );
      res.status(200).send(rows);
    } catch (error) {
      console.error("Error executing query:", error.message);
      res.status(500).send("Error executing query");
    }
  }

  async addToDatabase(res, data) {
    try {
      const value = [
        `${data.ProductType}`,
        `${data.Id}`,
        `${data.productName}`,
        `${data.productPrice}`,
        `${data.productImage}`,
        `${data.productManufacturer}`,
        `${data.productCondition}`,
        `${data.productDiscount}`,
      ];
      const results = await this.repository.queryExecutor(
        "INSERT INTO  Productdetails(ProductType,Id,productName,productPrice,productImage,productManufacturer,productCondition,productDiscount) VALUES (?,?,?,?,?,?,?,?);",
        value
      );
      res.status(201).send(results);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async updateToDatabase(res, data) {
    try {
      const updateColumns = Object.keys(data)
        .filter((column) => column !== "Id" && column !== "description")
        .map((column) => `${column} = ?`)
        .join(", ");
      const updateValues = [
        ...Object.values(data).filter(
          (value) => value !== data.Id && value !== data.description
        ),
        data.Id,
      ];
      const results = await this.repository.queryExecutor(
        `UPDATE Productdetails SET ${updateColumns} WHERE Id = ?`,
        updateValues
      );
      res.status(201).send(results);
    } catch (error) {
      throw error;
    }
  }

  async addOrdersToDatabase(res, data) {
    try {
      const insertPromises = data.arrays.map(async (element, index) => {
        const queryJoined = `INSERT INTO customerOrders(OrderId,UserName,OrderName,OrderPrice,userAddress,creditCardNo,custId,storeId,purchaseDate,shipDate,shippingCost,productId,discount,category,storeStreet,storeState,storeZip,storeCity) VALUES (${
          data.OrderId
        },'${data.userName}','${element.productName}',${
          element.productPrice
        },'${data.userAddress}','${data.creditCardNo}',${5},${data.storeId},'${
          data.purchaseDate
        }','${data.shipDate}',${data.shippingCost},'${element.Id}',${
          element.productDiscount
        },'${element.ProductType}','${data.storeStreet}','${
          data.storeState
        }','${data.storeZip}','${data.storeCity}');`;
        console.log(index, queryJoined);
        return this.repository.queryExecutor(queryJoined);
      });

      await Promise.all(insertPromises);

      res
        .status(201)
        .json({ success: true, message: "Orders added to the database." });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  }

  // async getAutoComplete(res, query) {
  // try {
  //   if (!searchId) {
  //     res.status(400).send('Bad Request: Missing searchId');
  //     return;
  //   }

  //   if (action === 'complete') {
  //     const result = await this.repository.readData(searchId.trim().toLowerCase());
  //     res.type('text/xml').send(`<products>${result}</products>`);
  //   } else if (action === 'lookup') {
  //     const connection = await this.repository.getConnection();
  //     const [rows] =await this.repository.connection.execute('SELECT * FROM Productdetails WHERE Id = ?', [searchId.trim()]);
  //     if (rows.length > 0) {
  //       res.json(rows[0]);
  //     } else {
  //       res.status(404).send('Product not found');
  //     }
  //   } else {
  //     res.status(400).send('Bad Request: Invalid action');
  //   }
  // } catch (error) {
  //   res.status(500).send('Internal Server Error');
  // }
  // }

  
}
module.exports = controller;
