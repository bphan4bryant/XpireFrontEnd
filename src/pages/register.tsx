import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProfilePicture from '../components/profilePicture';
import React, { useState } from 'react';
import "./register.css";
import LandingBg from '../components/LandingBg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default function RegisterPage() {
    const [currentProfilePreview, setCurrentProfilePreview] = useState("");

    const [visiblePassword, setVisiblePassword] = useState(false);

    function handleProfilePictureChange(e: any) {
        e.preventDefault();
        setCurrentProfilePreview(URL.createObjectURL(e.target.files[0]));
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
                        <Form.Control className="register-entry-box" type="email" placeholder="Enter email" />
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="register-entry-title">Password</Form.Label>

                    <div className="register-pass-wrapper">
                        <Form.Control className="register-entry-box" type={visiblePassword ? "email" : "password"} placeholder="Enter password"/>
                    <i onClick={showPassword}>
                        <FontAwesomeIcon icon={faEye} />
                    </i>
                    </div>

                    </Form.Group>

                    {/* name */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="register-entry-title">Name</Form.Label>
                        <Form.Control className="register-entry-box" type="text" placeholder="Enter name" />
                    </Form.Group>

                    {/* profile picture */}
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label className="register-entry-title">Profile Picture (optional)</Form.Label>
                        <Form.Control className="register-entry-box" type="file" accept={".png, .jpg"} onChange={handleProfilePictureChange} />
                        <Form.Label className="register-preview-title">Preview</Form.Label>
                        <div>
                            {currentProfilePreview.length > 0 ? <ProfilePicture img={currentProfilePreview} /> : <ProfilePicture img={"./placeholder-image.jpg"} />}

                        </div>
                    </Form.Group>
                </Form>
                <Button className="register-submit">
                    Create Account
                </Button>
                <p className="Login-sign-up">
                    Already have an account? <a className="Login-sign-up-link" href="/">Login here!</a>
                </p>
            </div>
        </LandingBg>
    )
}