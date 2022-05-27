<script setup>

  import ForecastChart from './components/ForecastChart.vue'
  import 'chartjs-adapter-date-fns'

  import fcdata from './assets/json/openweather_forecast_20220512.json'
  import cwdata from './assets/json/openweather_weather_20220527.1.json'

  const data = fcdata.list.map( f => { return { "x": f.dt_txt, "y": f.main.feels_like  }; } )
  const city = fcdata.city.name
  const srise = new Date( fcdata.city.sunrise * 1000 ).toTimeString().slice(0, 5)
  const sset  = new Date( fcdata.city.sunset * 1000 ).toTimeString().slice(0, 5)
  const tzone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  console.log( { "x": new Date( cwdata.dt * 1000 ).toTimeString().slice(0,5), "y": cwdata.main.feels_like } )
  const chartData = { 
          datasets: [ 
            { 
              label: "forecast",
              data: data,
            },
            {
              label: "current",
              data: [ { "x": new Date( cwdata.dt * 1000 ), "y": cwdata.main.feels_like } ],
              backgroundColor: "#3293C7",
              borderColor: "#3293C7"
            } 
          ]
        }

  const chartOptions = {
          responsive: true,
          backgroundColor: "#f0f0f0",
          borderColor: "#f0f0f0",
          bounds: 'labels',
          borderWidth: 1,
          scales: {
            x: {
              type: 'time',
              time: {
                displayFormats: {
                  hour: "MM-dd--HH:mm"
                },
              }
            } 
          }
        }

</script>

<style>
  body { 
    background-color: #0f0f0f; 
    color: #f0f0ff;
  }

  #app {
    margin: auto;
    padding: 24px;
  }

  .chart-header {
    width: 100%;
  }

  .center {
    margin: auto;
    width: 50%;
  }

  .chart-title {
    font-size: 16px;
  }

  .block-img {
    margin: auto;
    max-width: 350px;
    min-width: 15%;
    max-height: 25vw;
    display: block;
  }

  div.spacer {
    margin: 1em;
  }

  div.chart-holder {
    position: relative;
    width: 90%;
    height: 90%;

  }

</style>

<template>
  <div class="chart-header">
    <img class="block-img" id="open-weather-logo" alt="openweather logo" src="./assets/openweather_logo_white_cropped.png">
    <div class="spacer" />
    <div class="chart-title">Forecast ({{ city }}):</div>
  </div>
  <div class="chart-holder">
    <ForecastChart :chart-data="chartData" :chart-options="chartOptions"/>
    <div> ☀: {{ srise }} ★: {{ sset }}  [{{ tzone }}]</div>
  </div>
    <!-- <div>{{ fcdata }}</div> -->
</template>
