export const getAllPostDetails = async(postDetailsId) => {
    return fetch(`http://localhost:8088/posts?id=${postDetailsId}&_expand=user&_embed=userPosts&_expand=topic`).then(res => res.json())
}
export const getAllMyPostDetails = async(postDetailsId) => {
    return fetch(`http://localhost:8088/posts?userId=${postDetailsId}&_expand=user&_embed=userPosts&_expand=topic`).then(res => res.json())
}
export const getAllUsersEdit = async(postDetailsId) => {
    return fetch(`http://localhost:8088/users?${postDetailsId}`).then(res => res.json())
}