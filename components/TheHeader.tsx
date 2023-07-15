 import { Navigation } from "./Navigation"


const TheHeader=()=>{
    const navItems=[
        {label:"Home",href:"/"},
        {label:"Blog",href:"/blog"},
        {label:"Contact",href:"/contact"},
    ]
    return(
        <header>
            <Navigation navLinks={navItems}/>
        </header>
    )
}
export {TheHeader}