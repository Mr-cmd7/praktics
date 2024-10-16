import logo from '../../assets/images/logo.png'
import vk from '../../assets/images/vk.png'
import email from '../../assets/images/email.png'
import './Header.css'
import '../common/button/Button.jsx'
import Button from "../common/button/Button.jsx";
import {navItems} from '../../assets/data.js'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <nav className="menu">
                    <ul className="menu-list">
                        {navItems.map(item => (
                            <li className="menu-item">
                                <a href={item.href}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="button-menu">
                    <a href="#" className="button-vk"><img src={vk} alt="vk"/></a>
                    <a href="#" className="button-email"><img src={email} alt="email"/></a>
                    <Button label="ЗАКАЗАТЬ ЗВОНОК"/>
                </div>
            </div>
        </header>
    )
}