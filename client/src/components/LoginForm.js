import '../styles/log-in-form.css';
import data from '../data/UserInfo.json';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import CircleTop from '../images/circle2.svg';
import CircleMid from '../images/circle3.svg';
import CircleBottom from '../images/circle1.svg';
import Logo from '../images/grouplyLogo.jpg'

let moveToSignUpPage = false;
let isUsernamePopulated = false;
let isPasswordPopulated = false;
let usernameExists = false;
let passwordExists = false;
let moveToHomePage = false;
let username = '';
let password = '';

const TopCircle = styled(motion.img)`
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 175px;
    left: 110px;
    top: 105px;
`;

const MidCircle = styled(motion.img)`
    position: absolute;
    width: 250px;
    height: 250px;
    border-radius: 125px;
    left: 75px;
    top: 505px;
`;

const BottomCircle = styled(motion.img)`
    position: absolute;
    width: 270px;
    height: 270px;
    border-radius: 135px;
    left: 315px;
    top: 670px;
`;

const SvgDiv = styled.div``;

const LogInForm = (props) => {
    let nav = useNavigate();

    return(
        <>
            <SvgDiv>
                <TopCircle
                    src={CircleTop}
                    alt='circle'
                    whileTap={{ scale: 0.9}}
                    drag={true}
                    // dragConstraints={{ left:0, right:250, top:0, bottom: 50}}
                />
                <MidCircle
                    src={CircleMid}
                    drag={true}
                    alt='circle'
                />

                <BottomCircle
                    src={CircleBottom}
                    alt='circle'
                    initial={{ opacity: 1, y: 300}}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                />
            </SvgDiv>

            <img
                className='logoimg'
                src={Logo}
                alt='Logo'
            />
            
            <div className='log-in-field'>
                <h1 className='logo'>GROUPLY</h1>

                <input
                    className='log-in-username-input'
                    onChange={usernameHandler}
                    placeholder='Username'
                    data-testid='username-input'
                ></input>

                <input
                    className='log-in-password-input'
                    onChange={passwordHandler}
                    type='password'
                    placeholder='Password'
                    data-testid='password-input'
                ></input>

                <button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                        scale: 0.95,
                        backgroundColor: '#67F6E7',
                        border: 'none',
                        color:
                        '#000'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
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

    function signUpButtonHandler(){
        moveToSignUpPage = true;
        nav("/signup");
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
                // alert('Credentials Accepted');
                moveToHomePage = true;
                nav("/home")
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
        } else if (isUsernamePopulated === false && isPasswordPopulated === false) {
            alert('Insert Username and Password')
        } else if (isUsernamePopulated === true && isPasswordPopulated === false){
            alert('Insert Password');
            return false
        } else if (isUsernamePopulated === false && isPasswordPopulated === true) {
            alert('Insert Username');
            return false
        } else {
            alert('do something please');
            return false
        }
    
    }
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

// function signUpButtonHandler(){
//     let nav = useNavigate();
//     moveToSignUpPage = true;
//     alert('Move to sign up page');
//     nav("/signup");
// }

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

export default LogInForm;