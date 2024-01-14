import '../pages/Login.css'
import Form from 'react-bootstrap/Form';

function LandingBg({ children }: { children: JSX.Element }) {
    return (
        <div className='Login-background'>
            <div className="Login-box-container">
                <div className="Login-box">
                    {children}
                </div>
            </div>
        </div >
    )
}

export default LandingBg
