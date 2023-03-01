#### An OpenWeather API App

== Using Vue, Axios and ChartJS. == 

Fetches a 42hr Weather Forecast via the [OpenWeatherMap API](https://openweathermap.org/api)

(Requires a free account).

Fetch:
```
git clone https://github.com/joe-opensrc/vue-openweather.git
cd vue-openweather
```

Development is via yarn:

Use virtualenv / venv to install nodeenv:
`python -mvenv --copies ~/pyvirts/nodeenv`

Use nodeenv to install node/yarn:
`source ~/pyvirts/nodeenv/bin/activate`

Use npm to install yarn:
`npm install -g yarn`

Yarn then works, e.g.:

`yarn serve`

There's a script if you're feeling brave!
[yarnVirt.sh](yarnVirt.sh)

API config sits in `.env.local`

You need 3 bits of info: 

- API ID / Key
- Country Code 
- City Name 

There's an example: [dot-env.local](dot-env.local)
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
