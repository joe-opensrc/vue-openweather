<script setup>

  import { defineProps } from 'vue'
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

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

</script> 

<template>
  <Line :id="props.chartId" :class="props.chartId" :chart-data="props.chartData" :chart-options="props.chartOptions" />
</template>
