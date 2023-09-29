import { redirect } from "react-router-dom"

const url = 'http://localhost:4000'

export const createFolder = async ({request})=>{
    const formData = await request.formData()
    const folder = {
        title: formData.get('title')
    }
    await fetch(url+'/folders', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(folder)
    })
    return redirect('/users')
}