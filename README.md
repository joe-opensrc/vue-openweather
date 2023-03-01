#### An OpenWeather API App

== Using Vue, Axios and ChartJS. == 

Fetches a 42hr Weather Forecast via the [OpenWeatherMap API](https://openweathermap.org/api)

(Requires a [free account](https://home.openweathermap.org/users/sign_up)).

###### Fetch:

```
git clone https://github.com/joe-opensrc/vue-openweather.git
cd vue-openweather
```

###### App needs Yarn:

Use virtualenv / venv to create pyvirtdir:

```
python -mvenv --copies ~/pyvirts/nodeenv
```

###### Use pip to install nodeenv:

```
source ~/pyvirts/nodeenv/bin/activate
pip install nodeenv
```

###### Use nodeenv to install npm:

```
nodeenv -n lts ~/novirts/vueopen
```

###### Use npm to install yarn:

```
source ~/novirts/vueopen/bin/activate
npm install -g yarn
```

###### Yarn should then work:

```
source ~/novirts/vueopen/bin/activate 
yarn --version
yarn serve
```

There's a script if you're feeling brave! [yarnVirt.sh](yarnVirt.sh)

###### API config sits in `.env.local`

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

Just remember to: `cp dot-env.local .env.local` </br>
and add valid data. (There's not much in the way of error checking ;))


##### Dockerised Version:

The following are examples that worked for me, YMMV! :D 

###### Build:

```docker
docker build -t myrepo/vue-openweather .
```

###### Run:

```docker
docker run --name vue-openweather --hostname vue-openweather -p 0.0.0.0:443:443 -d myrepo/vue-openweather
```
