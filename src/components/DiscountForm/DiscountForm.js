import Button from '../Button/Button'
import style from "./DiscountForm.module.css"


function DiscountForm() {
    return(


        <div className={style.wrapper}>
            <h2 className={style.wrapper__title}>5% off on the first order</h2>
            <div className={style.wrapper__block}>
                <img className={style.wrapper__block_image} src="images/form.svg" alt=""/>
                <form className={style.wrapper__block_form}>
                    <input placeholder='Name' className={style.wrapper__block_form_input} type="text"/>
                    <input placeholder='Phone Number' className={style.wrapper__block_form_input} type="text"/>
                    <input placeholder='Email' className={style.wrapper__block_form_input} type="text"/>
                    <Button children="Get a discount" className='buttonThird'/>
                </form>
            </div>
        </div>
    )
}



export default DiscountForm