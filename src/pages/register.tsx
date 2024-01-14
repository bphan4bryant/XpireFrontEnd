import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProfilePicture from '../components/profilePicture';
import React, { useState } from 'react';
import "./register.css";
import LandingBg from '../components/LandingBg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { fileToBase64 } from '../util/util';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const [currentProfilePreview, setCurrentProfilePreview] = useState("");

    const [visiblePassword, setVisiblePassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePicture, setProfilePicture] = useState<File | null>();
    const [error, setError] = useState("")

    const navigate = useNavigate();

    async function handleRegister(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setError("");
        // convert file to base64
        let base64Pfp = ""
        // if (profilePicture) {
        //     base64Pfp = await fileToBase64(profilePicture);
        // }
        const newUser = {
            id: email,
            password: password,
            name: name,
            pfp: base64Pfp
        }
        // send this object to register endpoint

        try {
            await axios.post("http://localhost:5000/account", {
                "user": newUser,
                "password": password
            });
            // redirect to login page
            navigate("/")

        } catch (e: any) {
            if (e.response.status === 400) {
                setError("Some information is wrong.")
            } else if (e.response.status === 409) {
                setError("That email is already associated with an account!")
            }
            console.error(e);
            console.error(e.response.status)
        }


        // redirect to the 
    }

    function handleProfilePictureChange(e: any) {
        e.preventDefault();
        setCurrentProfilePreview(URL.createObjectURL(e.target.files[0]));
        setProfilePicture(e.target.files[0]);
    }

    function showPassword() {
        setVisiblePassword(!visiblePassword)
        // if (visiblePassword == true) {
        //     setVisiblePassword(false);
        // }
        // else {
        //     setVisiblePassword(true);
        // }
    }

    return (
        <LandingBg>
            <div className="register-page">
                <Form>
                    <h3 className="register-create-account">Create Account</h3>
                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="register-entry-title">Email Address</Form.Label>
                        <Form.Control className="register-entry-box" type="email" placeholder="Enter email" 
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="register-entry-title">Password</Form.Label>

                    <div className="register-pass-wrapper">
                        <Form.Control className="register-entry-box" type={visiblePassword ? "email" : "password"} placeholder="Enter password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    <i onClick={showPassword}>
                        <FontAwesomeIcon icon={faEye} />
                    </i>
                    </div>

                    </Form.Group>

                    {/* name */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="register-entry-title">Name</Form.Label>
                        <Form.Control className="register-entry-box" type="text" placeholder="Enter name" 
                                                    onChange={(e) => {
                                                        setName(e.target.value)
                                                    }}
                        />
                    </Form.Group>

                    {/* profile picture */}
                    {/* <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label className="register-entry-title">Profile Picture (optional)</Form.Label>
                        <Form.Control className="register-entry-box" type="file" accept={".png, .jpg"} onChange={handleProfilePictureChange} />
                        <Form.Label className="register-preview-title">Preview</Form.Label>
                        <div>
                            {currentProfilePreview.length > 0 ? <ProfilePicture img={currentProfilePreview} /> : <ProfilePicture img={"./placeholder-image.jpg"} />}
                        </div>
                    </Form.Group> */}
                </Form>
                <div>
                    <span className='error'>
                        {error}
                    </span>
                </div>
                <Button className="register-submit" onClick={handleRegister}>
                    Create Account
                </Button>
                <p className="Login-sign-up">
                    Already have an account? <a className="Login-sign-up-link" href="/">Login here!</a>
                </p>
            </div>
        </LandingBg>
    )
}