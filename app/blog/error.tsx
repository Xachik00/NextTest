"use client"

export  default function ErrorWrapper({error}:{error:Error}){
    return <h2>Oopss!!!{error.message}</h2>
}