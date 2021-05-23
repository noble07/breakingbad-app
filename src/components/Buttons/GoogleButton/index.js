import './index.css'

const GoogleButton = ({ buttonClick }) => {
  return (
    <div className="auth__social-networks">
        <p>Registrate con las redes sociales</p>
        <div 
            className="google-btn"
            onClick={buttonClick}
        >
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
                <b>Ingresa con google</b>
            </p>
        </div>
    </div>
  )
}

export default GoogleButton
