"use client"
import { getPostsBySearch } from "@/services/getPosts";
// import { usePosts } from "@/store"
import { FormEventHandler, useState } from "react"
import useSWR from 'swr';

const PostSearch =()=>{
    const {mutate}=useSWR("posts")
    const [search,setSearch]=useState('')
    // const getPostsBySearch=usePosts((state:any)=>state.getPostsBySearch)
    
    const hendleSubmit:FormEventHandler<HTMLFormElement>=async (e)=>{
        e.preventDefault()
        const posts=await getPostsBySearch(search)
        mutate(posts)
     }
    
    return (
        <form onSubmit={hendleSubmit}>
            <input type="search" placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    )
}
export { PostSearch}