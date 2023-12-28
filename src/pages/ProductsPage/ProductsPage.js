import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { apiData } from '../../store/dataThunk';
import SaleCard from "../../components/ProductCard/ProductCard";
import style from "./ProductsPage.module.css"
import FilterBar from '../../components/FilterBar/FilterBar'; 


function ProductsPage() {
    const dispatch = useDispatch();
    const { category, product} = useSelector((state) => state);
    const currentPath = window.location.pathname;
    const path = parseInt(currentPath.split('').reverse().join(''))

    useEffect(() => { dispatch(apiData());}, [dispatch]);
  
    return ( 
        <>
            {category.map(category => {
                if (category.id === path) {
                    return (
                        <div className={style.wrapper}>
                            <h1 className={style.wrapper__title}>{category.title}</h1>
                            <FilterBar path={currentPath}/>
                            <div className={style.wrapper__cards}>
                                {product.map(product => {
                                    if (product.categoryId === path) {
                                        return (
                                            <SaleCard image={product.image} title={product.title} price={product.price} id={product.id} check={product.discont_price}/>
                                        )
                                    }
                                })}
                            </div>
                        </div>   
                    )
                } 
            })}  
        </>
     );
}

export default ProductsPage;