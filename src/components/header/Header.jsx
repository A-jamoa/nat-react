import "./Header.scss"
import logo from '../../img/logo-white.png';

const Header = () => {
    return (
        <header className="header">
        <div className="header__logo-box">
            <img src={logo} alt="lazizbekdev" className="header__logo" />
        </div>

        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary__main">AL-JAMOA</span>
                <span className="heading-primary__sub">it's our portfolio</span>
            </h1>
            <a href="#" className="btn btn--white btn--animated">show more</a>
        </div>
    </header>
    )
}

export default Header