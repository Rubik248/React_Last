import { Link } from "react-router-dom"
import style from  "./ProductCard.module.css"

function ProductCard(props) {

    const {image, title, price, id, check} = props

    return (
        <> 
            {
                (check === null) ? 
                    <Link className={style.wrapperlink} to={"/product/" + id}>
                        <div className={style.wrapperlink__card}>
                            <img className={style.wrapperlink__card_image} src={'http://localhost:3333' + image} alt=""/>
                            <div className={style.wrapperlink__card_block}>
                                <button className={style.wrapperlink__card_block_btn}>Add to cart</button>
                            </div>
                            <h3 className={style.wrapperlink__card_title}>{title}</h3>
                            <p className={style.wrapperlink__card_text}>${price}</p>
                        </div>
                    </Link> 
                    : 
                    <Link className={style.wrapperlink} to={"/product/" + id}>
                        <div className={style.wrapperlink__card}>
                            <img className={style.wrapperlink__card_image} src={'http://localhost:3333' + image} alt=""/>
                            <div className={style.wrapperlink__card_discount}>
                                {Math.floor(((price - check) / ((price + check / 2)) * 100))}%
                            </div>
                            <div className={style.wrapperlink__card_block}>
                                <button className={style.wrapperlink__card_block_btn}>Add to cart</button>
                            </div>
                            <h3 className={style.wrapperlink__card_title}>{title}</h3>
                            <div className={style.wrapperlink__card_sale}>
                                <p className={style.wrapperlink__card_text}>${check}</p>
                                <p className={style.wrapperlink__card_sale_price}>${price}</p>
                            </div>
                        </div>
                    </Link>
            }
        </>
    )
}

export default ProductCard