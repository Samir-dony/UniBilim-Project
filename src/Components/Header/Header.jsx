import { useState } from "react";
import cl from "./Header.module.css";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {

    const [menu, setMenu] = useState(false);

    function getChangetMenu(value) {
        value = menu;
        setMenu(!value);
    }

    return(
        <div className={cl.width}>
            <header>
                <div className={cl.header_logo}>
                    <img src={logo} alt="Error!" />
                </div>

                <div className={cl.header_navBar}>
                    <Link to="/Exam">ОРТ</Link>
                    <Link to="/Contacts">Контакты</Link>
                    <Link to="/">Пробный урок</Link>
                </div>

                <div className={cl.header__burger_menu} onClick={getChangetMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {menu && <div className={cl.header_BurgernavBar}>
                    <button onClick={getChangetMenu}>Закрыть</button>

                    <Link to="/Exam">ОРТ</Link>
                    <Link to="/Contacts">Контакты</Link>
                    <Link to="/">Пробный урок</Link>
                </div>}

            </header>
        </div>
    )
}

export default Header;