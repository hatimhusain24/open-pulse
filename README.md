# Open Pulse

A live dashboard of free public data: weather, air quality, crypto and currency markets, earthquakes and natural events, the International Space Station, world economies, tech news and Wikipedia.

Everything runs in the visitor's browser. There is no server, no build step, no sign-up and no API key. The app is one page, `index.html`, plus the files that let it install and work offline.

## What it shows

| View | Data | Refreshes |
|---|---|---|
| Overview | A daily briefing and one card per area | Follows each source |
| My dashboard | The cards you pin, in your order, plus alerts | Follows each source |
| Weather | Current conditions, next 48 hours, week ahead, and this week against the 1991–2020 normal | 10 min |
| Air quality | Pollutant breakdown, best time to go outside, 5-day forecast, up to 8 places compared, 3-month calendar | 30 min (15 min for places) |
| Markets | Top 20 cryptocurrencies with 7-day charts, whole-market stats, a 30-currency converter and rate history | 2 min (crypto), hourly (rates) |
| Earth events | Earthquakes (map, list, magnitude chart) and NASA's open wildfires, storms, volcanoes and ice events | 2 min (quakes), 30 min (events) |
| Space station | Live ISS position every 5 seconds, its last 45 minutes and next 95 minutes of orbit | 5 s |
| Economy | 12 World Bank measures since 1990 for up to six countries or regions | 6 h |
| Tech news | Hacker News top, new, best, Ask HN and Show HN | 5 min |
| Wikipedia | Most-read articles, featured article, picture of the day, news, on this day | Hourly |

## Features

- **My dashboard:** pin any card from any page, reorder by dragging or with the arrow buttons.
- **Best time to go outside:** the two daylight hours with the cleanest air, ruling out likely rain, very high UV and extreme heat.
- **Alerts** while a tab is open: air quality above a limit, a strong earthquake, or a big price move. Shown on the page and as browser notifications if allowed.
- **Share links:** the Share button copies a link that opens the same page for the same place, e.g. `?place=Delhi&lat=28.6139&lon=77.209#air`. `?city=London` also works.
- **Install as an app** on phone or desktop, and see the last saved data when offline.

Visitors' choices (place, currency, saved places, pinned cards, alerts, theme) stay in their own browser's local storage and never leave it. "Use my location" rounds the position to about 1 km.

## Data sources

All free and keyless, called directly from the browser:

- [Open-Meteo](https://open-meteo.com/): forecast, geocoding, air quality (CAMS) and historical weather (ERA5) (CC BY 4.0)
- [NASA EONET](https://eonet.gsfc.nasa.gov/): open natural events
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

Upload all the files to any static host: GitHub Pages, Netlify, Cloudflare Pages or Vercel. No configuration is needed.

## Disclaimer

Figures are for information only and may be delayed. Crypto prices are not investment advice.
