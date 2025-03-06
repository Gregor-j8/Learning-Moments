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
                <div className="flex flex-wrap w-full justify-center mt-15 mb-8">
                    <div className="flex flex-col flex-wrap w-2/4 h-30 px-10 justify-center">
                        <section className="flex flex-col items-center lg:bg-gray-900 py-5 rounded-lg">
                            <header className="flex text-gray-200 p-2">{posts?.user?.fullName}</header>
                            <main >
                                <p className=" flex text-gray-200 p-1">{posts?.post.body}</p>
                                <section className="flex flex-row justify-around p-1">
                                    <p className="text-gray-200 p-1">{posts?.post.likes}</p>
                                    <p className=" text-gray-200 items-right p-1">{posts?.post.title}</p>
                                </section>

                            </main>
                        </section>
                    </div>

                </div> )
            })}
        </>
    )
}
// flex w-77 items-center p-3 text-gray-200 lg:bg-gray-900 rounded-lg