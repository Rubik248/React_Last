import s from "./Nav.module.css" 


function Nav() {
    return (
        


        <div className={s.wrapper}>
            <a className={s.link} href="/">Main Page</a>
            <a className={s.link} href="/categories">Categories</a>
            <a className={s.link} href="#">All products</a>
            <a className={s.link} href="#">All sales</a>
        </div>
    )
}


export default Nav