import './Button.css'






function Button(props) {

    const {children, className } = props

    return (
        <button className={className}>{children}</button>
    )
}

export default Button