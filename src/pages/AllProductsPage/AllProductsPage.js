import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { apiData } from '../../store/dataThunk';
import SaleCard from "../../components/ProductCard/ProductCard";
import style from "./AllProductsPage.module.css"
import FilterBar from "../../components/FilterBar/FilterBar";


function AllProductsPage() {

    const currentPath = window.location.pathname;
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state);
  
    useEffect(() => { dispatch(apiData())}, [dispatch]);

    return ( 
        <>
            <div className={style.wrapper}>
                <h1 className={style.wrapper__title}>AllItemsPage</h1>
                <FilterBar path={currentPath}/>
                <div className={style.wrapper__cards}>
                    {product.map(product => {
                        return (
                            <SaleCard image={product.image} title={product.title} price={product.price} id={product.id} check={product.discont_price}/>
                        )
                    })}
                </div>
            </div>   
        </>
     );
}

export default AllProductsPage;