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
        <div><img src={Logo} alt="Logo" /></div>
        <div className='same-div'><img src={Home} alt="Home icon" /><span>Home</span></div>
        <div className='same-div'><img src={Movie} alt="movie icon" /><span>Movies</span></div>
        <div className='same-div'><img src={TV} alt="tv icon" /><span>TV Series</span></div>
        <div className='same-div'><img src={Calendar} alt="calender icon" /><span>Upcoming</span></div>
        <div className="quiz">
            <h3>Play Movie quiezzies and earn free tickets</h3>
            <p>50K people are playing now</p>
            <button>Start Playing</button>
        </div>
        <div className='same-div'><img src={Logout} alt="Logout icon" /><span>Logout</span></div>
    </div>
  )
}

export default Sidebar