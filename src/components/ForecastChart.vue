<script setup>

  import { defineProps } from 'vue'
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

  const props = defineProps({
          chartData: Object
        }) 

</script> 

<template>
  <h>FOO</h><br />
  <h>BAR</h><br />
  <Line :chart-data="props.chartData" />
</template>
