import '../styles/sign-up-form.css'
import { useNavigate } from 'react-router-dom';

let errorShow = false

const SignUpForm = (props) => {
    let nav = useNavigate();

    if(props.errorMsg.length > 0) {
        errorShow = true
    }
    return(
        <>
        <div className='sign-up-background'>
            <div className='circle-1'></div>
            <div className='circle-2'></div>
            <div className='circle-3'></div>
        </div>
        <div className='sign-up-form'>
            <form id="logform" method="POST" action="/create">

                <h1 className='sign-up-logo'>Sign Up</h1>

                <input
                    className='sign-up-username-input'
                    placeholder='Username'
                ></input>

                <input
                    className='sign-up-email-input'
                    placeholder='Email'
                ></input>

                <input
                    className='sign-up-password-input'
                    type='password'
                    placeholder='Password'
                ></input>

                <input
                    className='sign-up-password-confirm-input'
                    type='password'
                    placeholder='Confirm Password'
                ></input>

                <button
                    onClick={createButtonHandler}
                    type='button'
                    className='sign-up-login-button'
                >Create</button>

                <button
                    onClick={cancelButtonHandler}
                    type='reset'
                    className='sign-up-sign-up-button'
                >Cancel</button>
            </form>
        </div>
        {errorShow &&
            <div className='sign-up-error'>
                <p>{props.errorMsg}</p>
                <button onClick={clearError} className='sign-up-error-btn'>Okay</button>
            </div>
        }
        </>
    )

    function cancelButtonHandler(){
        nav("/");
    }
    
    function createButtonHandler(){
        alert("User Created");
        nav("/")

    }

    function clearError() {
        errorShow = false
        console.log(errorShow)
    }
}

export default SignUpForm;