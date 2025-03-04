export const getAllPosts = async() => {
    return fetch('http://localhost:8088/posts?_expand=topic').then(res => res.json())
}
export const getAllPostDetails = async(postDetailsId) => {
    return fetch(`http://localhost:8088/posts?id=${postDetailsId}&_expand=user&_embed=userPosts&_expand=topic`).then(res => res.json())
}
export const getAllPostUsers = async(postDetailsId) => {
    return fetch(`http://localhost:8088/posts?id=${postDetailsId}&_expand=user&`).then(res => res.json())
}
export const getAllTopics = async() => {
    return fetch('http://localhost:8088/topics').then(res => res.json())
}

export const NewPost = async(post) => {
    return fetch('http://localhost:8088/posts', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }).then((res) => res.json())}


export const updatePosts = async(post) => {
    return fetch(`http://localhost:8088/posts/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }).then((res) => res.json())}

export const DeletePost = async(postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE", })
      }
