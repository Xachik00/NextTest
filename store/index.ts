import { getAllPosts, getPostsBySearch } from '@/services/getPosts';
import { create} from 'zustand'

type usePosts ={
    posts :any[];
    loading:boolean;
    getAllPosts:()=>Promise<void>;
    getPostsBySearch:(value:string)=>Promise<void>;
}

export const usePosts = create ((set)=>({
    posts:[],
    loading:false,
    getAllPosts:async()=>{
        set({loading:true})
        const posts = await getAllPosts()
        set({posts,loading:false})
    },
    getPostsBySearch:async (search:string)=>{
        set({loading:true})
        const posts = await getPostsBySearch(search)
        set({posts,loading:false})
    }
}))