export const getAllPosts = async() => {
    return fetch('http://localhost:8088/posts?_expand=topic').then(res => res.json())
}
export const getAllPostDetails = async(postDetailsId) => {
    return fetch(`http://localhost:8088/posts?userId=${postDetailsId}&_expand=user&_embed=userPosts&_expand=topic`).then(res => res.json())
}
export const getAllTopics = async() => {
    return fetch('http://localhost:8088/topics').then(res => res.json())
}

export const updatePosts = async(post) => {
    return fetch('http://localhost:8088/posts', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }).then((res) => res.json())}