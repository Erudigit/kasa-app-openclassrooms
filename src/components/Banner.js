import '../styles/Banner.css'

function Banner(props) {
    const SizeImg = props.sizeBanner;
    const UrlImg = props.img
    const Title = props.Title
    return (
        <div className="banner-top">
            <div className="bckgrnd-opacity"></div>
            { Title != null ? <h1 className="title-site">{Title}</h1> : null }
            <img className={SizeImg} src={UrlImg} alt="presentation top page image" />
        </div>
    )
}

export default Banner