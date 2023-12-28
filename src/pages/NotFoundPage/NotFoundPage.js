import Button from "../../components/Button/Button";
import style from './NotFoundPage.module.css'


function NotFoundPage() {
    return ( 
        <div className={style.block}>
            <img className={style.block__image} src="images/error.svg" alt=""/>
            <h1 className={style.block__title}>Page Not Found</h1>
            <p className={style.block__text}>We’re sorry, the page you requested could not be found.
            Please go back to the homepage.</p>
            <Button children="Go Home" className="buttonFirst"/>
        </div>
     );
}

export default NotFoundPage;