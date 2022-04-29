import HomePage from './pages/HomePage';
import SignUpForm from './pages/SignUpForm';
import LogInForm from './components/LogInForm';
import ErrorForm from './components/ErrorForm';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LogInForm />} />
        <Route path="/signup" element={ <SignUpForm
                                        errorMsg = ""/>
                                      } 
        />
        <Route path="/home" element = { <HomePage 
                                          profileImage = 'https://res.cloudinary.com/demo/image/twitter_name/BillClinton.jpg'
                                          firstName = 'Vlad'
                                          lastName = 'Gershun'
                                          username = 'vladgershun'
                                          about = 'Probably eating food...'
                                          currentTime  = '5:07 PM'
                                          date = 'Feb 25, 2022'
                                          calendar = {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', 
                                        '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']}
                                          calendarDetails = {['Work', 'School', '']}
                                          friends = {[({name: "Monica Lewinsky", username: "@monicalewinsky", status: "Online", pic: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Monica_lewinsky.jpg'}), ({name: "Kyle Saryigin", username: "@kylesarygin", status: "Offline", pic: 'https://media-exp1.licdn.com/dms/image/C5603AQHIgNkaJ3QbXA/profile-displayphoto-shrink_800_800/0/1576632366857?e=1655942400&v=beta&t=IqooTfCmrOhAJeQdfzM1shqX6eapqeSLu9zjUS1wHZQ'})]} />
                                      } />
        <Route path="*" element={<ErrorForm />} />
      </Routes>
    </Router>
  );
}

export default App;