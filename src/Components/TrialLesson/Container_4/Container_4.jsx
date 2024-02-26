import cl from "./Container_4.module.css";
import image from "./images/image.png";

const Container_4 = () => {
    return(
        <div className={cl.container}>
            <div className={cl.container__image}>
                <img src={image} alt="Error!" />
            </div>

            <div className={cl.container__text}>
                <h1>Поможем выбрать формат подготовки</h1>
                <p>Вы можете готовиться в группе на курсе, в мини‑группе или индивидуально с преподавателем. У каждого формата есть свои особенности и преимущества.</p>
                <p>Запишитесь на бесплатную консультацию, чтобы подобрать самый эффективный способ подготовки именно для вас.</p>

                <button>Хочу консультацию</button>
            </div>
        </div>
    )
}

export default Container_4;