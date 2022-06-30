import { useState } from 'react'
import { RiMenu5Line,RiCloseFill } from 'react-icons/ri'
import './Nav.scss'

const Nav = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className="navigation">
            <input type="checkbox" checked={menu} onChange={(e) => setMenu(e.target.checked)} id="navi__toggle" className="navigation__checkbox" />

            <label for="navi__toggle" className="navigation__btn">
                {menu ? <RiCloseFill size={'3rem'} /> : <RiMenu5Line size={'3rem'} /> }
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__navbar">
                <ul className="navigation__list">
                    <li className="navigation__item" onClick={() => setMenu(false)}>
                        <a className="navigation__link" href="/#">Home</a>
                    </li>
                    <li className="navigation__item" onClick={() => setMenu(false)}>
                        <a className="navigation__link" href="/#">about</a>
                    </li>
                    <li className="navigation__item" onClick={() => setMenu(false)}>
                        <a className="navigation__link" href="/#">storyes</a>
                    </li>
                    <li className="navigation__item" onClick={() => setMenu(false)}>
                        <a className="navigation__link" href="/#">Works</a>
                    </li>
                    <li className="navigation__item" onClick={() => setMenu(false)}>
                        <a className="navigation__link" href="/#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav