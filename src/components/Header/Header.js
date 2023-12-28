import { Link } from "react-router-dom"
import style from './Header.module.css'


function Header() {
    return ( 
        <div className={style.wrapper}>
            <Link to="/">
                <img className={style.wrapper__logo} src="images/logo.svg" alt=""/>
            </Link>
            <div className={style.wrapper__block}>
                <Link className={style.wrapper__block_link} to="/">Main Page</Link>
                <Link className={style.wrapper__block_link} to="/category">Categories</Link>
                <Link className={style.wrapper__block_link} to="allproducts">All Products</Link>
                <Link className={style.wrapper__block_link} to="/discount">All Sales</Link>
            </div>
            <Link to="/basket">
                <img className={style.wrapper__basket} src="images/basket.svg" alt=""/>
            </Link>
        </div>
     );
}

export default Header