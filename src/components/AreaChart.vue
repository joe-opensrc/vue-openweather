<script setup>
  /* eslint-disable */
  import * as d3 from 'd3'
  import * as acb from  '../libs/d3/areaChartBasic.js'

  const dats = [0,1,2,3,4]

  const svg = d3.select(".areaChart")     //.append("path").datum(datums) //.attr("fill", "#cce5df")
  const x = d3.scaleTime().domain(d3.extent(dats)).range([0,100])
  x.call(d3.axisBottom(x))

  const line = d3.line()
  line.x = 


  console.log(x)
// eslint-disable-next-line
// const datums ="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" 
//  const svg = d3.select(".areaChart").append("path").datum(datums) //.attr("fill", "#cce5df")
//  d3.scaleTime().domain()
//  console.log(svg)

</script>

<template>
  <div> 
    <svg class="areaChart" viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg">
      <path>
    </svg>
  </div>
</template>

<style>
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
    border-radius: 20px;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
</style>
