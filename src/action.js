import { redirect } from "react-router-dom"

const url = process.env.REACT_APP_API_KEY

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

export const renameFolder = async ({params, request})=>{
    const formData = await request.formData()
    const folder = {
        title: formData.get('title')
    }
    await fetch(url+'/folders/'+params.id, {
        method: 'put',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(folder)
    })
    return redirect('/users')
}

export const sendMessage = async ({request, params})=>{
    const formData = await request.formData()
    const message = {
        zap: formData.get('zap')
    }
    await fetch(url+'/chats/'+params.id, {
        method: 'put',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    return redirect('/users')
}

export const newChat = async ({request})=>{
    const formData = await request.formData()
    const chat = {
        recipients: formData.get('recipients'),
        subject: formData.get('subject'),
        zap: formData.get('zap')
    }
    await fetch(url+'/chats', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    })
    return redirect('/users')
}