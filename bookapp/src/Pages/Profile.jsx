import { useContext } from "react"
import { BookContext } from "../main"

export const Profile = () =>{
    const { profileData} = useContext(BookContext)
    return(
        <div>
            <h3>Profile</h3>
            <img className="profileImg" src={profileData?.img}/>
            <p><strong>{profileData?.name}</strong></p>
            <p>{profileData?.bio}</p>
        </div>
    )
}