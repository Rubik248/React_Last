import style from "./GoogleMap.module.css"


function GoogleMap() {
    return (
        <div>
            <div className={style.wrapper}>
                <iframe 
                    className={style.wrapper__iframe} 
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dubininskaya%20Ulitsa,%2096,%20Moscow,%20Russia,%20115093+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                </iframe>
            </div>
        </div>
    )
}


export default GoogleMap