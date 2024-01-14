import './profiles.css'
import './Login.css'
import ProfilePicture from '../components/profilePicture'
import CommonNavbar from '../components/CommonNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

function Statistic(props: {title: string, number: number}) {
    return(
        <div>
            <h3>{props.title}</h3>
            <div>
            {props.number}
            </div>
        </div>
        )
}

function Profile() {
    return(
        <div>
            <CommonNavbar/>
                <div className="profile-box-container">
                    {/* navbar */}
                    <div>
                        <h3 className="profile-title">Profile</h3>
                        <div>
                            {/* profile picture */}
                            <ProfilePicture img="./placeholder-image.jpg"/>
                        </div>
                        {/* name */}
                        <h3 className="profile-info">Name</h3>
                        {/* email */}
                        <h3 className="profile-info">Email</h3>
                        {/* points */}
                        <h3 className="profile-info">Points</h3>

                        <div className="profile-grid">
                            <Statistic title="Bought" number={5}/>
                            <Statistic title="Cooked" number={6}/>
                            <Statistic title="Trashed" number={7}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Profile