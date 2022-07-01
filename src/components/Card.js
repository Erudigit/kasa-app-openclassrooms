import '../styles/Card.css'

function Card(props) {
    const Property = props.property;
    const Index = props.index;

    return (
        <div className="each-property">
            <div className="text-property">
                <p>Accommodation</p>
                <p>{Property.title}</p>
            </div>
        </div>
    )
}

export default Card