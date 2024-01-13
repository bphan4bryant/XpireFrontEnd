import './Login.css'
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div className='Login-background'>
        <div className="Login-box-container">
            
            <form className="Login-box">
                <img className="Login-image" src="./Xpire.png" alt="logo"/>
                <h3 className="Login-title">Sign In</h3>
                <Form>
                    <div className="Login-credentials-title">
                        <Form.Label htmlFor="inputUsername5">Username</Form.Label>
                    </div>
                    <div>
                        <Form.Control
                            type="username"
                            id="inputUsername5"
                            aria-describedby="usernameHelpBlock"
                            style={{
                                width: "70%",
                                marginRight: "60px",
                                marginLeft: "60px"
                            }}
                        />
                    </div>
                    <div className="Login-credentials-title">
                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    </div>
                    <div>
                        <Form.Control
                        width={"100%"}
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        style={{
                                width: "70%",
                                marginRight: "60px",
                                marginLeft: "60px"
                            }}
                        />
                    </div>
                    <div className="Login-submit">
                        <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                    </div>
                </Form>
            </form>
        </div>
    </div>
  )
}

export default Login
