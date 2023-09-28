const url = 'http://localhost:4000'

export const usersLoader = async ()=>{
    const res = await fetch(url+'/users')
    const users = await res.json()
    return users
}