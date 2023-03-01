#### An OpenWeather API App

== Using Vue, Axios and ChartJS. == 

Fetches a 42hr Weather Forecast via the [OpenWeatherMap API](https://openweathermap.org/api)

(Requires a free account).



Development via yarn:

`yarn serve`



API config sits in `.env.local`

You need 3 bits of info: 

- API ID / Key
- Country Code 
- City Name 

e.g.,

```ini
VUE_APP_OWM_APPID=icn5g4sjl8x3ceej8y9drsa0qfdvc0tv
VUE_APP_OWM_GEO_CC="CH"
VUE_APP_OWM_GEO_CN="Zurich"
```

Dockerised Version:

The following are examples that worked for me, YMMV! :D 



Build:

```docker
docker build -t myrepo/vue-openweather .
```

Run:

```docker
docker run --name vue-openweather --hostname vue-openweather -p 0.0.0.0:443:443 -d myrepo/vue-openweather
```
