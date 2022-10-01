import React from 'react'
import './Search.scss'
import { display } from '../Menu/Menu'

function Search() {
  return (
    <section id='search'>
        <button
        id='close'
        className='display material-symbols-outlined'
        onClick={display}>Close</button>

        <div>
            <input type="search"
            name="location"
            placeholder='search location'/>
            <button>Search</button>
        </div>

        <div id='list'></div>
    </section>
  )
}

export default Search