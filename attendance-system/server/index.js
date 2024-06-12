const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const secretKey = "abcef";

let users = [
  {
    username: "neethi",
    password: "pwd1",
  },
  {
    username: "hari",
    password: "pwd2",
  },
  {
    username: "subi",
    password: "pwd3",
  },
  {
    username: "inithi",
    password: "pwd4",
  },
];

const hashPasswords = async () => {
  // Hash passwords asynchronously and update users array
  users = await Promise.all(users.map(async (user) => ({
    ...user,
    password: await bcrypt.hash(user.password, 10),
  })));
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send("Request Denied");

  try {
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);
    if (!user) return res.status(400).send("User not found");

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) return res.status(400).send("Invalid Password");

    const token = jwt.sign({ username: user.username }, secretKey);
    res.send({ token });
  } catch (error) {
    res.status(500).send("Error Logging in");
  }
});

app.get("/home", verifyToken, (req, res) => {
  res.send(`${req.user.username}`);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

// Function to start the server
const startServer = async () => {
  await hashPasswords(); // Ensure passwords are hashed before starting the server
  app.listen(3001, () => console.log("Backend running in the port 3001"));
};

// Start the server
startServer().catch((error) => {
  console.error("Failed to start server:", error);
});
