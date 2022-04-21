import HomePage from './pages/HomePage';
import SignUpForm from './pages/SignUpForm';
import LogInForm from './components/LogInForm';
import ErrorForm from './components/ErrorForm';
import React from 'react';
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
        <Route path="/SignUp" element={ <SignUpForm
                                        errorMsg = 'Test error'/>
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
                                          calendar = {['1', '2', '3', '4', '5', '6', '7']}
                                          calendarDetails = {['Work', 'School', '']} />
                                      }
        />
        <Route path="*" element={<ErrorForm />} />
      </Routes>
    </Router>
  );
}

export default App;