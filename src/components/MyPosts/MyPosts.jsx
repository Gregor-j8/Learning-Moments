import React, { useEffect, useState } from "react";
import { getAllMyPostDetails } from "../../services/Posts";
import { Posts } from "../Posts/Posts";

export const MyPosts = ({ currentUser }) => {
    const [userposts, setUserPosts] = useState([]);

    useEffect(() => {
        getAllMyPostDetails(currentUser.id).then(data => {
            setUserPosts(data);
        });
    }, [currentUser ]);

    return (
    <div className="flex w-full justify-center">
        <div className="flex flex-row w-9/12 flex-wrap">
            {userposts.map((post) => (
                <Posts key={post.id} posts={post} currentUser={currentUser} />
            ))}
        </div>
    </div>
    );
};
