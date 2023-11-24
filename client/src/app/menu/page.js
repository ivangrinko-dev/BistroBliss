import Image from "next/image";
import image1 from "./assets/image1.svg";
import image2 from "./assets/image2.svg";
import image3 from "./assets/image3.png";
import style from "./page.module.css";

export default function Menu() {
  const array = [
    {
      id: 1,
      price: "$ 9.99",
      title: "Fried Eggs",
      description: "Made with eggs, lettuce, salt, oil and other ingredients.",
      img: "./assets/image3.png",
    },
    {
      id: 1,
      price: "$ 9.99",
      title: "Fried Eggs",
      description: "Made with eggs, lettuce, salt, oil and other ingredients.",
      img: "./assets/image3.png",
    },
    {
      id: 1,
      price: "$ 9.99",
      title: "Fried Eggs",
      description: "Made with eggs, lettuce, salt, oil and other ingredients.",
      img: "./assets/image3.png",
    },
    {
      id: 1,
      price: "$ 9.99",
      title: "Fried Eggs",
      description: "Made with eggs, lettuce, salt, oil and other ingredients.",
      img: "./assets/image3.png",
    },
  ];

  return (
    <>
      <div className={style.main}>
        <div className={style.text}>
          <h1>Our Menu</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className={style.wrapper}>
          {array.map((elem) => 
            <div className={style.item}>
              <div>
                <Image src={elem.img} />
              </div>
              <h2>{elem.price}</h2>
              <h3>{elem.title}</h3>
              <p>{elem.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
