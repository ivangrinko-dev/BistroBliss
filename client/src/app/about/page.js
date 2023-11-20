import style from "./page.module.css";

export default function About() {
  return (
    <>
      <div className={style.main}>
        <div className={style.wrapper}>
          <div className={style.conteiner_1}>
            <div className={style.img}></div>
            <div className={style.info}>
              <div className={style.block}>
                <h1>Come and visit us</h1>
                <div className={style.phone}>
                  <div className={style.img_phone}></div>
                  <p>(414) 857 - 0107</p>
                </div>
                <div className={style.mail}>
                  <div className={style.img_mail}></div>
                  <p>happytummy@restaurant.com</p>
                </div>

                <div className={style.marker}>
                  <div className={style.img_marker}></div>
                  <p>
                    837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.conteiner_2}>
            <h1>We provide healthy food for your family.</h1>
            <h3>
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </h3>
            <p>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
        </div>
        <div className={style.wrapper_2}>
          <div className={style.left}>
            <h1>A little information for our valuable guest</h1>
            <p>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>

            <div className={style.statistickBlock}>
            <div className={style.item_1}>
                <h2>3</h2>
                <p>Locations</p>
            </div>
            <div className={style.item_2}>
                <h2>1995</h2>
                <p>Founded</p>
            </div>
            <div className={style.item_3}>
                <h2>65+</h2>
                <p>Staff Members</p>
            </div>
            <div className={style.item_4}>
                <h2>100%</h2>
                <p>Satisfied Customers</p>
            </div>
            
            </div>

          </div>

          <div className={style.right}>

          </div>
        </div>
      </div>
    </>
  );
}
