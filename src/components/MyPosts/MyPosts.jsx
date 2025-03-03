import React, { useEffect, useState } from "react";
import { getAllPostDetails } from "../../services/Posts";
import { Posts } from "../Posts/Posts";

export const MyPosts = ({ currentUser }) => {
    const [userposts, setUserPosts] = useState([]);
    console.log(currentUser);

    useEffect(() => {
        getAllPostDetails(currentUser.id).then(data => {
            setUserPosts(data);
        });
    }, [currentUser.id]);

    console.log(userposts);

    return (
        <div>
            {userposts.map((post, index) => (
                <Posts key={index} posts={post} />
            ))}
        </div>
    );
};
