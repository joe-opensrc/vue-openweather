<script setup>
  import { ref, computed, watch, watchEffect } from 'vue'
  import ForecastChart from '../components/ForecastChart.vue'
  import ToggleButton from '../components/ToggleButton.vue'
  import { fetchForecast, parseForecastResponse, refreshForecastChartData, defaultChartData, defaultChartOptions } from '../composables/openweatherApi.js'

  const props = defineProps({
      showChart: { 
        type: Boolean, 
        default: false 
      }

   })

  //var { data, city, srise, sset, tzone } = parseForecastResponse(fcdata)
  
  var showChart = ref( props.showChart )

  var chartData = ref( defaultChartData )
  var chartOptions = ref( defaultChartOptions )
  // var crefresh = ref(false)
  // const data = computed( () => { return chartData.value.datasets.length } ) 
  var city = ref("Somewhere...")
  var srise = ref(getTimeMiliEpoch(new Date(0)))
  var sset =  ref(getTimeMiliEpoch(new Date(0)))
  var tzone = ref(Intl.DateTimeFormat().resolvedOptions().timeZone)

  // function loog(x){
  //   console.log("loog: ", x)
  //   crefresh = !crefresh
  // }

  function getTimeMiliEpoch(dtime){
    return new Date( dtime * 1000 ).toTimeString().slice(0, 5)
  }

  async function refreshForecastChart() {

    /*
    if (skipCache) 
      owApi.__removeFilter(/forecast/) ?
      owApi.defaults.headers = {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      };
    */

    const resp = await fetchForecast()
    console.log("resp:", resp)
    
    const data = resp.list.map( f => { return { "x": f.dt_txt, "y": f.main.feels_like  }; } )
    // console.log("chartData: ", chartData )
    console.log("data :", data )
    chartData.value.datasets[0].data = data 
  

    // chartData.value.datasets[0].data = resp.list
    city.value  = resp.city.name
    srise.value = getTimeMiliEpoch( resp.city.sunrise )
    sset.value  = getTimeMiliEpoch( resp.city.sunset )
    tzone.value = resp.city.timezone / 3600

  }
 

  const buttonOptions = {
    selfReset: true
  } 

</script>
  

<style scoped>

  .chart-header {
    width: 100%;
  }

  .chart-title {
    font-size: 16px;
  }

  .chart-holder {
    position: relative;
    width: 90%;
    height: 90%;

  }

  .button-holder {
    display: flex;
  }

</style>

<template>
  <div class="chart-header">
    <div class="spacer" />
    <div class="chart-title">Forecast ({{ city }})</div>
    <div>☀: {{ srise }} ★: {{ sset }}  [{{ tzone }}]:</div>
    <div class="spacer" />
    <div class="button-holder">
      <ToggleButton button-label="DisplayChart" @button-value="(x) => (showChart = x)" />
      <ToggleButton button-label="RefreshChart" :button-options="buttonOptions" @click="refreshForecastChart" />
    </div>
  </div>
  <div class="chart-holder">
    <ForecastChart v-show="showChart" :chart-data="chartData" :chart-options="chartOptions"/>
  </div>
</template>
