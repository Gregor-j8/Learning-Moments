export const getAllPosts = async() => {
    return fetch('http://localhost:8088/posts?_expand=topic').then(res => res.json())
}
export const getAllTopics = async() => {
    return fetch('http://localhost:8088/topics').then(res => res.json())
}