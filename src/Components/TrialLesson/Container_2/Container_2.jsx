import cl from "./Container_2.module.css";
import icon_1 from "./images/icon_1.svg";
import icon_2 from "./images/icon_2.svg";
import icon_3 from "./images/icon_3.svg";
import icon_4 from "./images/icon_4.svg";
import icon_5 from "./images/icon_5.svg";
import icon_6 from "./images/icon_6.svg";

const Container_2 = () => {
    return(
        <div className={cl.container}>
            <h1>Почему выбирают курсы Unibilim</h1>

            <div className={cl.container__grid}>

                <div className={cl.container__grid_item}>
                    <img src={icon_1} alt="Error!" />

                    <div className={cl.item_text}>
                        <h4>Формат</h4>
                        <p>Онлайн и очные занятия в выбранное время по расписанию группы</p>
                    </div>
                </div>
                
                <div className={cl.container__grid_item}>
                    <img src={icon_2} alt="Error!" />

                    <div className={cl.item_text}>
                        <h4>Пробный тест</h4>
                        <p>Онлайн и очные занятия в выбранное время по расписанию группы</p>
                    </div>
                </div>

                <div className={cl.container__grid_item}>
                    <img src={icon_3} alt="Error!" />

                    <div className={cl.item_text}>
                         <h4>Актуальность</h4>
                        <p>Онлайн и очные занятия в выбранное время по расписанию группы</p>
                    </div>
                </div>

                <div className={cl.container__grid_item}>
                    <img src={icon_4} alt="Error!" />

                    <div className={cl.item_text}>
                        <h4>Менторы</h4>
                        <p>Онлайн и очные занятия в выбранное время по расписанию группы</p>
                    </div>
                </div>

                <div className={cl.container__grid_item}>
                    <img src={icon_5} alt="Error!" />

                    <div className={cl.item_text}>
                        <h4>Длительность</h4>
                        <p>Онлайн и очные занятия в выбранное время по расписанию группы</p>
                    </div>
                </div>

                <div className={cl.container__grid_item}>
                    <img src={icon_6} alt="Error!" />

                    <div className={cl.item_text}>
                        <h4>Прогресс</h4>
                        <p>Онлайн и очные занятия в выбранное время по расписанию группы</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Container_2;