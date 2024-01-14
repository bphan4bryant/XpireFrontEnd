import React, { useState } from 'react';
import './Login.css'
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import LandingBg from '../components/LandingBg';

function Login() {

    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
        setError("");
        e.preventDefault();

        // baseURL: import.meta.env.VITE_BASE_URL + '/users/' + import.meta.env.VITE_DEFAULT_USER //Change default user to actual user field
        try {
            const res = await axios.post("http://localhost:5000/login", {
                "id": username,
                "password": password
            });
            const token = res.data.data
            // save as a cookie
            localStorage.setItem("JWT", token);
            // redirect to main page
            navigate("/inventory")

        } catch (e: any) {
            if (e.response.status === 401) {
                setError("Incorrect Username or Password")
            }
            console.error(e);
            console.error(e.response.status)
        }
    }

    return (
        <LandingBg>
            <img className="Login-image" src="./Xpire.png" alt="logo" />
            {/* <h3 className="Login-title">Sign In</h3> */}
            <Form>
                <div className="Login-credentials-title">
                    <Form.Label htmlFor="inputUsername5">Email</Form.Label>
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
                        placeholder='Enter username'
                        onChange={(e) => {
                            e.preventDefault();
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className="Login-credentials-title">
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                </div>
                <div>
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
                        placeholder='Enter password'
                        onChange={(e) => {
                            e.preventDefault();
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <span className='error'>
                    {error}
                </span>
                <div className="Login-forgot">
                    <a className="Login-forgot-link" href="/forgot">Forgot Password?</a>
                </div>
                <div className="Login-submit">
                    <button type="submit" className="Login-submit-button" onClick={handleLogin}>
                        Login
                    </button>
                </div>
                <p className="Login-sign-up">
                    Don't have an account? <a className="Login-sign-up-link" href="/register">Sign Up!</a>
                </p>
            </Form>
        </LandingBg>
    )
}

export default Login
