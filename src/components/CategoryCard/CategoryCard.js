import s from "./CategoryCard.module.css"



function CategoryCard(props) {
    
    
    let {way, text} = props
    
    
    
    return (
        <div className={s.wrapper}>
            <a className={s.link} href="q">
                <img className={s.image} src={'http://localhost:3333' + way} alt=""/>
                <p className={s.text}>{text}</p>
            </a>
        </div>
    )
}



export default CategoryCard