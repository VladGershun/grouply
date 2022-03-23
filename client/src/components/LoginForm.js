import '../styles/log-in-form.css'

let moveToSignUpPage = false
let isUsernamePopulated = false
let isPasswordPopulated = false

const LogInForm = (props) => {

    return(
        <>
            <div className='top-circle'></div>
            <div className='mid-circle'></div>
            <div className='bottom-circle'></div>
            <div className='log-in-field'>
                <h1 className='logo'>GROUPLY</h1>
                <input onChange={usernameHandler} className='log-in-username-input' placeholder='Username'></input>
                <input onChange={passwordHandler} className='log-in-password-input' placeholder='Password'></input>
                <button onClick={logInButtonHandler} className='log-in-login-button'>Log In</button>
                <button onClick={signUpButtonHandler} className='log-in-signup-button'>Sign Up</button>
            </div>
        </>
    )
}

function usernameHandler(event){
    let inputVal = event.target.value
    if(inputVal === ''){
        isUsernamePopulated = false;
    } else {
        isUsernamePopulated = true;
    }

    console.log(inputVal);
    console.log(isUsernamePopulated);
}

function passwordHandler(event){
    let inputVal = event.target.value
    if(inputVal === ''){
        isPasswordPopulated = false;
    } else {
        isPasswordPopulated = true;
    }

    console.log(inputVal);
    console.log(isPasswordPopulated);
}

function signUpButtonHandler(){
    moveToSignUpPage = true;
    alert('Move to sign up page');
}

function logInButtonHandler(){
    alert('log in button clicked');
}

export default LogInForm;