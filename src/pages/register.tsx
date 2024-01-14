import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProfilePicture from '../components/profilePicture';
import React, { useState } from 'react';
import "./register.css";
import LandingBg from '../components/LandingBg';

export default function RegisterPage() {
    const [currentProfilePreview, setCurrentProfilePreview] = useState("");


    function handleProfilePictureChange(e: any) {
        e.preventDefault();
        setCurrentProfilePreview(URL.createObjectURL(e.target.files[0]));
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
                        <Form.Control className="register-entry-box" type="password" placeholder="Enter password" />
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
                    Submit
                </Button>
            </div>
        </LandingBg>
    )
}