import style from "./FilterBar.module.css"

function FilterBar(props) {

    const { path } = props


    return ( 
        <>
            {
                (path === '/discount') ?
                    <div className={style.wrapper}>
                        <div className={style.wrapper__block}>
                        <p className={style.wrapper__block_text}>Price</p>
                        <input className={style.wrapper__block_input} type="text" placeholder="from"/>
                        <input className={style.wrapper__block_input} type="text" placeholder="to"/>
                    </div>
                    <div className={style.wrapper__block}>
                        <p className={style.wrapper__block_text}>Sorted</p>
                        <select className={style.wrapper__block_select}>
                            <option className={style.wrapper__block_select_option} value='def'>default</option>
                            <option className={style.wrapper__block_select_option} value='asc'>ascending</option>
                            <option className={style.wrapper__block_select_option} value='red'>reducing</option>
                        </select>
                    </div>
                    </div>
                    :
                    <div className={style.wrapper}>
                        <div className={style.wrapper__block}>
                        <p className={style.wrapper__block_text}>Price</p>
                        <input className={style.wrapper__block_input} type="text" placeholder="from"/>
                        <input className={style.wrapper__block_input} type="text" placeholder="to"/>
                    </div>
                    <div className={style.wrapper__block}>
                    <p className={style.wrapper__block_text}>Discounted items</p>
                    <input className={style.wrapper__block_check} type="checkbox"/>
                    </div>
                    <div className={style.wrapper__block}>
                        <p className={style.wrapper__block_text}>Sorted</p>
                        <select className={style.wrapper__block_select}>
                        <option className={style.wrapper__block_select_option} value='def'>default</option>
                        <option className={style.wrapper__block_select_option} value='asc'>ascending</option>
                        <option className={style.wrapper__block_select_option} value='red'>reducing</option>
                    </select>
                    </div>
                    </div>
            }
        </>
     );
}

export default FilterBar;