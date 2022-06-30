import React from 'react';
import logo from '../../img/logo-green-1x.png'
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__logo-box">
            <img src={logo} alt="LazizbekDev" className="footer__logo" />
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="https://lazizbek-dev.netlify.app/" className="footer__link">Portfolio</a>
                        </li>
                        <li className="footer__item">
                            <a href="https://t.me/mernme/" className="footer__link">Telegram</a>
                        </li>
                        <li className="footer__item">
                            <a href="https://instagram.com/mern.me/" className="footer__link">Instagram</a>
                        </li>
                        <li className="footer__item">
                            <a href="https://www.linkedin.com/in/lazizbek-tojiboyev-24185420b/"
                                className="footer__link">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-2">
                <p className="footer__copyright">
                    Cloned by <a className="footer__link" href="https://lazizbek-dev.netlify.app/"> LazizbekDev</a> for his
                    online course ADVANCED CSS AND SASS. Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to
                    use this webpage for both personal and commercial use, but NOT to claim it as your own design. A
                    credit to the original author, Jonas Schmedtmann, is of course highly appreciated!
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer