const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const secretKey = "abcef";

const users = [];

const verifyToken = (req, res, next) => {
const token =req.headers.authorization;
if(!token) return res.status(401).send("Request Denied");

try{
    const verified=jwt.verify(token,secretKey);

    req.user=verified;
    next();
}
catch(error	){
    res.status(400).send("Invalid Token");
}

};

app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashPassword });
    console.log(users);

    res.status(201).send("user created successfully");
  } catch (error) {
    res.status(500).send("Error creating user");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);
    if (!user) return res.status(400).send("user not found");

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) return res.status(400).send("Invalid Password");

    const token = jwt.sign({ username: user.username }, secretKey);
    res.send({token});

  } catch (error) {
    res.status(500).send("Error Logging in");
  }
});

app.get('/home',verifyToken,(req,res)=>{
res.send(`${req.user.username}`)
})

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3001, () => console.log("Backend running in the port 3001"));
