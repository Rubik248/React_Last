import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { apiData } from '../../store/dataThunk';
import style from "./ProductPage.module.css"
import Button from '../../components/Button/Button'


function ProductPage() {

    const dispatch = useDispatch();
    const { product } = useSelector((state) => state);
    const currentPath = window.location.pathname;
    const path = parseInt(currentPath.split('').reverse().join(''))
    const pathNew = parseInt(String(path).split('').reverse().join(''))


    useEffect(() => { dispatch(apiData());}, [dispatch]);

    return ( 
        <>
            {product.map(product => {
                if (product.id === pathNew) {
                    return (
                        <div className={style.wrapper}>
                            <img className={style.wrapper__image} src={"http://localhost:3333" + product.image} alt=""/>
                            <div className={style.wrapper__block}>
                                <h2 className={style.wrapper__block_title}>{product.title}</h2>
                                <h3 className={style.wrapper__block_price}>${product.price}</h3>
                                <div className={style.wrapper__block_btn}>
                                    <Button children="Add to cart" className="buttonFirst"/>
                                </div>
                                <div className={style.wrapper__block_description}>
                                    <h3 className={style.wrapper__block_description_head}>Description</h3>
                                    <p className={style.wrapper__block_description_text}>{product.description}</p>
                                    <p className={style.wrapper__block_description_link}>Read more</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </>
            
     );
}

export default ProductPage;