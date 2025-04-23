import express from "express"
import cors from "cors"
import { corsConfig } from "./config/corsConfig.js"
const app = express()

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
