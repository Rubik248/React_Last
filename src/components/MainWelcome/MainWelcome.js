import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import style from "./MainWelcome.module.css"

function MainWelcome() {
    return (
        <div className={style.wrapper}>
            <h1 className={style.wrapper__title}>Amazing Discounts on Garden Products!</h1>
            <Link to='/allproducts'>
                <Button children='Check out' className='buttonFirst'/>
            </Link>
        </div>
    )
} 


export default MainWelcome