import React, { useEffect, useState } from "react"
import { getAllPostUsers, DeletePost } from "../../services/Posts"
export const Posts = ({ posts, currentUser }) => {
    const [user, setUser] = useState()
    useEffect(() => {
       getAllPostUsers(currentUser?.id).then(data => {
        setUser(data)
    }) 
    }, [])
    
    const DeleteData = () => {
        DeletePost(currentUser.id)
    }

    return(
        <>
        {currentUser?.id !== user?.user?.id ? 
        <>
        <section className="flex w-86 m-8 lg:bg-gray-900 rounded-lg justify-center">
            <div>
                <h2  className="flex w-77 justify-center p-2 text-gray-200">{posts.title}</h2>
                <p className="flex w-77 justify-center p-2 text-gray-200">{posts.topic?.name}</p> 
                <p className="flex w-77 items-center p-3 text-gray-200">{posts.body}</p>  
                <section className="flex w-77 p-2 text-gray-200"><button className="flex w-45">Heart placeHolder</button>
                <p className="flex w-77 p-2 text-gray-200">Liked by: {posts.likes} users</p> 
                <button onClick={DeleteData}>Delete</button>
                </section>  
            </div>
        </section>
    </> : <section className="flex w-86 m-8 lg:bg-gray-900 rounded-lg justify-center">
        <div>
               <h2  className="flex w-77 justify-center p-2 text-gray-200">{posts.title}</h2>
               <p className="flex w-77 justify-center p-2 text-gray-200">{posts.topic?.name}</p> 
              <p className="flex w-77 items-center p-3 text-gray-200">{posts.body}</p>  
              <section className="flex w-77 p-2 text-gray-200"><button className="flex w-45">Heart placeHolder</button>
              <p className="flex w-77 p-2 text-gray-200">Liked by: {posts.likes} users</p> 
              </section>  
        </div>
    </section>}
        </>
    )
}