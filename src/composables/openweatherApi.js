import axios from 'axios'
import wrapper from 'axios-cache-plugin'

const owApi = wrapper(axios, {
  maxCacheSize: 15,
  ttl: 259200000 // 3 days
  
})

export { owApi }

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
