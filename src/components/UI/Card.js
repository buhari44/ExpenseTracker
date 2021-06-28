const Card=(props) =>{
    
    const allStyles=props.className+' card'
    return (
        <div className={allStyles}>{props.children}</div>
    )
}
export default Card