import logo from '../../assets/images/logo.png'
import vk from '../../assets/images/vk.png'
import email from '../../assets/images/email.png'
import './Header.css'
import '../common/Button.jsx'
import Button from "../common/Button.jsx";

export default function Header() {
    const menuItems= [
        { name: 'Сопровождение бизнеса', href: '#' },
        { name: 'Дист. обучение', href: '#' },
        { name: 'Лицензирование', href: '#' },
        { name: 'О нас', href: '#' },
        { name: 'Контакты', href: '#' }
    ];
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <nav className="menu">
                    <ul className="menu-list">
                        {menuItems.map(item => (
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