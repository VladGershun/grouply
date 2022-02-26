import '../styles/sign-up-form.css'

const SignUpForm = () => {
    return(
        <>
        <div className='sign-up-background'>
            <div className='circle-1'></div>
            <div className='circle-2'></div>
            <div className='circle-3'></div>
        </div>
        <div className='sign-up-form'>
            <h1 className='sign-up-logo'>Sign Up</h1>
            <input className='sign-up-username-input' placeholder='Username'></input>
            <input className='sign-up-email-input' placeholder='Email'></input>
            <input className='sign-up-password-input' placeholder='Password'></input>
            <input className='sign-up-password-confirm-input' placeholder='Confirm Password'></input>
            <button className='sign-up-login-button'>Log In</button>
            <button className='sign-up-sign-up-button'>Sign Up</button>
        </div>
        </>
    )
}

export default SignUpForm;