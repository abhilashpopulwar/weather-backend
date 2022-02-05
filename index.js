"use strict"

const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening in port ${PORT}`))
var cors = require('cors')
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
console.log('Node. js Express server is running on port 3000... ');
app.get('/v1/weather', (req, res) => res.json({
  "coord": {
    "lon": -123.262,
    "lat": 44.5646
  },
  "weather": [{
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
  }],
  "base": "stations",
  "main": {
    "temp": 280.21,
    "feels_like": 280.21,
    "temp_min": 279.18,
    "temp_max": 285.07,
    "pressure": 1024,
    "humidity": 92
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.45,
    "deg": 45,
    "gust": 0.45
  },
  "clouds": {
    "all": 100
  },
  "dt": 1642283492,
  "sys": {
    "type": 2,
    "id": 2040223,
    "country": "US",
    "sunrise": 1642261568,
    "sunset": 1642294710
  },
  "timezone": -28800,
  "id": 5720727,
  "name": "Corvallis",
  "cod": 200
}));

app.get('/v1/hello', (req, res) => res.json({
  "greeting": "Hello it's Abhilash"
}));

app.post('/v1/auth', function (req, res) {
  if (req.body.username == 'Abhi') {
    if (req.body.password == 'password') {
      res.json({
        "access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFiaGlsYXNoIiwicGFzc3dvcmQiOiJwYXNzd29yZCJ9.QEEzlu1LZbcQpRKrgorrJX81v_zoyWmO44D8slF-LNU",
        "expires": new Date()
      })
    }
  }
});