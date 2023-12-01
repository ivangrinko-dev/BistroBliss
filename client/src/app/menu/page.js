"use client";
import Link from "next/link";
import style from "../menu/page.module.css";
import array from "../storage/storage";
import Image from "next/image";

export default function Menu() {
  return (
    <div className={style.mainMenu}>
      <div className={style.menuText}>
        <h1>Our Menu</h1>
        <p>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>

      <div className={style.container}>
        {array.map((elem) => (
          <Link href='/card/&{elem.id}'>
            <div className={style.item}>
              <div>
                <Image src={elem.img} />
              </div>
              <div className={style.containerText}>
                <p className={style.colorelem}>{elem.price}</p>
                <h2>{elem.title}</h2>
                <p>{elem.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
