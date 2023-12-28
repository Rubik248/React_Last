import style from "./Contact.module.css"

function ContactInfo() {
    return (
        <div className={style.wrapper}>
            <h2 className={style.wrapper__title}>Contact</h2>
            <div className={style.wrapper__box}>
            <div className={style.wrapper__box_block}>
                <div className={style.item}>
                    <p className={style.text}>Phone</p>
                    <h3 className={style.head}>+7 (499) 350-66-04</h3>
                </div>
                <div className={style.wrapper__box_block_item}>
                    <p className={style.wrapper__box_block_item_text}>Address</p>
                    <h3 className={style.wrapper__box_block_item_head}>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h3>
                </div>
            </div>
            <div className={style.wrapper__box_block}>
                <div className={style.wrapper__box_block_item}>
                    <p className={style.wrapper__box_block_item_text}>Socials</p>
                    <div className={style.wrapper__box_block_images}>
                        <img className={style.wrapper__box_block_images_image} src="images/instagram.svg" alt=""/>
                        <img className={style.wrapper__box_block_images_image} src="images/whatsapp.svg" alt=""/>
                    </div>
                </div>
                <div className={style.wrapper__box_block_item}>
                    <p className={style.wrapper__box_block_item_text}>Working Hours</p>
                    <h3 className={style.wrapper__box_block_item_head}>24 hours a day</h3>
                </div>
            </div>
            </div>
        </div>
    )
}


export default ContactInfo