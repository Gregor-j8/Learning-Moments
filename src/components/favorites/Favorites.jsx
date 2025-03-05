import { useEffect, useState } from "react"
import { getUserPostsFavorites } from "../../services/Posts"

export const Favorites = ({currentUser}) => {
    const [favoritePosts, setFavoritePosts] = useState([])
    useEffect(() => {
        getUserPostsFavorites(currentUser.id).then(data => {
            setFavoritePosts(data)
        })
    }, [currentUser])

    return ( 
        <>
            {favoritePosts.map(posts => {
               return ( 
                <div className=" ">
                    <div className="">
                        <section className="  ">
                            <header className="">{posts?.user?.fullName}</header>
                            <main>
                                <p className="">{posts?.post.body}</p>
                                <p className="">{posts?.post.likes}</p>
                                <p className="">{posts?.post.topics}</p>
                            </main>
                        </section>
                    </div>

                </div> )
            })}
        </>
    )
}
