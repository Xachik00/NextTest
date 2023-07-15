"use client"
import  img from '@/image/clip1.webp'
import { Image } from '@/components/Image'

export default function Home() {
  console.log(img);
  
  return (<>
    <h1>Welcome to NextJS world</h1>
    <Image
      initial
      animate
      alt="Picture of the author"
      src={img}
      sizes='100vw'
      priority
    />
    </>)
}
