import '../styles/home-page.css'
import React from 'react'

const HomePage = (props) => {
    let isScheduleVisible = false
    let isProfileVisible = false
    let isSettingsVisisble = false

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
                {/* { <h1 className='menu-time'>{props.currentTime}</h1> } */}
                <h1 className="menu-time"><span id="menu-time"></span></h1>
                <h2 className="menu-date"><span id="menu-date"></span></h2>
                <nav>
                    <ul className='nav-bar'>
                        <li onClick={showSchedule} className='nav-bar-schedule'>Schedule</li>
                        <li onClick={showProfile} className='nav-bar-profile'>Profile</li>
                        <li onClick={showSettings} className='nav-bar-settings'>Settings</li>
                    </ul>
                </nav>
            </div>
            <div className='calander-view'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p className='date'>{props.calendar[0]}</p>
                                <p className='dateInfo'>{props.calendarDetails[0]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[1]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[2]}</p>
                                <p className='dateInfo'>{props.calendarDetails[1]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[3]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[4]}</p>
                                <p className='dateInfo'>{props.calendarDetails[0]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[5]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[6]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                        </tr>
                        <tr>
                            <td><p className='date'>8</p></td>
                            <td><p className='date'>9</p></td>
                            <td><p className='date'>10</p></td>
                            <td><p className='date'>11</p></td>
                            <td><p className='date'>12</p></td>
                            <td><p className='date'>13</p></td>
                            <td><p className='date'>14</p></td>
                        </tr>
                        <tr>
                            <td><p className='date'>15</p></td>
                            <td><p className='date'>16</p></td>
                            <td><p className='date'>17</p></td>
                            <td><p className='date'>18</p></td>
                            <td><p className='date'>19</p></td>
                            <td><p className='date'>20</p></td>
                            <td><p className='date'>21</p></td>
                        </tr>
                        <tr>
                            <td><p className='date'>22</p></td>
                            <td><p className='date'>23</p></td>
                            <td><p className='date'>24</p></td>
                            <td><p className='date'>25</p></td>
                            <td><p className='date'>26</p></td>
                            <td><p className='date'>27</p></td>
                            <td><p className='date'>28</p></td>
                        </tr>
                        <tr>
                            <td><p className='date'>29</p></td>
                            <td><p className='date'>30</p></td>
                            <td><p className='date'>31</p></td>
                            <td><p className='date'>1</p></td>
                            <td><p className='date'>2</p></td>
                            <td><p className='date'>3</p></td>
                            <td><p className='date'>4</p></td>
                        </tr>
                    </tbody>
                </table>
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

function showSchedule(isScheduleVisible) {
    isScheduleVisible.toggle()
}
function showProfile(isProfileVisible) {
    isProfileVisible.toggle()
}
function showSettings(isSettingsVisisble) {
    isSettingsVisisble.toggle()
}

// window.onload = setInterval(getDate);
// function getDate() {
//     var d = new Date();
//     var date = d.getDate();
//     var year = d.getFullYear();
//     var month = d.getMonth();
//     var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
//     month = monthArr[month];
//     document.getElementById("menu-date").innerHTML=month+" "+date+", "+year;
// }

// window.onload = setInterval(getTime);
// function getTime() {
//     let date = new Date
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12;
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     let strTime = hours + ':' + minutes + ' ' + ampm;
//     document.getElementById("menu-time").innerHTML=strTime;
//     // console.log(strTime);
// }

export default HomePage;