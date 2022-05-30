<script setup>

  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, TimeScale } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, TimeScale)

  const props = defineProps({
          chartId: {
            type: String,
            default: 'forecast-chart'
          },
          chartData: { 
            type: Object
          },
          chartOptions: {
            type: Object
          }

        }) 

  import { fetchForecast } from '../composables/openweatherApi.js'
  import { ref, watch } from 'vue'

  var data = ref(props.chartData)
  var crefresh = ref(false)

  watch( crefresh, async function(){

    try {
        const fcdata = await fetchForecast()
        const data = fcdata.list.map( f => { return { "x": f.dt_txt, "y": f.main.feels_like  }; } )
        const city = fcdata.city.name
        const srise = new Date( fcdata.city.sunrise * 1000 ).toTimeString().slice(0, 5)
        const sset  = new Date( fcdata.city.sunset * 1000 ).toTimeString().slice(0, 5)
        console.log( fcdata, data, city, srise, sset )
    } catch (error) {
        console.log("Error! Could not reach the API." + error)
    }
  
  })

</script> 

<style scoped>
  .button-area {
    display: flex;
    justify-content: space-between;
  }

  .button {
    min-width: 60px;
    background-color: #3f3f3f; 
    margin: 10px;
    padding: 10px;
    text-align: center;
    border-radius: 14px;
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
 
</style>

<template>
    <div class="button-area">
      <div class="button" @click="crefresh = !crefresh">
        foo: {{ crefresh }}
      </div>  
    </div>
    <Line v-show="crefresh" :id="props.chartId" :class="props.chartId" :chart-data="data" :chart-options="props.chartOptions" />
</template>
