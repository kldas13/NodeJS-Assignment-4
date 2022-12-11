const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
// your code goes here

//Add

app.post("/add", function (req, res) {
  // Prepare output in JSON format
  if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
    response = {
      status: "error",
      message: "Invalid Data Types",
    };
  } else if (req.body.num1 < -1e6 || req.body.num2 < -1e6) {
    response = {
      status: "error",
      message: "Underflow",
    };
  } else if (
    req.body.num1 > 1e6 ||
    req.body.num2 > 1e6 ||
    req.body.num2 + req.body.num1 > 1e6
  ) {
    response = {
      status: "error",
      message: "Overflow",
    };
  } else {
    response = {
      status: "success",
      message: "the sum of given two numbers",
      sum: req.body.num1 + req.body.num2,
    };
  }

  console.log(response);
  //   res.end(JSON.stringify(response));
  //   res.send(response);
  res.json(response);

  app.get("/add", (req, res) => {
    res.send(JSON.stringify(response));
  });
});

app.post("/sub", urlencodedParser, function (req, res) {
  // Prepare output in JSON format
  if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
    response = {
      status: "error",
      message: "Invalid Data Types",
    };
  } else if (req.body.num1 < -1e6 || req.body.num2 < -1e6) {
    response = {
      status: "error",
      message: "Underflow",
    };
  } else if (req.body.num1 > 1e6 || req.body.num2 > 1e6) {
    response = {
      status: "error",
      message: "Overflow",
    };
  } else {
    response = {
      status: "success",
      message: "the difference of given two numbers",
      difference: req.body.num1 - req.body.num2,
    };
  }

  console.log(response);
  //   res.end(JSON.stringify(response));
  res.json(response);

  app.get("/sub", (req, res) => {
    res.send(JSON.stringify(response));
  });
});

app.post("/multiply", urlencodedParser, function (req, res) {
  // Prepare output in JSON format
  if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
    response = {
      status: "error",
      message: "Invalid Data Types",
    };
  } else if (req.body.num1 < -1e6 || req.body.num2 < -1e6) {
    response = {
      status: "error",
      message: "Underflow",
    };
  } else if (req.body.num1 > 1e6 || req.body.num2 > 1e6) {
    response = {
      status: "error",
      message: "Overflow",
    };
  } else {
    response = {
      status: "success",
      message: "the product of given two numbers",
      result: req.body.num1 * req.body.num2,
    };
  }

  console.log(response);
  //   res.end(JSON.stringify(response));
  res.json(response);

  app.get("/multiply", (req, res) => {
    res.send(JSON.stringify(response));
  });
});

app.post("/divide", urlencodedParser, function (req, res) {
  // Prepare output in JSON format
  if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
    response = {
      status: "error",
      message: "Invalid Data Types",
    };
  } else if (req.body.num1 < -1e6 || req.body.num2 < -1e6) {
    response = {
      status: "error",
      message: "Underflow",
    };
  } else if (req.body.num1 > 1e6 || req.body.num2 > 1e6) {
    response = {
      status: "error",
      message: "Overflow",
    };
  } else if (req.body.num2 == 0) {
    response = {
      status: "error",
      message: "Cannot divide by zero",
    };
  } else {
    response = {
      status: "success",
      message: "the division of given two numbers",
      result: req.body.num1 / req.body.num2,
    };
  }

  console.log(response);
  //   res.end(JSON.stringify(response));
  res.json(response);

  app.get("/divide", (req, res) => {
    res.send(JSON.stringify(response));
  });
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

module.exports = app;
