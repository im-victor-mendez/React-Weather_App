import React from 'react'
import { useSelector } from 'react-redux'

function Wind() {
    const selector = useSelector(state => state.location)
    const wind = selector.wind

  return (
    <section id='wind'>
        <h1>Wind status</h1>
        <div>
            <h1>{wind.velocity} mph</h1>
            <div id='direction'>
                <i
                className='material-symbols-outlined'
                style={
                    {transform: `rotate(${wind.direction}deg)`}
                }
                >Assistant_Navigation</i>
                <h1>{wind.direction} deg</h1>
            </div>
        </div>
    </section>
  )
}

export default Wind