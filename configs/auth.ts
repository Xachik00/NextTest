import { AuthOptions,User } from "next-auth";
import GoggleProvider from 'next-auth/providers/google'
import Credentials from "next-auth/providers/credentials";
import {users}  from "@/data/users/route";
// import {users} from '@/data/users'

export const authConfig:AuthOptions={
    providers:[
        GoggleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_SECRET!,
        }),
        Credentials({
            credentials:{
                email:{label:'email',type:'email',required:true},
                password:{label:'password',type:'password',required:true}
            },
            async authorize(credentials){
                if(!credentials?.email||!credentials?.password) return null;
                const currentUser=users?.find((user:any)=>user.email===credentials.email)
                if(currentUser&&currentUser.password===credentials.password){
                    const { password,...userWithoupass}= currentUser ;
                    return userWithoupass as any; 
                }
                return null
            }
        })
    ],
    pages:{
        signIn:'/signin'
    }

}