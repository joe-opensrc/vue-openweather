<script setup>

  import ForecastChart from './components/ForecastChart.vue'

  const chartData = { 
          labels: [ 'January', 'February', 'March' ],
          datasets: [ { data: [40, 20, 12] } ]
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
