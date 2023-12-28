import { Link } from "react-router-dom"
import style from "./CategoryCard.module.css"


function CategoryCard(props) {
    
    const {image, title, id, path} = props
    
    return (
        <div className={style.wrapper}>
            <Link className={style.wrapper__link} to={path + "products/" + id}>
                <img className={style.wrapper__link_image} src={'http://localhost:3333' + image} alt=""/>
                <p className={style.wrapper__link_text}>{title}</p>
            </Link>
        </div>
    )
}



export default CategoryCard