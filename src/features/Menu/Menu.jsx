import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { currentlocation } from '../locationSlice'
import './Menu.scss'

export function display(params) {
  const display = document.getElementsByClassName('display')
  const search = document.getElementById('search')
  
  search.classList.toggle('active')
}

function Menu() {
  const [menu, setMenu] = useState({
    api: 'https://api.openweathermap.org/data/2.5/weather?'
  })

  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = position.coords
        const latitude = coords.latitude
        const longitude = coords.longitude

        setMenu({
          api: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=07b4f2d459a0d004583bd0979a7896dd`,
          location: {
            latitude: latitude,
            longitude: longitude
          }
        })
      }
    )
  }

  const dispatch = useDispatch()

  function setLocation() {
    getLocation()

    const setCountry = !async function(){
      let country = await fetch(menu.api)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data.sys.country
      })

      let weather = await fetch(menu.api)
      .then(response => response.json())
      .then(data => {
        const dataset = data.weather[0]
        return {
          main: dataset.main,
          icon: dataset.icon,
          temperature: (data.main.temp - 273.15).toFixed(2)
        }
      })

      let wind = await fetch(menu.api)
      .then(response => response.json())
      .then(
        data => {
          const dataset = data.wind
          return {
            velocity: dataset.speed,
            direction: dataset.deg
          }
        }
      )

      let humidity = await fetch(menu.api)
      .then(response => response.json())
      .then(
        data => {
          return data.main.humidity
        }
      )

      let visibility = await fetch(menu.api)
      .then(response => response.json())
      .then(
        data => {
          return data.visibility
        }
      )

      let air = await fetch(menu.api)
      .then(response => response.json())
      .then(
        data => {
          return data.main.pressure
        }
      )

      setMenu({
        ...menu,
        country: country,
        weather: weather,
        wind: wind,
        humidity: humidity,
        visibility: visibility,
        air: air
      })
    }()

    dispatch(currentlocation(menu))
  }

  return (
    <section id='menu'>
      <button className='display'
      onClick={display}>Seacrh for places</button>

      <button
      id='local_ubication'
      className='material-symbols-outlined'
      onClick={setLocation}>My_Location</button>
    </section>
  )
}

export default Menu