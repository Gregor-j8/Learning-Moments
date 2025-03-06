import React from "react"
import { useEffect, useState } from "react"
import { getAllPostDetails } from "../../services/postDetail"
import { useNavigate, useParams } from "react-router-dom"

export const PostDetails = ({currentUser}) => {
    const navigate = useNavigate()
    const { postDetailsId } = useParams()
    const [PostDetail, setPostDetail] = useState({})
    useEffect(() => {
        getAllPostDetails(postDetailsId).then(posts => {
            const customerObj = posts[0]
            setPostDetail(customerObj)
        })
    }, [postDetailsId])
    return (
        <div className="flex w-full justify-center text-white bg-gray-300 min-h-screen px-0 py-35">
            <section className="w-3/4 h-full flex flex-col rounded-lg bg-gray-900 p-10">
                <header className=" flex w-full justify-center p-3 text-3xl">
                    <h1>{PostDetail.user?.fullName}</h1>
                </header>
                    <div className="flex flex-row w-full items-center p-2 text-l">
                        <span className="flex w-6/12 p-1 justify-center">
                            {PostDetail.title}
                        </span>
                        <span className="flex p-2 w-6/12 justify-center text-l">
                            {PostDetail.topic?.name}
                        </span>
                    </div>
                <div>
                    <div className="w-full min-h-full text-l px-20 py-5">{PostDetail.body}</div>
                    {currentUser.id !== PostDetail.user?.id
                        ? <footer className="flex justify-around text-l p-2">
                            <span>likes {PostDetail.likes}</span>
                            <span>{PostDetail.date}</span>
                        </footer>
                        : <footer className="flex justify-around text-l p-2">
                            <span>likes {PostDetail.likes}</span>
                            <span>{PostDetail.date}</span>
                            <button className="cursor-pointer" onClick={() => {navigate("edit")}}>Edit</button>
                        </footer>}
                </div>
            </section>
        </div>
    )
}