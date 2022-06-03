import '../styles/Banner.css'

function Banner(props) {
    const SizeImg = props.sizeBanner;
    const UrlImg = props.img
    return (
        <div id="small-banner">
            <img className={SizeImg} src={UrlImg} alt="presentation top page image" />
        </div>
    )
}

export default Banner