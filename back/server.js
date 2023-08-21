const express = require("express");
const app = express();
const cors = require("cors");
const weatherRoutes = require("./routes/weather");
app.use(cors());

app.use(express.json())

app.use("/weather", weatherRoutes)

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});