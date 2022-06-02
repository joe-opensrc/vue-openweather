<script setup>
  import WeatherChart from './components/WeatherChart.vue'
</script>

<style>
  body { 
    background-color: #0f0f0f; 
    color: #f0f0ff;
  }

  #app {
    margin: auto;
    padding: 24px;
    padding-left: 10px;
  }

  .center {
    margin: auto;
    width: 50%;
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
  <img class="block-img" id="open-weather-logo" alt="openweather logo" src="./assets/openweather_logo_white_cropped.png">
  <WeatherChart /> 

</template>
