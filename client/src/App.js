import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpForm from './pages/SignUpForm';

const App = () => {
  return(
    <div>
      <HomePage />
      {/* <SignUpForm /> */}
    </div>
  );
}

export default App;