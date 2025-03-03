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
    <div className="flex w-full justify-center">
        <div className="flex flex-row w-9/12 flex-wrap">
            {userposts.map((post, index) => (
                <Posts key={index} posts={post} />
            ))}
        </div>
    </div>
    );
};
