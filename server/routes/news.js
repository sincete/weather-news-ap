const express = require("express");
const router = express.Router();
const { getNews } = require("../services/newsService");

router.get("/:country", async (req, res) => {
    try {
        const news = await getNews(req.params.country);
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: "News not found" });
    }
});

module.exports = router;
