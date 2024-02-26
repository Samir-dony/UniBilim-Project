import cl from "./Footer.module.css";
import image from "./images/image.svg";
import icon_1 from "./images/icon_1.svg";
import icon_2 from "./images/icon_2.svg";
import icon_3 from "./images/icon_3.svg";
import { Link } from "react-router-dom";

const Footer = () => {

    return(
        <div className={cl.footer}>
            <div className={cl.footer__image}>
                <img src={image} alt="Error!" />
            </div>
            <div className={cl.footer__connection}>
                <div className={cl.footer__connection_h1}>
                    <h1>Свяжитесь с нами</h1>
                </div>
                <div className={cl.footer__connection_info}>
                    <div className={cl.connection_info_item}>
                        <img src={icon_1} alt="Error!" />
                        <p>@unibilim_edu</p>
                    </div>
                    <div className={cl.connection_info_item} >
                        <img src={icon_2} alt="Error!" />
                        <p>0 707 10 48 48</p>
                    </div>
                    <div className={cl.connection_info_item}>
                        <img src={icon_3} alt="Error!" />
                        <p>0 551 10 48 48</p> 
                    </div>
                </div>
            </div>
            
            <div className={cl.footer__navigation}>
                <div className={cl.footer__navigation_h1}>
                    <h1>Навигация</h1>
                </div>
                <div className={cl.footer__navigation_info}>
                    <Link to="#">Главное</Link>
                    <Link to="#">Форматы занятий</Link>
                    <Link to="#">Скидки</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;