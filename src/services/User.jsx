export const getAllUsers = async() => {
    return fetch('http://localhost:8088/users').then(res => res.json())
}

export const EditUsersProfile = async(user) => {
    return fetch(`http://localhost:8088/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((res) => res.json())}