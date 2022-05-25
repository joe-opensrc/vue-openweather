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

  img {
    width: 100%;
    height: auto;
    margin: auto;
  }

</style>

<template>
    <img id="openweatherLogo" alt="openweather logo" src="./assets/openweather_logo_white_cropped.png">
    <h2>Forecast:</h2>
    <ForecastChart :chart-data="chartData" :chart-options="chartOptions"/>
    <div>{{ fcdata }}</div>;
</template>
