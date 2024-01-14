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
                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    {/* name */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    {/* profile picture */}
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Profile Picture (optional)</Form.Label>
                        <Form.Control type="file" accept={".png, .jpg"} onChange={handleProfilePictureChange} />
                        <Form.Label>Preview</Form.Label>
                        <div>
                            {currentProfilePreview.length > 0 ? <ProfilePicture img={currentProfilePreview} /> : <ProfilePicture img={"./placeholder-image.jpg"} />}

                        </div>
                    </Form.Group>
                </Form>
                <Button>
                    Submit
                </Button>
            </div>
        </LandingBg>
    )
}