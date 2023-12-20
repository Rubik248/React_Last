import BasketLogo from "../BasketLogo/BasketLogo"
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import s from "./Header.module.css"




function Header() {







    return (
        <div className={s.header}>
            <Logo/>
            <Nav/>
            <BasketLogo/>
        </div>
    )
}


export default Header