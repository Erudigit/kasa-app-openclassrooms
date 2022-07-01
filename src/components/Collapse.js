import '../styles/Collapse.css'

function Collapse(props) {
    const Title = props.title;
    const Desc = props.description;

    function changeStatement(button) {
        var btnSelected = document.getElementsByClassName(button)[0];
        var content = btnSelected.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }
    
    return (
        <><button className={Title} onClick={() => { changeStatement(Title) }}>{Title}</button>
        <div className="content">
            <p>{Desc}</p>
        </div></>
    )
}

export default Collapse