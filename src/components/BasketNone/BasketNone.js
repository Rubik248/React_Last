import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import style from './BasketNone.module.css'



function BasketNone() {
    return ( 
        <div className={style.wrapper}>
            <div className={style.wrapper__block}>
                <h1  className={style.wrapper__block_title}>ShoppingCart</h1>
                <Link to='/'>
                    <Button children="Back to the store" className="buttonSecond"/>
                </Link>
            </div>
            <p className={style.wrapper__block_text}>Looks like you have no items in your basket currently.</p>
            <Link to='/'>
                <Button children="Continue Shopping" className="buttonFirst"/>
            </Link>
        </div>
     );
}

export default BasketNone;