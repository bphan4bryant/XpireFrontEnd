import './Login.css'
import Form from 'react-bootstrap/Form';

function Login() {
    return (
        <>
            <img className="Login-image" src="./Xpire.png" alt="logo" />
            {/* <h3 className="Login-title">Sign In</h3> */}
            <Form>
                <div className="Login-credentials-title">
                    <Form.Label htmlFor="inputUsername5">Username</Form.Label>
                </div>
                <div>
                    <Form.Control
                        className="Login-entry-box"
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
                <div >
                    <Form.Control
                        className="Login-entry-box"
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
                <div className="Login-forgot">
                    <a className="Login-forgot-link" href="#">Forgot Password?</a>
                </div>
                <div className="Login-submit">
                    <button type="submit" className="Login-submit-button">
                        Login
                    </button>
                </div>
                <p className="Login-sign-up">
                    Don't have an account? <a className="Login-sign-up-link" href="#">Sign Up!</a>
                </p>
            </Form>
        </>
    )
}

export default Login
