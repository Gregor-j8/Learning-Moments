import { useState, useEffect } from "react"
import { getAllMyPostDetails } from "../../services/postDetail"
import { useNavigate, useParams } from "react-router-dom"

export const Profile = ({currentUser}) => {
    const navigate = useNavigate()
    const { userId } = useParams()
    const [userProfile, setUserProfile] = useState([])
    const [user, setUser] = useState(0)
    const [currentUserLogin, SetcurrentUserLogin] = useState(false)

    useEffect(() => {
        const chosenUserId = parseInt(userId)
        console.log("Fetching data for user:", userId);
    if (chosenUserId === currentUser.id) {
        SetcurrentUserLogin(true)
        setUser(currentUser.id)
    } else if (chosenUserId !== currentUser.id) {
        setUser(chosenUserId)
    }
      }, [userId, currentUser]);



    useEffect(() => {
        user !== 0 && getAllMyPostDetails(user).then(data => {
            setUserProfile(data)
        })
    }, [user])

    const editProfile = () => {
        navigate("/profile/edit")
    }

    return (
        !currentUserLogin ? <div className="flex flex-col flex-wrap w-full h-150 px-10 items-center">
        <h1 className="flex justify-center text-3xl p-5">Profile</h1>
        {userProfile.map(profile => {
            return (
            <div key={profile.id} className="lg:bg-gray-900 flex flex-col flex-wrap w-3/4 h-90 px-10 justify-center">
                <header className="flex justify-between pb-25">
                    <section className="flex pt-3 pl-10">
                        <h2 className="text-gray-200 p-1">Author: </h2>
                        <h2 className="text-gray-200 p-1"> {profile?.user.fullName}</h2>                        
                    </section>
                    <section className="flex pt-3 pr-10">
                        <h3 className="text-gray-200 p-1">Cohort:</h3>                    
                        <h3 className="text-gray-200 p-1"> {profile?.user.cohort}</h3>                         
                    </section>
                </header>
                <section className="lg:bg-gray-500 w-2/12 rounded-lg p-4">
                    <p className="text-gray-200 ">Number of Posts:  </p>
                    <p className="text-gray-200 pl-4">{profile?.userPosts?.length}</p>
                </section>
            </div>
            )})}
    </div> : <div className="flex flex-col flex-wrap w-full h-150 px-10 items-center">
        <h1 className="flex justify-center text-3xl p-5">Profile</h1>
        {userProfile.map(profile => {
            return (
            <div key={profile.id} className="lg:bg-gray-900 flex flex-col flex-wrap w-3/4 h-90 px-10 justify-center">
                <header className="flex justify-around pb-25">
                    <section className="flex pt-3 pl-10">
                        <h2 className="text-gray-200 p-1">Author: </h2>
                        <h2 className="text-gray-200 p-1"> {profile?.user.fullName}</h2>                        
                    </section>
                    <section className="flex pt-3 pr-10">
                        <h3 className="text-gray-200 p-1">Cohort:</h3>                    
                        <h3 className="text-gray-200 p-1"> {profile?.user.cohort}</h3>                         
                    </section>
                </header>
                <div className="flex justify-around h-15">
                    <section className="h-15 flex lg:bg-gray-500 w-2/12 rounded-lg p-4">
                        <p className="text-gray-200 ">Number of Posts:  </p>
                        <p className="text-gray-200 pl-4">{profile?.userPosts?.length}</p>
                    </section>
                    <section className="  flex justify-end items-end">
                        <button className="flex w-35 mt-22 rounded-lg h-15 bg-gray-500 cursor-pointer p-2 justify-center items-center"
                         onClick={editProfile}>Edit</button>
                    </section>
                  </div>      
            </div>
            )})}
    </div>
    
    )
}