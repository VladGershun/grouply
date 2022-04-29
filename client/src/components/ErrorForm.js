import '../styles/error-form.css'

const ErrorForm = (props) => {
    return(
        <>
            <div
                className='error-message'
            >Error! Invalid URL</div>    

            <button
                className='animation-button'
            >Animations Menu</button>
        </>
    )
}
export default ErrorForm;