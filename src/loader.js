const url = process.env.REACT_APP_API_KEY

export const usersLoader = async ({params})=>{
    const res = await fetch(url+'/users/'+params.id)
    const users = await res.json()
    return users
}

// export const usersLoader = async ()=>{
//     const res = await fetch(url+'/users/6515dc9ffc1ca272ca121d28')
//     const users = await res.json()
//     return users
// }

