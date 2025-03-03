import { useEffect, useState } from "react"
import { getAllTopics } from "../../services/Posts"

export const NewPosts = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getAllTopics().then(allTopics => {
        setTopics(allTopics)
    })}, [])

    return (
        <div className="flex  flex-col w-full items-center text-white bg-gray-300 min-h-screen px-0 py-30">
            <h1 className="text-4xl text-gray-900 p-9">New Post</h1>
            <form className="w-3/4 h-full flex  rounded-lg bg-gray-900 p-10">
                <fieldset className="flex flex-col w-full items-center p-2 text-l">
                    <div className="flex flew-row p-5">
                        <label className="flex flex-row w-6/12 p-1 justify-center">Title</label>
                        <input  className="bg-gray-300 text-black" type="text" />
                    </div> 
                    <div className="flex flew-row p-5">
                        <label className="flex p-2 w-6/12 justify-center text-l">Body</label>
                        <input  className="bg-gray-300 text-black" type="text" />
                    </div> 
                </fieldset>

                <fieldset className="flex flex-col w-full items-center p-2 text-l">
                    <select className="text-white" id="myTopics"><option className="text-black" value={0}>Choose A Topic</option>{topics.map(topic => {
                        return <option className="text-black" value={`${topic.id}`} key={`${topic.id}`}>{topic.name}</option>
                    })}
                    </select> 
                    <button className="w-35 mt-22 rounded-lg h-8 bg-gray-400">Save </button>
                    <div className="p-20"></div>
                </fieldset>
            </form>
        </div>
    )
}