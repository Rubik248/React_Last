import Button from '../Button/Button'
import s from "./MainPromo.module.css"





function MainPromo() {





    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Amazing Discounts on Garden Products!</h1>
            <Button 
                bgcolor='rgba(51, 153, 51, 1)'
                width='150px'
                padding='14px 8px'
                fontfamily='Montserrat, sans-serif'
                color='rgba(255, 255, 255, 1)'
                text="Check out"/>
        </div>
    )
} 


export default MainPromo