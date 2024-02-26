import cl from "./TrialLesson.module.css";
import Container from "./Container_1/Container";
import Container_2 from "./Container_2/Container_2";
import Container_3 from "./Container_3/Container_3";
import Container_4 from "./Container_4/Container_4";
import Container_5 from "./Container_5/Container_5";
import Container_6 from "./Container_6/Container_6";
import Container_7 from "./Container_7/Container_7";
import Container_8 from "./Container_8/Container_8";
import image from "./Container_7/images/image.svg";


const TrialLesson = () => {

    

    return(
        <div className={cl.width}>
            <div className={cl.content}>
                <Container/>
                <Container_2/>
                <Container_3/>
                <Container_4/>
                <Container_5/>
                <Container_6/>

                <div className={cl.cont_7_width}>
                    <img src={image} className={cl.image} alt="Error!"/>
                    <Container_7/>
                </div>
                <Container_8/> 
           </div>
        </div>
    )
}

export default TrialLesson;