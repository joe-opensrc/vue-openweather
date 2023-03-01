import axios from 'axios'
import wrapper from 'axios-cache-plugin'
import 'chartjs-adapter-date-fns'

export { owApi }

const owApi = wrapper(axios, {
  maxCacheSize: 15,
  ttl: 10800000 // 3 hours
  
})

export async function fetchGeoLoc(country=process.env.VUE_APP_OWM_GEO_CC,city=process.env.VUE_APP_OWM_GEO_CN){
  // console.log( city + ",," + country )
  const resp = await owApi({
    url: 'https://api.openweathermap.org/geo/1.0/direct',
    method: 'get',
    params: { 
      appid: process.env.VUE_APP_OWM_APPID, 
      q: city + ",," + country,
      limit: 1
    }
  }).catch(err => {
    console.log( err.toJSON() )
    return err.code
  })

  // TODO: need to setup an error messaging system
  // for now, request data of McMurdo Station
  if( resp.data.length == 0 ){
    return{
      lat: -77.8499966,
      lon: 166.666664
    }
  }else{
    return { 
      lat: resp.data[0].lat, 
      lon: resp.data[0].lon 
    }
  }
}

// no filter, i.e., don't cache
export async function fetchCurrent(){
  const resp = await owApi({
    url: 'https://api.openweathermap.org/data/2.5/weather',
      method: 'get',
      params: {
          appid: process.env.VUE_APP_OWM_APPID, ,
          units: "metric",
          lat: 41.232078,
          lon: 1.795869,
      }
  })
  return resp.data
}

// add try/catch
owApi.__addFilter(/forecast/)
export async function fetchForecast(){
  const resp = await owApi({
    url: 'https://api.openweathermap.org/data/2.5/forecast',
      method: 'get',
      params: {
          appid: process.env.VUE_APP_OWM_APPID, ,
          units: "metric",
          lat: 41.232078,
          lon: 1.795869,
          cnt: 14,
      }
  })
  return resp.data
}


export function parseForecastResponse(fcdata){

  const data = fcdata.list.map( f => { return { "x": f.dt_txt, "y": f.main.feels_like  }; } )
  const city = fcdata.city.name
  const srise = new Date( fcdata.city.sunrise * 1000 ).toTimeString().slice(0, 5)
  const sset  = new Date( fcdata.city.sunset  * 1000 ).toTimeString().slice(0, 5)
  const tzone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return { "data":  data, 
           "city":  city, 
           "srise": srise, 
           "sset":  sset, 
           "tzone": tzone }

}

export async function updateForecastChart(fresp){
}

export const refreshForecastChartData = async function (){
    try {
        var fcdata = await fetchForecast()
        return await parseForecastResponse(fcdata) 
    }catch (error) {
        console.log("Error! Could not reach the API." + error)
        return {}
    }

}
 
  export const defaultChartData = { 
          datasets: [ 
            { 
              label: "placeholder_fc",
              data: [],
            }
          ]
        }

  export const defaultChartOptions = {
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



