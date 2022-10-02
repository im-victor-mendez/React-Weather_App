import React from 'react'
import './Today_Weather.scss'
import { useSelector } from 'react-redux'

function Today_Weather() {
    const date = new Date()
    const month = date.getMonth().toLocaleString('en-US', { month: 'long'})
    const today = date.getDate()

    const selector = useSelector(state => state.location)

    return (
    <section id='today-weather'>
        {selector.weather.icon == undefined ? <img/> :
        <img src={'http://openweathermap.org/img/wn/'
        + selector.weather.icon + '@2x.png'} alt="" />}

        <div id='today-temperature'>
            <div id='temperature'>
                {selector.weather.temperature}
            </div>
            °{selector.weather.unit}
        </div>

        <div id='description'>
            {selector.weather.description}
        </div>

        <div id='today'>
            Today · {today},{month}
        </div>
        
        <div id='ubication'>
            <i className='material-symbols-outlined'>Location_On</i>
            <h1>{selector.country}</h1>
        </div>
    </section>
  )
}

export default Today_Weather