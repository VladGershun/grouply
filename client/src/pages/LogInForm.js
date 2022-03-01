import '../styles/log-in-form.css'

const LogInForm = (props) => {
    return(
        <>
            <div className='top-circle'></div>
            <div className='mid-circle'></div>
            <div className='bottom-circle'></div>
            <div className='log-in-field'>
                <h1 className='logo'>GROUPLY</h1>
                <input className='log-in-username-input' placeholder='Username'></input>
                <input className='log-in-password-input' placeholder='password'></input>
                <button className='log-in-login-button'>Log In</button>
                <button className='log-in-signup-button'>Sign Up</button>
            </div>
        </>
    )
}
export default LogInForm;