const axios = require("axios");

const getNews = async (country) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}`;

    const response = await axios.get(url);

    return response.data.articles.slice(0, 5).map(article => ({
        title: article.title,
        url: article.url
    }));
};

module.exports = { getNews };
