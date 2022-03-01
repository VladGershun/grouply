import '../styles/home-page.css'

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
                <h1 className='menu-time'>{props.currentTime}</h1>
                <h2 className='menu-date'>{props.date}</h2>
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
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
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


export default HomePage;