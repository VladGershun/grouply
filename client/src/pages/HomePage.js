import '../styles/home-page.css'
import { useNavigate } from 'react-router-dom';

const HomePage = (props) => {
    let isScheduleVisible = false
    let isProfileVisible = false
    let isSettingsVisisble = false
    let nav = useNavigate()

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
                <h2>Friends</h2>
                <div id="friend1" >
                    <img id="friend1-icon" src = {props.friends[0].pic}></img>
                    <p id="friend1-name">{props.friends[0].name}</p>
                    <p id="friend1-username">{props.friends[0].username}</p>
                </div>
                <div id="friend2" >
                    <img id="friend1-icon" src = {props.friends[1].pic}></img>
                    <p id="friend1-name">{props.friends[1].name}</p>
                    <p id="friend1-username">{props.friends[1].username}</p>
                </div>
                {/* <div id="friend3" >
                    <p>{props.friends[0].name}</p>
                </div>
                <div id="friend4" >
                    <p>{props.friends[0].name}</p>
                </div>
                <div id="friend5" >
                    <p>{props.friends[0].name}</p>
                </div>
                <div id="friend6" >
                    <p>{props.friends[0].name}</p>
                </div> */}
            </div>
            <div className='menu-bar'>
                <h1 className="menu-time"><span id="menu-time"></span></h1>
                <h2 className="menu-date"><span id="menu-date"></span></h2>
                <nav>
                    <ul className='nav-bar'>
                        <li
                            onclick={navBarLogOutHandler}
                            className='nav-bar-log-out'
                        >Log Out</li>
                        <li
                            onClick={showSchedule}
                            className='nav-bar-schedule'
                        >Schedule</li>
                        <li
                            onClick={showProfile}
                            className='nav-bar-profile'
                        >Profile</li>
                        <li
                            onClick={showSettings}
                            className='nav-bar-settings'
                        >Settings</li>
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
                            <td>
                                <p className='date'>{props.calendar[7]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[8]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[9]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[10]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[11]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[12]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[13]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='date'>{props.calendar[14]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[15]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[16]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[17]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[18]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[19]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[20]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='date'>{props.calendar[21]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[22]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[23]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[24]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[25]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[26]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[27]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='date'>{props.calendar[28]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[29]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[30]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[0]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[1]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[2]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                            <td>
                                <p className='date'>{props.calendar[3]}</p>
                                <p className='dateInfo'>{props.calendarDetails[2]}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='chat-box'>
                <div className='chat-box-display'>
                    <p id="chatlog7" className="chatlog">&nbsp;</p>
                    <p id="chatlog6" className="chatlog">&nbsp;</p>
                    <p id="chatlog5" className="chatlog">&nbsp;</p>
                    <p id="chatlog4" className="chatlog">&nbsp;</p>
                    <p id="chatlog3" className="chatlog">&nbsp;</p>
                    <p id="chatlog2" className="chatlog">&nbsp;</p>
                    <p id="chatlog1" className="chatlog">&nbsp;</p>
                </div>
                <input id="chat-box-message" className='chat-box-message' ></input>
                <button onClick={newEntry} className='chat-box-btn'>Send</button>
            </div> 
        </div> 
        </>
    )

    var messages = []
    var lastUserMessage = ""

    function navBarLogOutHandler(){
        nav("/");
    }

    function newEntry() {
        if (document.getElementById("chat-box-message").value != "") {
            var time = getTime();
            lastUserMessage = time + ' ' + '|' + ' ' ;
            lastUserMessage += document.getElementById("chat-box-message").value;
            document.getElementById("chat-box-message").value = "";
            messages.push(lastUserMessage);
            for (var i = 1; i < 8; i++) {
            if (messages[messages.length - i])
                document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
            }
        }
    }

    document.onkeypress = keyPress;
    function keyPress(e) {
    var x = e || window.event;
    var key = (x.keyCode || x.which);
    if (key == 13 || key == 3) {
        newEntry();
    }
    }

    function placeHolder() {
    document.getElementById("chat-box-message").placeholder = "";
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

    window.onload = setInterval(getDate);
    function getDate() {
        var d = new Date();
        var date = d.getDate();
        var year = d.getFullYear();
        var month = d.getMonth();
        var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
        month = monthArr[month];
        document.getElementById("menu-date").innerHTML=month+" "+date+", "+year;
    }

    window.onload = setInterval(getTime);
    function getTime() {
        let date = new Date
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        document.getElementById("menu-time").innerHTML=strTime;
        return strTime;
    }
}
export default HomePage;