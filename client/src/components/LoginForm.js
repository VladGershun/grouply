import '../styles/log-in-form.css'
import data from '../data/UserInfo.json'
import React from 'react'
let moveToSignUpPage = false;
let isUsernamePopulated = false;
let isPasswordPopulated = false;
let usernameExists = false;
let passwordExists = false;
let moveToHomePage = false;
let username = '';
let password = '';

const LogInForm = (props) => {

    return(
        <>
            <div className='top-circle'></div>
            <div className='mid-circle'></div>
            <div className='bottom-circle'></div>
            <div className='log-in-field'>
                <h1 className='logo'>GROUPLY</h1>

                <input
                    onChange={usernameHandler}
                    className='log-in-username-input'
                    placeholder='Username'
                    data-testid='username-input'
                ></input>

                <input
                    onChange={passwordHandler}
                    className='log-in-password-input'
                    placeholder='Password'
                    data-testid='password-input'
                ></input>

                <button
                    onClick={logInButtonHandler}
                    className='log-in-login-button'
                    data-testid='login-button'
                >Log In</button>

                <button
                    onClick={signUpButtonHandler}
                    className='log-in-signup-button'
                    data-testid='signup-button'
                >Sign Up</button>

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

    username = inputVal
    console.log(inputVal);
    console.log(isUsernamePopulated);
}

function passwordHandler(event){
    let inputVal = event.target.value

    password = inputVal
    console.log(inputVal);
    console.log(isPasswordPopulated);

    if(inputVal === ''){
        isPasswordPopulated = false;
        return false;
    } else {
        isPasswordPopulated = true;
        return true;
    }
}

function signUpButtonHandler(){
    moveToSignUpPage = true;
    alert('Move to sign up page');
}

function getLoginInfo(){
    let usernames = [];
    let passwords = [];
    let dictionary = {};

    console.log(username);
    console.log(password);

    data.forEach(element => {
        usernames.push(element.username);
        passwords.push(element.password);
    });
    usernames.forEach((i,j) => {dictionary[i] = passwords[j]});

    return dictionary
}

//checks if 'str' has an equivalent value inside 'array'
//for some reason array.includes doesn't work for the passwords
//creating this function for logInButtonHandler
function isIn(str, array){
    let i = 0;
    for(i ; i < array.length; i++){
        if(array[i] === str){
            return true;
        }
    }
    return false;
}

function logInButtonHandler(){
    moveToHomePage = true;

    let usernames = [];
    let passwords = [];

    console.log(username);
    console.log(password);

    data.forEach(element => {
        usernames.push(element.username);
        passwords.push(element.password);
    });

    let dictionary = getLoginInfo();

    console.log(usernames);
    console.log(passwords);
  
    if (isUsernamePopulated && isPasswordPopulated){
        //created function 'isIn', for some reasing .includes
        //was not working for the password list
        if(usernames.includes(username) === true && isIn(password, passwords) === true){
            alert('Credentials Accepted');
            moveToHomePage = true;
            return true;
        } else if (usernames.includes(username) === true && passwords.includes(passwords) === false){
            alert('Incorrect Password');
            return false;
        } else if (usernames.includes(username) === false){
            alert('Username DNE');
            return false;
        } else {
            alert('Incorrect Username AND Password');
            return false;
        }
    } else if (isUsernamePopulated === true && isPasswordPopulated === false){
        alert('Insert Password');
        return false
    } else if (isUsernamePopulated === false && isPasswordPopulated === true) {
        alert('Insert Username');
        return false
    } else if (isUsernamePopulated === false && isPasswordPopulated === false) {
        alert('Insert Username and Password')
    } else {
        alert('do something please');
        return false
    }

}

export default LogInForm;