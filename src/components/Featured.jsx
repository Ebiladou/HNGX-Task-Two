import React from 'react'
import '../App.css'
import Card from './Card'

function Featured() {
  return (
    <div className='featured-container'>
        <div className="details">
            <h1>Featured Movies</h1>
            <p>See More</p>
        </div>
        <Card/>
    </div>
  )
}

export default Featured