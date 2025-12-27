Weather & News App
Project Description

This is a web application that shows current weather and top news for a selected city.
All API requests are performed on the server-side, ensuring a clean architecture and secure API keys.

Technologies Used

Backend: Node.js, Express.js, Axios

Frontend: HTML, CSS, JavaScript

APIs: OpenWeather API (weather), News API (news)

Other: dotenv for storing API keys

Installation & Setup

Clone the repository:
git clone <your-repo-url>

Navigate to the project folder:
cd weather-news-app

Install dependencies:
npm install

Create a .env file in the root folder and add your API keys:
PORT=3000
WEATHER_API_KEY=your_openweather_key
NEWS_API_KEY=your_newsapi_key

Start the server:
node server/index.js

Open your browser at:
http://localhost:3000

How to Use

Enter a city name in the input field.

Click the Search button.

The application will display:

Weather information:

Temperature

Feels like

Weather description

Wind speed

Country code

Rain volume (last 3 hours)

Top 5 news articles for the selected country

