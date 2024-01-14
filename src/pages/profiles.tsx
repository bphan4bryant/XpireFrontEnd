import './profiles.css'
import './Login.css'
import ProfilePicture from '../components/profilePicture'
import CommonNavbar from '../components/CommonNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faCarrot, faTrashCan, faBasketShopping } from '@fortawesome/free-solid-svg-icons'

function Statistic(props: { title: string, number: number, icon: IconDefinition }) {
    return (
        <div>
            <h3>{props.title}</h3>
            <FontAwesomeIcon icon={props.icon} />
            <div>
                {props.number}
            </div>
        </div>
    )
}

function Profile() {
    return (
        <div>
            <CommonNavbar />
            <div className="profile-box-container">
                {/* navbar */}
                <div>
                    <h3 className="profile-title">Profile</h3>
                    <div>
                        {/* profile picture */}
                        <ProfilePicture img="./placeholder-image.jpg" />
                    </div>
                    {/* name */}
                    <h3 className="profile-info">Name</h3>
                    {/* email */}
                    <h3 className="profile-info">Email</h3>
                    {/* points */}
                    <h3 className="profile-info">Points: 10</h3>

                    <div className="profile-grid">
                        <Statistic title="Bought" number={5} icon={faBasketShopping} />
                        <Statistic title="Cooked" number={6} icon={faCarrot} />
                        <Statistic title="Trashed" number={7} icon={faTrashCan} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile