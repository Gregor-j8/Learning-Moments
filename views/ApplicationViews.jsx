import { Outlet, Route, Routes } from "react-router-dom"
import { AllPosts } from "../src/components/AllPosts/AllPosts"
import { NavBar } from "../src/components/nav/NavBar"
import { useState, useEffect } from "react"
import { PostDetails } from "../src/components/AllPosts/PostDetails"


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
                    <Route index element={<AllPosts />} />
                    <Route path=":postDetailsId" element={<PostDetails />} />
                </Route>
            </Route>
        </Routes>
    </>
}