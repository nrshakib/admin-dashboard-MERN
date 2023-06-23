import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import clientRoutes from "./Routes/client";
import generalRoutes from "./Routes/general";
import managementRoutes from "./Routes/management";
import salesRoutes from "./Routes/sales";

//Configuration

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Routes

app.use("/client,clientRoutes");
app.use("/general,generalRoutes");
app.use("/management,managementRoutes");
app.use("/sales,salesRoutes");
