import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { apiData } from '../../store/dataThunk'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import style from './DiscountList.module.css'
import Button from '../Button/Button'
import FilterBar from '../FilterBar/FilterBar'


function DiscountList() {

    const dispatch = useDispatch();
    const { product } = useSelector((state) => state);
    const currentPath = window.location.pathname;


    useEffect(() => { dispatch(apiData()) }, [dispatch]);


    return (
        <div className={style.wrapper}>
            <div className={style.wrapper__block}>
                <h2 className={style.wrapper__block_title}>Sale</h2>
                {   (currentPath === '/') ? 
                    <Link to='/discount'>
                        <Button children='All sales' className='buttonSecond'/>
                    </Link> : ''                
                }
                {
                    (currentPath === '/discount') ?
                        <FilterBar  path={currentPath}/> : <> </>
                }
            </div>
            <div className={style.wrapper__block_cards}>
            {product.map(product => {
                if(product.discont_price != null && product.id < 10) {
                    return (
                        <ProductCard image={product.image} title={product.title} price={product.price} id={product.id} check={product.discont_price}/>
                    )
                } else if (currentPath === '/discount' && product.discont_price != null) {
                    return (
                        <ProductCard image={product.image} title={product.title} price={product.price} id={product.id} check={product.discont_price}/>
                    )
                }
            })}
            </div>
        </div>
    ) 
}

export default DiscountList;