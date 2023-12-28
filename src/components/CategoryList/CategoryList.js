import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { apiData } from '../../store/dataThunk';
import { Link } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';
import style from './CategoryList.module.css'
import Button from '../Button/Button';


function CategoryList() {
    
    const dispatch = useDispatch();
    const { category } = useSelector((state) => state);
    const currentPath = window.location.pathname;

    useEffect(() => { dispatch(apiData()) }, [dispatch]);

    return (
        <div className={style.wrapper}>
        <div className={style.wrapper__block1}>
            <h2 className={style.wrapper__block1_title}>Categories</h2>
            {   (currentPath === '/') ? 
                    <Link to="/category">
                        <Button children="All categories" className='buttonSecond'/>
                    </Link> : <></>
            }
        </div>
        <div className={style.wrapper__block2}>
        {category.map(category => {
                if (category.id < 5) {
                    return (
                        <CategoryCard image={category.image} title={category.title} id={category.id} path='/category/'/>
                    )
                } else if ( category.id < 6 && currentPath === '/category') {
                    return (
                        <CategoryCard image={category.image} title={category.title} id={category.id} path=''/>
                    )
                }
            })}
        </div>
        </div>
     );
}

export default CategoryList;