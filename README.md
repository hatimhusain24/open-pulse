# Open Pulse

A live dashboard of free public data: weather and air quality, crypto and currency markets, earthquakes, the International Space Station, world economies, tech news and Wikipedia.

Everything runs in the visitor's browser. There is no server, no build step, no sign-up and no API key. The whole app is one file, `index.html`.

## What it shows

| View | Data | Refreshes |
|---|---|---|
| Overview | One card per area below | Follows each source |
| Weather & air | Current conditions, next 48 hours, week ahead, US AQI and pollutants for any place | 10 min (weather), 30 min (air) |
| Markets | Top 20 cryptocurrencies with 7-day charts, whole-market stats, a 30-currency converter and rate history | 2 min (crypto), hourly (rates) |
| Earthquakes | Map, sortable list and magnitude chart for the past hour, day, week or month | 2 min |
| Space station | Live ISS position every 5 seconds, its last 45 minutes and next 95 minutes of orbit | 5 s |
| Economy | 12 World Bank measures since 1990 for up to six countries or regions | 6 h |
| Tech news | Hacker News top, new, best, Ask HN and Show HN | 5 min |
| Wikipedia | Most-read articles, featured article, picture of the day, news, on this day | Hourly |

Visitors pick their own place and currency. Those choices, the theme and a few view settings are kept in their own browser's local storage and never leave it.

## Data sources

All free and keyless, called directly from the browser:

- [Open-Meteo](https://open-meteo.com/): forecast, geocoding and air quality (CC BY 4.0)
- [CoinGecko](https://www.coingecko.com/): crypto prices and market data (public API)
- [Frankfurter](https://frankfurter.dev/): European Central Bank reference rates
- [USGS Earthquake Hazards Program](https://earthquake.usgs.gov/earthquakes/feed/): GeoJSON feeds
- [Where the ISS at?](https://wheretheiss.at/): ISS position and ground track
- [World Bank Open Data](https://data.worldbank.org/): development indicators (CC BY 4.0)
- [Hacker News API](https://github.com/HackerNews/API)
- [Wikimedia Feed API](https://api.wikimedia.org/wiki/Feed_API)
- Map tiles © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors
- Libraries: [Chart.js](https://www.chartjs.org/) 4.4.1 and [Leaflet](https://leafletjs.com/) 1.9.4 from public CDNs

Free APIs have rate limits per visitor. If one is busy, its panel says so and tries again on its own.

## Run it locally

Any static file server works. With Python:

```bash
python -m http.server 8765
```

Then open http://localhost:8765.

## Host it

Upload `index.html` to any static host: GitHub Pages, Netlify, Cloudflare Pages or Vercel. No configuration is needed.

## Disclaimer

Figures are for information only and may be delayed. Crypto prices are not investment advice.
