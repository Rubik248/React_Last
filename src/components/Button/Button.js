
import s from "../MainPromo/MainPromo.module.css"



function Button(props) {
    
    
    
    let {text, bgcolor, width, padding, fontfamily, color} = props

    
    return (
        <button 
            style={{backgroundColor: {bgcolor}}}    
        >{text}</button>
    )
}

export default Button