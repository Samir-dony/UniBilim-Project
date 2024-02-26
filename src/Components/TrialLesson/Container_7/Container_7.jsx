import cl from "../Container_3/Container_3.module.css";
import cls from "./Container_7.module.css";

const Container_7 = () => {
    
    return(
    <div className={cls.container}>

        <div className={cls.container__header}>
            <h1>Какие документы пора готовить<br></br> для поступления</h1>
        </div>
        

        <div className={cl.container__footer}>
            <div className={cl.container__footer_inputs}>
                <input type="text" placeholder="Ваше имя"/>
                <input type="password" placeholder="Email"/>
                <input type="text" placeholder="Номер телефона"/>

                <button className={cls.container__footer_inputs_button} >Скачать файл</button>
            </div>

            <p>Нажимая на кнопку, вы принимаете условия пользовательского соглашения и условия политики в отношении обработки персональных данных</p>
        </div>
    </div>
    )
}

export default Container_7;