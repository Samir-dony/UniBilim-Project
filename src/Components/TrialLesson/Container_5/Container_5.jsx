import cl from "./Container_5.module.css";

const Container_5 = () => {
    return(
        <div className={cl.container}>
            <h1>Вся учёба под рукой</h1>
            <p>Заниматься можно в любое время и с любого устройства</p>

            <video src="video" controls></video>
        </div>
    )
}

export default Container_5;