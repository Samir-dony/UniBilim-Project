import cl from "./Container_6.module.css";
import icon_1 from "./images/icon_1.svg";
import icon_2 from "./images/icon_2.svg";
import icon_3 from "./images/icon_3.svg";

const Container_6 = () => {
    return(
        <div className={cl.container}>
            <h1>Покупайте уроки дешевле — <br></br> <span>со скидкой до 50%</span></h1>

            <div className={cl.container__grid}>

                <div className={cl.container__grid_item}>
                    <div className={cl.item__header}>
                        <h3>Попробовать</h3>
                    </div>

                    <div className={cl.item__text}>
                        <h4>Одно занятие</h4>
                        <p>Одно занятие</p>
                        <p className={cl.item__text_p}>600 c</p>

                        <button>Выбрать</button>
                    </div>
                </div>

                
                <div className={cl.container__grid_item}>
                    <div className={cl.item__header}>
                        <h3>Готовимся неспеша</h3>
                    </div>

                    <div className={cl.item__text}>
                        <h4>4 занятий в месяц</h4>
                        <p>Выбирайте один предмет и готовьтесь по нему</p>
                        
                        <div className={cl.item__text_price}>
                            <p>1 990 с</p>
                            <div>-20%</div>
                        </div>

                        <button>Выбрать</button>
                    </div>
                </div>
 
                <div className={cl.container__grid_item}>
                    <div className={cl.item__header}>
                        <h3>Серьезная подготовка</h3>
                    </div>

                    <div className={cl.item__text}>
                        <h4>8 занятий в месяц</h4>
                        <p>8 занятий в месяц</p>
                        
                        <div className={cl.item__text_price}>
                            <p>1 990 с</p>
                            <div>-40%</div>
                        </div>

                        <button>Выбрать</button>
                    </div>
                </div>
  
                <div className={cl.container__grid_item}>
                    <div className={cl.item__header}>
                        <h3>Самый выгодный</h3>
                    </div>

                    <div className={cl.item__text}>
                        <h4>12 занятий в месяц + платформа</h4>
                        <p>8 занятий в месяц + платформа</p>
                        
                        <div className={cl.item__text_price}>
                            <p>1 990 с</p>
                            <div>-50%</div>
                        </div>

                        <button>Выбрать</button>
                    </div>
                </div>

            </div>

            <div className={cl.container_footer}>

                <div className={cl.footer__item}>
                    <img src={icon_1} alt="Error!" />
                    <p>Заморозка занятий на 3 месяца, если вы уехали в отпуск или решили сделать паузу</p>
                </div>
                
                <div className={cl.footer__item}>
                    <img src={icon_2} alt="Error!" />
                    <p>Если вы не усвоили тему, у вас есть возможность пройти еще раз. Менторы готовы объяснить.</p>
                </div>

                <div className={cl.footer__item}>
                    <img src={icon_3} alt="Error!" />
                    <p>Кэшбэк до 10% от МБанк. Только для клиентов банка.</p>
                </div>

            </div>
        </div>
    )
}

export default Container_6;