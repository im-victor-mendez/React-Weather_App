import React from 'react'
import Air_Pressure from './Air_Pressure'
import Humidity from './Humidity'
import Visibility from './Visibility'
import Wind from './Wind'

function Hightlights() {
  return (
    <section id='hightlights'>
        <Wind />
        <Humidity />
        <Visibility />
        <Air_Pressure />
    </section>
  )
}

export default Hightlights