import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import {notFound,errorHandler} from './middleware/error.middleware.js'
import connectDB from "./config/db.js";

//import userRouter 
import productRouter from "./routes/product.router.js";
import userRouter from './routes/user.router.js'
dotenv.config();

connectDB();

const app = express();

//regular middlewares
app.use(express.json())

//mount routes
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);



//custom middleware
app.use(notFound)
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold));
