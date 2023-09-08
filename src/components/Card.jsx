const Card = ({image, title, price}) => {
    return (
        <div>
            <img src={image} alt="" height={100}  width={100}/>
            <h1>{title}</h1>
            <span>{price}</span>
        </div>
    )
}

export default Card