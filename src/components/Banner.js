import '../styles/Banner.css'

function Banner(props) {
    const SizeImg = props.sizeBanner;
    const UrlImg = props.img
    return (
        <img className={SizeImg} src={UrlImg} alt="presentation top page image" />
    )
}

export default Banner