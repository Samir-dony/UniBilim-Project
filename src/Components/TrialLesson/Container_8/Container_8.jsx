import { useState } from "react";
import cl from "./Container_8.module.css";
import { Collapse } from 'antd';
import image from "./images/image.svg";
import vector_img from "./images/Vector.svg";

const Container_8 = () => {


  // const [click, setClick] = useState(false);

  // function getChangedOption(value) {
  //   value = click;
  //   setClick(!value);
  // }



  // const [click_2, setClick_2] = useState(false);

  // function getChangedOption_2(value) {
  //   value = click_2;
  //   setClick_2(!value);
  // }

  // const [click_3, setClick_3] = useState(false);

  // function getChangedOption_3(value) {
  //   value = click_3;
  //   setClick_3(!value);
  // }

  // const [click_4, setClick_4] = useState(false);

  // function getChangedOption_4(value) {
  //   value = click_4;
  //   setClick_4(!value);
  // }



  const items = [
    {
      key: '1',
      label: 'Можно ли совмещать подготовку по нескольким предметам?',
      children: <p>Да, можно совмещать подготовку по нескольким предметам.</p>,
    },
    {
      key: '2',
      label: 'Кто такие бадди и тьютор, чем они различаются?',
      children: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eveniet.</p>,
    },
    {
      key: '3',
      label: 'Что, если нет возможности смотреть вебинары в онлайне?',
      children: <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, repellat.</p>,
    },
    {
      key: '4',
      label: 'Можно ли вернуть часть денег через налоговый вычет?',
      children: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, quibusdam!</p>,
    },
  ];


  return(
    <div className={cl.container}>

      <div className={cl.container__text}>

        <div className={cl.container__text_h1}>
          <h1>У нас часто спрашивают</h1>
        </div>

        <div className={cl.container__text_option}>


          <Collapse items={items}  />
        </div>
      </div>

      <div className={cl.container_image}>
        <img src={image} alt="Error!" />
      </div>

    </div>
  )

}

export default Container_8;