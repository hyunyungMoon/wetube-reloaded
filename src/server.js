import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
  console.log("i will reponse");
  return res.send("hello home");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 😊`);

app.listen(PORT, handleListening);