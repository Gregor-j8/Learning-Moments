import React from "react"
import { useEffect, useState } from "react"
import { getAllTopics, NewPost } from "../../services/Posts"
import { useNavigate } from "react-router-dom"

export const NewPosts = ({currentUser}) => {
    const [topics, setTopics] = useState([])
    const [newPost, setNewPost] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getAllTopics().then(allTopics => {
        setTopics(allTopics)
    })}, [])

        const addingNewPost = (event) => {
        event.preventDefault()
        const currentDate = new Date().toLocaleDateString()
        const userId = currentUser.id

        const AddPost = {
            title: newPost.title,
            body: newPost.body,
            userId: userId,
            topicId: newPost.topic, 
            date: currentDate,
            likes: 0
        }

        if (!AddPost.topicId) {
            return 
        } else {
            NewPost(AddPost).then(() => {
                navigate(`/allposts`)   
})}
}
    return (
        <div className="flex flex-col w-full items-center text-white bg-gray-300 min-h-screen px-0 py-30">
            <h1 className="text-4xl text-gray-900 p-9">New Post</h1>
            <form className="w-3/4 h-full flex  rounded-lg bg-gray-900 p-10">
                <fieldset className="flex flex-col w-full items-center p-2 text-l">
                    <div className="flex flew-row p-5">
                        <label className="flex flex-row w-6/12 p-1 justify-center">Title</label>
                        <input value={newPost.title} className="bg-gray-300 text-black" type="text" onChange={(event) => {
                            const copy = {...newPost}
                            copy.title = event.target.value
                            setNewPost(copy)
                        }} required/>
                    </div> 
                    <div className="flex flew-row p-5">
                        <label className="flex p-2 w-6/12 justify-center text-l">Body</label>
                        <input value={newPost.body} className="bg-gray-300 text-black" type="text" onChange={(events) => {
                            const copy = {...newPost}
                            copy.body = events.target.value
                            setNewPost(copy)
                        }} required />
                    </div> 
                </fieldset>
                <fieldset className="flex flex-col w-full items-center p-2 text-l">
                    <select className="text-white" id="myTopics" onChange={(events) => {
                            const copy = {...newPost}
                            copy.topic = parseInt(events.target.value)
                            setNewPost(copy)
                        }} required><option className="text-black" value={0}>Choose A Topic</option>{topics.map(topic => {
                        return <option className="text-black" value={topic.id} key={topic.id}>{topic.name}</option>
                    })}
                    </select> 
                    <button className="w-35 mt-22 rounded-lg h-8 bg-gray-400 cursor-pointer" onClick={addingNewPost}>Save </button>
                    <div className="p-20"></div>
                </fieldset>
            </form>
        </div>
    )
}
