"use client"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

const GoogleButton=()=>{
    const searchParams =useSearchParams()
    const callbackUrl=searchParams.get("callbalckUrl")||'/profile';



    return(
        <button onClick={()=>signIn('google',{callbackUrl})}>
            Sign In with Google
        </button>
    )
}
export {GoogleButton}