const express = require("express");
const path = require("path");
require("dotenv").config();

const weatherRoute = require("./routes/weather");
const newsRoute = require("./routes/news");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/weather", weatherRoute);
app.use("/api/news", newsRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
