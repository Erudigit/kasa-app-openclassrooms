import '../styles/Card.css'

function Card(props) {
    const Property = props.property;
    const Index = props.index;
    console.log(Property)
    console.log(Index)
    return (
        <div class="each-property" style={{ backgroundImage: `url(${Property.cover})` }}>
            <div class="text-property">
                <p>Accommodation</p>
                <p>{Property.title}</p>
            </div>
        </div>
    )
}

export default Card