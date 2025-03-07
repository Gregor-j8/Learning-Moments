import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "../../app.css"

export const NavBar = ({currentUser}) => {
    const navigate = useNavigate()

    return (
        <ul className="flex justify-around p-4 bg-gray-900 text-gray-200">
            <Link to="/allposts"><li>All Posts</li></Link>
            <Link to="/newposts"><li>New Posts</li></Link>
            <Link to="/myposts"><li>My Posts</li></Link>
            <Link to="/favorites"><li>Favorites</li></Link>
            <Link to={`/profile/${currentUser?.id}`}><li>Profile</li></Link>
            {localStorage.getItem("learning_user") ? (
  <li>
    <Link
      to=""
      onClick={() => {
        localStorage.removeItem("learning_user")
        navigate("/login", { replace: true })
      }}
    >
      Logout
    </Link>
  </li>
) : (
  ""
)}
</ul>
    )
}