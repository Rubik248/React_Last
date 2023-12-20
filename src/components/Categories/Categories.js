import Button from "../Button/Button"
import CategoryCard from "../CategoryCard/CategoryCard"
import { useEffect, useState } from "react";
import s from "./Categories.module.css"






function Categories() {

    const [category, setCategory] = useState([])


    useEffect(() => {
        fetch('http://localhost:3333/categories/all')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    const data = [];
    category.map(e => data.push(e.image))




    return (
        <div className={s.wrapper}>
            <div className={s.block1}>
                <h2 className={s.title}>Categories</h2>
                <Button text="All categories"/>
            </div>
            <div className={s.block2}>
                <CategoryCard way={data[0]} text="Fertilizer"/>
                <CategoryCard way={data[1]} text="Protective products and septic tanks"/>
                <CategoryCard way={data[2]} text="Planting material"/>
                <CategoryCard way={data[3]} text="Tools and equipment"/>
            </div>
        </div>
    )
}


export default Categories