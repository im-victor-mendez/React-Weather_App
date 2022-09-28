import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { location } from '../location/locationSlice'
import './Menu.scss'

export function display(params) {
  const display = document.getElementsByClassName('display')
  const search = document.getElementById('search')
  
  search.classList.toggle('active')
}

function Menu() {
  const [menu, setMenu] = useState({
    location: undefined,
    api: 'https://api.openweathermap.org/data/2.5/weather?'
  })

  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = position.coords
        const latitude = coords.latitude
        const longitude = coords.longitude

        setMenu({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          api: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=07b4f2d459a0d004583bd0979a7896dd`
        })
      }
    )
  }

  getLocation()

  const dispatch = useDispatch()

  function setLocation() {
    getLocation()
    dispatch(location(menu))
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