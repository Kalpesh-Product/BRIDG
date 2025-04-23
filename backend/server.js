import express from "express"
import cors from "cors"
import { corsConfig } from "./config/corsConfig.js"
import errorHandler from "./middleware/errorHandler.js"
const app = express()
import { config } from "dotenv"

config()

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000


app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
