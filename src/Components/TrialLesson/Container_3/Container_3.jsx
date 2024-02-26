import cl from "./Container_3.module.css";

const Container_3 = () => {
    return(
        <div className={cl.container}>
            <h1>Дарим один пробный урок</h1>

            <div className={cl.container__footer}>
                <div className={cl.container__footer_inputs}>
                    <input type="text" placeholder="Ваше имя"/>
                    <input type="password" placeholder="Email"/>
                    <input type="text" placeholder="Номер телефона"/>

                    <button>Записаться на урок</button>
                </div>

                <p>Нажимая на кнопку, вы принимаете условия пользовательского соглашения и условия политики в отношении обработки персональных данных</p>
            </div>
        </div>
    )
}

export default Container_3;