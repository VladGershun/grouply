import '../styles/home-page.css'
import React from 'react'

const HomePage = (props) => {
    return(
        <>
        <div className='home-background'>
            <div className='user-info'>
                <img className='profile-image' src = {props.profileImage}></img>
                <h1 className='profile-full-name'>{`${props.firstName} ${props.lastName}`}</h1>
                <h3 className='profile-username'>{`@${props.username}`}</h3>
                <p className='profile-about'>{props.about}</p>
            </div>
            <div className='social-info'>

            </div>
            <div className='menu-bar'>
                <h1 className='menu-time'>{props.currentTime}</h1>
                <h2 className='menu-date'>{props.date}</h2>
                <nav>
                    <ul className='nav-bar'>
                        <li className='nav-bar-schedule'>Schedule</li>
                        <li className='nav-bar-profile'>Profile</li>
                        <li className='nav-bar-settings'>Settings</li>
                    </ul>
                </nav>
            </div>
            <div className='calander-view'>

            </div>
            <div className='chat-box'>
                <div className='chat-box-display'></div>
                <input className='chat-box-message'></input>
                <button className='chat-box-btn'>Send</button>
            </div> 
        </div> 
        </>
    )
}

export default HomePage;