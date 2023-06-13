import express from "express";
import { router } from "./routes";
import cookieParser from "cookie-parser";
import session from "cookie-session";

const app = express();
const port = 3333;

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(
  session({
    name: "session",
    secret: "vitin-careca",
    secure: true,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  })
);

app.use(router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
