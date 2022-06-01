<script setup>

  import ForecastChart from '../components/ForecastChart.vue'
  import ToggleButton from '../components/ToggleButton.vue'
  import 'chartjs-adapter-date-fns'

  import fcdata from '../assets/json/openweather_forecast_20220512.json'
  import cwdata from '../assets/json/openweather_weather_20220527.1.json'

  const data = fcdata.list.map( f => { return { "x": f.dt_txt, "y": f.main.feels_like  }; } )
  const city = fcdata.city.name
  const srise = new Date( fcdata.city.sunrise * 1000 ).toTimeString().slice(0, 5)
  const sset  = new Date( fcdata.city.sunset * 1000 ).toTimeString().slice(0, 5)
  const tzone = Intl.DateTimeFormat().resolvedOptions().timeZone;

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

  const props = defineProps({
      showChart: { type: Boolean, default: false }
   })

  import { ref } from 'vue'
  var showChart = ref( props.showChart )

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

</style>

<template>
  <div class="chart-header">
    <div class="spacer" />
    <div class="chart-title">Forecast ({{ city }}):</div>
  </div>
  <div class="chart-holder">
    <ToggleButton button-label="DisplayChart" @button-value="(x) => (showChart = x)" />
    <ForecastChart v-show="showChart" :chart-data="chartData" :chart-options="chartOptions"/>
    <div> ☀: {{ srise }} ★: {{ sset }}  [{{ tzone }}]</div>
  </div>
    <!-- <div>{{ fcdata }}</div> -->
</template>
