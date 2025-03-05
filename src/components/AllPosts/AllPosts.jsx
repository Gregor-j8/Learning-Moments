import React from "react"
import { useEffect, useState } from "react"
import { getAllPosts, getAllTopics,  } from "../../services/Posts"
import { Posts } from "../Posts/Posts"
import "../../app.css"


export const AllPosts = ({currentUser}) => {
    const [allPosts, setAllPosts] = useState([])
    const [allTopics, setAllTopics] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [filteredTopics, setFilteredTopics] = useState(0)
    const [SearchTerm, setSearchTerm] = useState('')


    useEffect(() => {
        getAllPosts().then(postsArray => {
            setAllPosts(postsArray)
        })}, [])
    useEffect(() => {
        getAllTopics().then(postsArray => {
            setAllTopics(postsArray)
        })}, [])


        useEffect(() => {
            let filteredResults = allPosts

            if (filteredTopics) {
                filteredResults = filteredResults.filter((post) => 
                    post.topic.id == filteredTopics
                )
            }

            if (SearchTerm) {
                filteredResults = filteredResults.filter((post) => 
                    post.title.toLowerCase().includes(SearchTerm.toLowerCase())
                )
            }

            setFilteredPosts(filteredResults)
        }, [SearchTerm, filteredTopics, allPosts])

    return <>
        <div className="flex w-full justify-center">
            <div className="flex w-50">
                <select onChange={(event) => setFilteredTopics(event.target.value)}>
                    <option >Find Topics</option>{allTopics.map(topic => (
                    <option key={topic.id} value={topic.id}>{topic.name}</option>))}
                </select>
                <input className="w-50 h-8 lg:bg-gray-200" type="text" placeholder="Search" onChange={(event) => {setSearchTerm(event.target.value)}}/>
            </div>
        </div>
        <div className="flex flex-wrap w-full justify-center">
            <div className="flex flex-wrap w-3/4 h-30 justify-center" >
                {filteredPosts.map(posts => {
                    return <Posts posts={posts} key={posts.id} currentUser={currentUser} />
                })}
            </div>
        </div>
    </>
}