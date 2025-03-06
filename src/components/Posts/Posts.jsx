import React, { useEffect, useState } from "react"
import { NewLikedPost, DeletePost, getUserPosts, DeleteLikes } from "../../services/Posts"
import { Link, useNavigate } from "react-router-dom"

export const Posts = ({ posts, currentUser }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [heart, setHeart] = useState(false);
    const [likedByUser, SetLikedByUser] = useState({});

    const HandleLike = () => {
        const copy = { ...likedByUser };
        copy.userId = currentUser.id;
        copy.postId = posts?.id;
        copy.isLiked = true; 

        if (!copy.userId || !copy.postId) return;

        SetLikedByUser(copy);
        likedPosts();
        setHeart(true);
    };

    const toggleLike = () => setHeart(prevHeart => !prevHeart);

    const IsLiked = () => heart ? <FilledHeartIcon /> : <UnFilledHeartIcon />;

    useEffect(() => {
        getUserPosts(currentUser.id).then(setUser);
    }, [currentUser]);

    const isPostLiked = user.some(users => 
        users.userId === currentUser?.id && users.postId === posts.id && users.isLiked === true
    );

    useEffect(() => {
        setHeart(isPostLiked);
    }, [isPostLiked]);

    const DeleteData = () => {
        DeletePost(posts.id);
        navigate("/allposts");
    };

    const HandleDeleteCheck = () => {
        if (heart && (!currentUser.id || !posts?.id)) {
            setHeart(false);
        } else if (heart && (currentUser.id || posts?.id)) {
            setHeart(false);
            DeleteLikes(currentUser.id, posts.id);
        } else {
            HandleLike();
        }
    };

    const likedPosts = () => {
        if (!likedByUser.userId || !likedByUser.postId) return;

        let likedUserPost = {
            userId: likedByUser.userId,
            postId: likedByUser.postId,
            isLiked: true 
        };
        NewLikedPost(likedUserPost);
        setHeart(true);
    };

    return (
        <>
            {currentUser?.id === posts.userId ? (
                <section className="flex w-86 m-8 lg:bg-gray-900 rounded-lg justify-center">
                    <div>
                        <Link to={`../allposts/${posts.id}`} key={posts.id}>
                            <h2 className="flex w-77 justify-center p-2 text-gray-200">{posts.title}</h2>
                        </Link>
                        <p className="flex w-77 justify-center p-2 text-gray-200">{posts.topic?.name}</p>
                        <p className="flex w-77 items-center p-3 text-gray-200">{posts.body}</p>
                        <section className="flex w-77 p-2 text-gray-200">
                            <button className="flex w-30" onClick={() => HandleDeleteCheck()}>
                                <IsLiked />
                            </button>
                            <p className="flex w-77 p-2 text-gray-200">Liked by: {posts.likes} users</p>
                            <button className="cursor-pointer hover:bg-gray-400" onClick={DeleteData}>
                                <TrashCan />
                            </button>
                        </section>
                    </div>
                </section>
            ) : (
                <section className="flex w-86 m-8 lg:bg-gray-900 rounded-lg justify-center">
                    <div>
                        <Link to={`../allposts/${posts.id}`} key={posts.id}>
                            <h2 className="flex w-77 justify-center p-2 text-gray-200">{posts.title}</h2>
                        </Link>
                        <p className="flex w-77 justify-center p-2 text-gray-200">{posts.topic?.name}</p>
                        <p className="flex w-77 items-center p-3 text-gray-200">{posts.body}</p>
                        <section className="flex w-77 p-2 text-gray-200">
                            <button className="flex w-30" onClick={() => HandleDeleteCheck()}>
                                <IsLiked />
                            </button>
                            <p className="flex w-77 p-2 text-gray-200">Liked by: {posts.likes} users</p>
                        </section>
                    </div>
                </section>
            )}
        </>
    );
};

    



const TrashCan = () =>  {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="32" fill="grey" >
                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 
                96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 
                64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 
                16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2
                 16-16l0-224c0-8.8-7.2-16-16-16z"/>
            </svg>
        );
    };

    const FilledHeartIcon = () => {
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512" width="28" height="45" className="fill-red-500 cursor-pointer"
            >
                <path d="M462.3 62.7C407.5 8.6 324.8 24 272 76.6 219.2 24 136.5 8.6 81.7 62.7c-56.2 55.4-57.4 144.6-3.7 201.5l175.2 178.3c12.5 12.7 
                32.8 12.7 45.3 0L466 264.2c53.7-56.9 52.5-146.1-3.7-201.5z"/>
            </svg>
        );
    };
    const UnFilledHeartIcon = () => {
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512" 
                width="28" 
                height="45" 
                className="stroke-red-500 cursor-pointer hover:fill-red-500 hover:stroke-none transition-colors duration-300"
                fill="none" 
                stroke="red" 
                strokeWidth="40"
            >
                <path d="M462.3 62.7C407.5 8.6 324.8 24 272 76.6 219.2 24 136.5 8.6 81.7 62.7c-56.2 55.4-57.4 144.6-3.7 201.5l175.2 178.3c12.5 12.7 
                32.8 12.7 45.3 0L466 264.2c53.7-56.9 52.5-146.1-3.7-201.5z"/>
            </svg>
        );
    };
    