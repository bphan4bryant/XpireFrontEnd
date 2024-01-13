import { Col, Image } from "react-bootstrap";
import "./profilePicture.css"

export default function ProfilePicture({ img }: { img: string }) {
    return (
        <Image src={img} className="rounded-pfp" alt="profile picture" />
    )
}