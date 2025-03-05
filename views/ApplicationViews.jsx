import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { AllPosts } from "../src/components/AllPosts/AllPosts"
import { NavBar } from "../src/components/nav/NavBar"
import { useState, useEffect } from "react"
import { PostDetails } from "../src/components/AllPosts/PostDetails"
import { NewPosts } from "../src/components/NewPosts/NewPosts"
import { MyPosts } from "../src/components/MyPosts/MyPosts"
import { EditPosts } from "../src/components/AllPosts/EditPosts"


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
      const localLearningUser = localStorage.getItem("learning_user")
      const learningUserObject = JSON.parse(localLearningUser)
      setCurrentUser(learningUserObject)
    }, [])

    return <>
        <Routes>
        <Route path="/" element={
                <>
                    <NavBar />
                    <Outlet />
                </>
                    }
                >
                <Route path="allposts">
                    <Route index element={<AllPosts currentUser={currentUser}/>}/>
                    <Route path=":postDetailsId" element={<PostDetails currentUser={currentUser}/>}/>
                    <Route path=":postDetailsId/edit" element={<EditPosts currentUser={currentUser}/>}/>
                    
                </Route>
                <Route path="newposts" element={<NewPosts currentUser={currentUser}/>}/>
                    <Route path="myposts" element={<MyPosts currentUser={currentUser}/>}/>
            </Route>
        </Routes>
    </>
}