import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpForm from './pages/SignUpForm';

const App = () => {
  return(
    <div>
      <HomePage 
        profileImage = 'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg'
        firstName = 'Vlad'
        lastName = 'Gershun'
        username = 'vladgershun'
        about = 'Probably eating food...'
        currentTime  = '5:07 PM'
        date = 'Feb 25, 2022'
      />
      {/* <SignUpForm /> */}
    </div>
  );
}

export default App;