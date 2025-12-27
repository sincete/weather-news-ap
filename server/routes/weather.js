const express = require("express");
const router = express.Router();
const { getWeather } = require("../services/weatherService");

router.get("/:city", async (req, res) => {
    try {
        const data = await getWeather(req.params.city);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Weather not found" });
    }
});

module.exports = router;
