import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpForm from './pages/SignUpForm';
import LogInForm from './components/LogInForm';

const App = () => {
  return(
    <div>
      {/* <HomePage 
        profileImage = 'https://res.cloudinary.com/demo/image/twitter_name/BillClinton.jpg'
        firstName = 'Vlad'
        lastName = 'Gershun'
        username = 'vladgershun'
        about = 'Probably eating food...'
        currentTime  = '5:07 PM'
        date = 'Feb 25, 2022'
      /> */}
      {/* <SignUpForm 
        errorMsg = 'Test error'
      /> */}
      <LogInForm />
    </div>
  );
}

export default App;