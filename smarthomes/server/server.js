const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const controller = require("./Controllers/Controller");
const newcontroller = require("./Controllers/MongoController");

const app = express();
const port = 9000;

const controllers = new controller();
const mongocontrollers = new newcontroller();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/getProducts", (req, res) => {
  const { search } = req.query;
  controllers.getFromDatabase(
    res,
    `SELECT * FROM Productdetails WHERE productName LIKE '${search}%';`
  );
});

app.get("/api/getSpecificProduct", (req, res) => {
  console.log("This is get call for getSpecificProduct", req.query);
  const { id } = req.query;
  return controllers.getFromDatabase(
    res,
    `SELECT * FROM Productdetails WHERE Id='${id}';`
  );
});

app.get("/api/getDoorBells", (req, res) => {
  controllers.getFromDatabase(
    res,
    `select * from Productdetails where ProductType='doorBells';`
  );
});
app.get("/api/getDoorLocks", (req, res) => {
  controllers.getFromDatabase(
    res,
    `select * from Productdetails where ProductType='doorLocks';`
  );
});
app.get("/api/getSpeakers", (req, res) => {
  controllers.getFromDatabase(
    res,
    `select * from Productdetails where ProductType='speakers';`
  );
});
app.get("/api/getLightings", (req, res) => {
  controllers.getFromDatabase(
    res,
    `select * from Productdetails where ProductType='lightings';`
  );
});

app.get("/api/getThermostats", (req, res) => {
  controllers.getFromDatabase(
    res,
    `select * from Productdetails where ProductType='thermostats';`
  );
});

app.post("/api/addCustomerProducts", (req, res) => {
  console.log("This is Customer Products", req.body);
  const formData = req.body;
  controllers.addOrdersToDatabase(res, formData);
});

app.post("/api/addProduct", (req, res) => {
  console.log("This is post call for addProduct", req.body);
  const formData = req.body;
  controllers.addToDatabase(res, formData);
});

app.delete("/api/deleteProduct", (req, res) => {
  console.log("This is delete call for deleteProduct", req.query);
  const productId = req.query.id;
  console.log("Product ID to delete:", productId);
  controllers.deleteFromDatabase(res, productId);
});

app.put("/api/updateProduct", (req, res) => {
  console.log("This is put call for updateProduct", req.body);
  const formData = req.body;
  controllers.updateToDatabase(res, formData);
});

//doing this is posty as in get i cannot pass the entire object
app.post("/api/ViewReview", (req, res) => {
  mongocontrollers.getReviewsFromDatabase(res, req.body);
});

app.post("/api/WriteReview", (req, res) => {
  console.log("This is post call for WriteReview", req.body);
  mongocontrollers.setReviewsToDatabase(res, req.body);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
