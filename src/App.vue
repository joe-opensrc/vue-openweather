<script setup>

  import ForecastChart from './components/ForecastChart.vue'

  const fdata = { 
          labels: [ 'January', 'February', 'March' ],
          datasets: [ { data: [40, 20, 12] } ]
        }

  const copts = {
          responsive: true 
        }

</script>

<style>
  body { 
    background-color: #0f0f0f; 
    color: #f0f0ff;
  }
        
</style>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Forecast Charts:</h1>
    <ForecastChart :chart-data="fdata" :chart-options="copts"/>
</template>
