import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./DataBase/config.js";
import authrouter from "./Routers/authRouter.js";
import userrouter from "./Routers/userRouter.js";
import postrouter from "./Routers/postRouter.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

//error handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || "An error occurred in Internal Server";
  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message,
  });
});

connectDB();

app.get("/", (req, res) => {
  res.send("API runing");
});

//api routers
app.use("/api/auth", authrouter);
app.use("/api/user", userrouter);
app.use("/api/post",postrouter)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port `);
});
