import style from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={style.color}>
        <div className={style.wrapper_1}>
          <div className={style.title}>
            <h1>Best food for your taste</h1>
            <p>
              Discover delectable cuisine and unforgettable moments in our
              welcoming, culinary haven.
            </p>
            <div className={style.btns}>
              <h2 className={style.btn_1}>Book A Table</h2>
              <h2 className={style.btn_2}>Explore Menu</h2>
            </div>
          </div>
        </div>
      </div>

        <div className={style.wrapper_2}>
          <h1 className={style.menu}>Browse Our Menu</h1>
          <div className={style.card}>
            <div className={style.elem_1}>
              <div className={style.img_tea}></div>
              <h1>Breakfast</h1>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <h3>Explore Menu</h3>
            </div>

            <div className={style.elem_1}>
              <div className={style.img_ice_cream}></div>
              <h1>Main Dishes</h1>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <h3>Explore Menu</h3>
            </div>

            <div className={style.elem_1}>
              <div className={style.img_drinks}></div>
              <h1>Drinks</h1>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <h3>Explore Menu</h3>
            </div>

            <div className={style.elem_1}>
              <div className={style.img_cake}></div>
              <h1>Desserts</h1>
              <p>
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <h3>Explore Menu</h3>
            </div>
          </div>
        </div>

      <div className={style.color}>
        <div className={style.wrapper_3}>
          <h1>We also offer unique services for your events</h1>
          <div className={style.content}>
            <div className={style.block_1}>
              <div className={style.img_kebab}></div>
              <h2>Caterings</h2>
              <p>
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
            <div className={style.block_1}>
              <div className={style.img_party}></div>
              <h2>Birthdays</h2>
              <p>
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
            <div className={style.block_1}>
              <div className={style.img_sunny}></div>
              <h2>Weddings</h2>
              <p>
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
            <div className={style.block_1}>
              <div className={style.img_group}></div>
              <h2>Events</h2>
              <p>
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
