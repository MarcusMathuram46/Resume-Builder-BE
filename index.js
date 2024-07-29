const express=require("express");
const cors = require("cors")
const mongoose=require("mongoose");
const { MONGODB_URL } = require("./config.js");
const { PORT } = require("./config.js");
const userRoute = require("./Routes/userRoute.js");

const app = express();

mongoose.set('strictQuery', false);
console.log('connecting to MONGODB...');
mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log('connected to MONGODB...');
        app.listen(PORT, () => {
            console.log(`Server is running http://localhost:${PORT}`);
        });
    });

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoute);