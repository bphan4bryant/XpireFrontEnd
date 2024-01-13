import './Login.css'
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div className='Login-background'>
        <div className="Login-box-container">
            
            <form className="Login-box">
                <h3 className="Login-title">Sign In</h3>
                <Form>
                    <div className="Login-credentials-title">
                        <Form.Label htmlFor="inputUsername5">Username</Form.Label>
                    </div>
                    <div className="Login-credentials-title">
                        <Form.Control
                            type="username"
                            id="inputUsername5"
                            aria-describedby="usernameHelpBlock"
                        />
                    </div>
                    <div className="Login-credentials-title">
                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    </div>
                    <div className="Login-credentials-title">
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                    </div>
                </Form>
            </form>
        </div>
    </div>
  )
}

export default Login
