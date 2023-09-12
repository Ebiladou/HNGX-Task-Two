import React from 'react'
import Logo from '../assets/Logo.png'
import Home from '../assets/Home.png'
import Movie from '../assets/Projector.png'
import TV from '../assets/TV.png'
import Calendar from '../assets/Calendar.png'
import Logout from '../assets/Logout.png'

function Sidebar() {
  return (
    <div className='sidebar-container'>
        <img src={Logo} alt="Logo" />
        <img src={Home} alt="Home icon" /><span>Home</span>
        <img src={Movie} alt="movie icon" /><span>Movies</span>
        <img src={TV} alt="tv icon" /><span>TV Series</span>
        <img src={Calendar} alt="calender icon" /><span>Upcoming</span>
        <div className="quiz">
            <h3>Play Movie quiezzies and earn free tickets</h3>
            <p>50K people are playing now</p>
            <button>Start Playing</button>
        </div>
        <img src={Logout} alt="Logout icon" /><span>Logout</span>
    </div>
  )
}

export default Sidebar