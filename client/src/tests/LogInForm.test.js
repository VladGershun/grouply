// import { render, screen } from "@testing-library/react"
// import LogInForm from "../components/LoginForm";
// import userEvent from "@testing-library/user-event"
// import LogInForm from "../components/LoginForm"
// import SignUpForm from "../pages/SignUpForm"
// import data from '../data/UserInfo.json'


//1 : Black Box Test 
test("Checking if the password '012345' is a good password", () => {
    expect(SignUpForm.verifyPassword('012345')).toBe(true);
})

//2 : Black Box Test 
test("Checking if the password '0123' is a bad password", () => {
    expect(SignUpForm.verifyPassword('0123')).toBe(false);
})

//3 : Black Box Test
test('Makes sure "userNameHandler" is called when username field is populated', () => {
    render(<LogInForm/>)
    const inputElem = screen.getByTestId('username-input');
    userEvent.simulate(inputElem, "KyleS");

    expect(LogInForm.userNameHandler).toHaveBeenCalled();
})

//4 : Integration Test, Top-Down
//no working back end at the moment using json file
//with user data
test('testing usernames and passwords are extracted properly', () => {
    let dictionary = {};

    data.forEach(element => {
        dictionary[element.username] = element.password;
    });

    expect(LogInForm.getLogInfo(data)).toEqual(dictionary);
})

//function for test 5
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
  
    if (isUsernamePopulated && isPasswordPopulated){
        if(usernames.includes(username) && passwords.includes(passwords)){
            alert('Credentials Accepted');
            moveToHomePage == true;
        } else if (usernames.includes(username) === true && passwords.includes(passwords) === false){
            alert('Incorrect Password');
            return false;
        } else if (usernames.includes(username) === false ){
            alert('Username DNE');
            return false;
        } else {
            alert('Dumbass');
            return false;
        }
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

//5 (Part 1) : White Box Test (partial Coverage)
test('testing return values of logInButtonHandler, when given valid username/valid password', () =>{
    const tester = render(<LogInForm/>);
    const usernameInput = tester.getByTestId('username-input');
    const passwordInput = tester.getByTestId('password-input');
    const loginButton = tester.getByTestId('login-button');

    usernameInput.simulate('KyleS');
    passwordInput.simulate('Password');
    loginButton.simulate('click');

    expect(LogInForm.logInButtonHandler).toBe(true);
    expect(2+2).toBe(5);
})

//6 (Part 2) : White Box Test (partial Coverage)
test('testing return values of logInButtonHandler, when given valid username/invalid password', () =>{
    const tester = render(<LogInForm/>);
    const usernameInput = tester.getByTestId('username-input');
    const passwordInput = tester.getByTestId('password-input');
    const loginButton = tester.getByTestId('login-button');

    usernameInput.simulate('KyleS');
    passwordInput.simulate('wrong');
    loginButton.simulate('click');

    expect(LogInForm.logInButtonHandler).toBe(false);
    expect(2+2).toBe(5);
})

//7 (part 3) : White Boxy Test (still partial Coverage)
test('testing return values of logInButtonHandler, when given invalid username (password does not matter)', () =>{
    const tester = render(<LogInForm/>);
    const usernameInput = tester.getByTestId('username-input');
    const passwordInput = tester.getByTestId('password-input');
    const loginButton = tester.getByTestId('login-button');

    usernameInput.simulate('Kyle');
    passwordInput.simulate('DOESNT MATTER');
    loginButton.simulate('click');

    expect(LogInForm.logInButtonHandler).toBe(false);
})

//8 : Black Box Test
test('tests for usernameHandler returning true if valid username inputted', () => {
    render(<LogInForm/>)
    const inputElem = screen.getByTestId('username-input');
    userEvent.simulate(inputElem, "KyleS");

    expect(LogInForm.userNameHandler).toBe(true);
})

//9 : Black Box Test
test('tests for usernameHandler returning false if invalid username inputted', () => {
    render(<LogInForm/>)
    const inputElem = screen.getByTestId('username-input');
    userEvent.simulate(inputElem, "wrong");

    expect(LogInForm.userNameHandler).toBe(false);
})

//10 : Black Box Test
test('testing for signUpButtonHandler call when Sign Up button is pressed', () => {
    render(<LogInForm/>)
    const inputElem = screen.getByTestId('signup-button');
    userEvent.simulate('click');

    expect(LogInForm.signUpButtonHandler).toHaveBeenCalled(); 
})

//as of now, the page checks if the inputted password exists inside the database while it is being inputted
//11 Black Box Test
test('tests for passwordHandler returning true if valid passWord is inputted', () => {
    dictionary = {}

    render(<LogInForm/>)
    const usernameInput = screen.getByTestId('username-input');
    const passwordInput = screen.getByTestId('password-input');
    userEvent.simulate(usernameInput, "KyleS");
    userEvent.simulate(passwordInput, "Password");


    data.forEach(element => {
        dictionary[element.username] = element.password;
    }); 

    //Note to self: do not need to pass arguments when simulated inputs into input field
    expect(LogInForm.passwordHandler).toBe(true);
})

//12 Black Box Test
test('tests for passwordHandler returning false if invalid passWord is inputted', () => {
    dictionary = {}

    render(<LogInForm/>)
    const usernameInput = screen.getByTestId('username-input');
    const passwordInput = screen.getByTestId('password-input');
    userEvent.simulate(usernameInput, "KyleS");
    userEvent.simulate(passwordInput, "wrong");


    data.forEach(element => {
        dictionary[element.username] = element.password;
    }); 

    expect(LogInForm.passwordHandler).toBe(false);
})
