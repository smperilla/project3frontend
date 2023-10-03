const url = 'http://localhost:4000'

export const usersLoader = async ()=>{
    const res = await fetch(url+'/users/6515dc9ffc1ca272ca121d28')
    const users = await res.json()
    return users
}

