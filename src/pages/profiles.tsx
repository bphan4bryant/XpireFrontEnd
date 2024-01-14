import './profiles.css'
import './Login.css'
import ProfilePicture from '../components/profilePicture'
import CommonNavbar from '../components/CommonNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faCarrot, faTrashCan, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { User } from '../types/types'

interface UserProfile extends User {
    statistics: {
        ingredients: number,
        dishes: number,
        trashed: number,
    }
}

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

    const baseURL = import.meta.env.VITE_BASE_URL + '/users/' + import.meta.env.VITE_DEFAULT_USER;

    const [user, setUser] = useState<UserProfile | null>();

    const getUserInfo = async () => {
        const token = localStorage.getItem("JWT") ?? ""

        await axios.get(baseURL, {
            headers: {
                "token": token
            }
        })
            .then((res) => {
                // console.log(res.data.data);
                setUser(res.data.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        // get the user data
        getUserInfo();
    }, [])

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
                    <h3 className="profile-info">{user?.name}</h3>
                    {/* email */}
                    <h3 className="profile-info">{user?.id}</h3>
                    {/* points */}
                    <h3 className="profile-info">Points: {user?.points}</h3>

                    <div className="profile-grid">
                        <Statistic title="Bought" number={user?.statistics.ingredients ?? 0} icon={faBasketShopping} />
                        <Statistic title="Cooked" number={user?.statistics.dishes ?? 0} icon={faCarrot} />
                        <Statistic title="Trashed" number={user?.statistics.trashed ?? 0} icon={faTrashCan} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile