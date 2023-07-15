import Link from "next/link";

export default function ContactLayout({
    children,
}:{
    children:React.ReactNode;
}){
    return <div>
    <h1>Conatct page </h1>
    <ul>
        <li><Link href="/contact/about">About</Link></li>
        <li><Link href="/contact/team">Team</Link></li>
    </ul>
    {children}
    </div>
}