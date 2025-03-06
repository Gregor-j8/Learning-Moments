import { useEffect, useState } from "react"
import { getAllUsersEdit } from "../../services/postDetail"
import { EditUsersProfile } from "../../services/User"
import { useNavigate } from "react-router-dom"

export const EditProfile = ({currentUser}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})


    useEffect(() => {
        getAllUsersEdit(currentUser?.id).then(user => {
                const userdata = user[0]
                setUser(userdata)
        })}, [currentUser])
    
        const updatingProfile = (event) => {
            event.preventDefault()
    
            const AddProfile = {
                id: currentUser.id,
                fullName: user.fullName,
                cohort: user.cohort,
            }
    
            if (!AddProfile.cohort) {
                return 
            } else {
                EditUsersProfile(AddProfile).then(() => {
                    navigate(`/profile/${currentUser.id}`)   
    })}}

    return ( 
    <form className="flex flex-col flex-wrap w-full h-150 px-10 items-center">
        <h1 className="flex justify-center text-3xl p-5">Profile</h1>
            <div className="lg:bg-gray-900 flex flex-col flex-wrap w-3/4 h-90 justify-center items-center">
                <header className="flex flex-col w-75 pb-10 items-start">
                    <section className="flex m-3 justify-center">
                        <h2 className="text-gray-200 p-1">Author: </h2>
                        <input className="bg-gray-200 p-1" value={user?.fullName} onChange={(event) => {
                            const copy = {...user}
                            copy.fullName = event.target.value
                            setUser(copy)
                        }} required/>                  
                    </section>
                    <section className="flex m-3 justify-center">
                        <h3 className="text-gray-200 p-1">Cohort:</h3>    
                        <input className="bg-gray-200 p-1" value={user?.cohort}  onChange={(event) => {
                            const copy = {...user}
                            copy.cohort = event.target.value
                            setUser(copy)
                        }} required/>           
                    </section>
                </header>
                <div className="flex items-center justify-center">
                    <button className="flex w-36 mt-20 rounded-lg h-14 bg-gray-500 cursor-pointer p-2 justify-center items-center" 
                    onClick={updatingProfile}>Save</button>
            </div>      
        </div>
    </form>
    )}

