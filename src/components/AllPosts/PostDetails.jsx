import { useEffect, useState } from "react"
import { getAllPostDetails } from "../../services/Posts"
import { useParams } from "react-router-dom"

export const PostDetails = () => {
    const { postDetailsId } = useParams()
    const [PostDetail, setPostDetail] = useState({})

    useEffect(() => {
        getAllPostDetails(postDetailsId).then(posts => {
            const customerObj = posts[0]
            setPostDetail(customerObj)
        })
    }, [postDetailsId])

    return (
        <div>
            <section>
                <header>
                    <h1>{PostDetail.user?.fullName}</h1>
                    </header>
                    <div>
                        <span>
                            {PostDetail.title}
                        </span>
                        <span>
                            {PostDetail.topic?.name}
                        </span>
                    </div>
                <div>
                    <div>{PostDetail.body}</div>
                    <footer>{PostDetail.likes}{PostDetail.date}</footer>
                </div>
            </section>
        </div>
    )
}