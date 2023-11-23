import Link from "next/link";
import style from "../Header/header.module.css";

export default function Header() {
  return (
    <div className={style.wrapper}>
      <div className={style.topBar}>
        <div className={style.info}>
          <div className={style.phone}>
            <div className={style.img_phone}></div>
            <h1>(414) 857 - 0107</h1>
          </div>

          <div className={style.mail}>
            <div className={style.img_mail}></div>
            <h1>yummy@bistrobliss</h1>
          </div>
        </div>

        <div className={style.social}>
          <div className={style.img_1}></div>
          <div className={style.img_2}></div>
          <div className={style.img_3}></div>
          <div className={style.img_4}></div>
        </div>
      </div>

      <div className={style.header}>
        <div className={style.conteiner}>
          <div className={style.barist}>
            <div className={style.img_5}></div>
            <h1>Bistro Bliss</h1>
          </div>

          <div className={style.menu}>
            <h1>
              <Link href='/'>Home</Link>
            </h1>
            <h2>
              <Link href='/about'>About</Link>
            </h2>
            <h2>
              <Link href='/menu'>Menu</Link>
            </h2>
          </div>

          <div className={style.btn}>
            <h1>Book A Table</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
