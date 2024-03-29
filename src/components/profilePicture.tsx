import { Col, Image } from "react-bootstrap";
import "./profilePicture.css"

export default function ProfilePicture({ img }: { img?: string }) {
    const placeholder = "./placeholder-image.jpg";
    if (img === undefined || img.length === 0) {
        img = placeholder
    }
    return (
        <Image src={img} className="rounded-pfp" alt="profile picture" />
    )
}