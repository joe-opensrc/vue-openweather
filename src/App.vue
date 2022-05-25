<script setup>

  import ForecastChart from './components/ForecastChart.vue'
  import fcdata from './assets/json/openweather_forecast_20220512.json'

  const labels = fcdata.list.map( f => f.dt_txt )
  const data   = fcdata.list.map( f => f.main.feels_like )

  console.log(labels)
  console.log(data)

  const chartData = { 
          labels: labels,
          datasets: [ 
            { 
              label: "feels_like",
              data: data,
            } 
          ]
        }

  const chartOptions = {
          responsive: true,
          backgroundColor: "#f0f0f0",
          borderColor: "#f0f0f0"
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

</style>

<template>
  <div class="chart-header">
    <img class="block-img" id="open-weather-logo" alt="openweather logo" src="./assets/openweather_logo_white_cropped.png">
    <div class="spacer" />
    <div class="chart-title">Forecast:</div>
  </div>
    <ForecastChart :chart-data="chartData" :chart-options="chartOptions"/>
    <!-- <div>{{ fcdata }}</div> -->
</template>
