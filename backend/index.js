const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cookiesParser = require("cookie-parser");
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const app = express();
const cors = require('cors');
const connectToDb = require('./db/db')



connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());


const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.send("express is runnig fine ");
})

app.use('/api/users', userRoutes);
app.use('/api/captains', captainRoutes);

app.listen(PORT, function () {
    console.log(`server is runnig at the port ${PORT}`)
})