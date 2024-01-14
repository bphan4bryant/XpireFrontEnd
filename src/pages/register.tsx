import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProfilePicture from '../components/profilePicture';
import React, { useState } from 'react';
import "./register.css";
import LandingBg from '../components/LandingBg';
import { fileToBase64 } from '../util/util';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const [currentProfilePreview, setCurrentProfilePreview] = useState("");

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
            await axios.post(import.meta.env.VITE_BASE_URL + "/account", {
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

    return (
        <LandingBg>
            <div className="register-page">
                <Form>
                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </Form.Group>

                    {/* name */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name"
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </Form.Group>

                    {/* profile picture */}
                    {/* <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Profile Picture (optional)</Form.Label>
                        <Form.Control type="file" accept={".png, .jpg"} onChange={handleProfilePictureChange} />
                        <Form.Label>Preview</Form.Label>
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
                <Button onClick={handleRegister}>
                    Submit
                </Button>
            </div>
        </LandingBg>
    )
}