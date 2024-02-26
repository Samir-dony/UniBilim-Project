import cl from "./Container.module.css";
import image from "./images/image.svg";

const Container = () => {
    return(
        <div className={cl.container}>
            <div className={cl.container__text}>
                <p>Для 10 и 11 классов</p>
                <h1>Подготовка к ОРТ и <br></br>разбор задач</h1>
                <p>Пройдите подготовку с лучшими преподавателями и получите шанс поступить на бюджет!</p>
                <button>Процесс подготовки</button>
                
                <div className={cl.container__text_input}>
                    <input type="checkbox"/>
                    <p>Можно заморозить</p>
                </div>
            </div>
            <div className={cl.container__image}>
                <img src={image} alt="Error!" />
            </div>
        </div>
    )
}

export default Container;