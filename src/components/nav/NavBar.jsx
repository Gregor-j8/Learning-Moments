import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "../../app.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="flex justify-around p-4 bg-gray-900 text-gray-200">
            <Link to="/allposts"><li>AllPosts</li></Link>
            <Link to="/newposts"><li>NewPosts</li></Link>
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