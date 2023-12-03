import style from "../Footer/footer.module.css";

export default function Footer() {
  return (
    <>
    <div className={style.colorfooter}>
      <div className={style.wrapper}>
        <div className={style.conteiner}>
          <div className={style.logotip}>
            <div className={style.barist}>
              <div className={style.img_1}></div>
              <h1>Bistro Bliss</h1>
            </div>
            <p>
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </p>
          </div>

          <div className={style.info}>
            <div className={style.pages}>
              <h2>Pages</h2>
              <p>Home</p>
              <p>About</p>
              <p>Menu</p>
              <p>Pricing</p>
              <p>Blog</p>
              <p>Contact</p>
              <p>Delivery</p>
            </div>
            <div className={style.utility}>
              <h2>Utility Pages</h2>
              <p>Start Here</p>
              <p>Styleguide</p>
              <p>Password Protected</p>
              <p>404 Not Found</p>
              <p>Licenses</p>
              <p>Changelog</p>
              <p>View More</p>
            </div>
          </div>
          <div className={style.foto}>
<h2>Follow Us On Instagram</h2>
<div className={style.potato}>
<div className={style.img_2}></div>
<div className={style.img_3}></div>
</div>
<div className={style.cake}>
<div className={style.img_4}></div>
<div className={style.img_5}></div>
</div>

          </div>
        </div>
      </div>


      <div className={style.block}>
        <div className={style.line}></div>

        <h1>Copyright © 2023 Hashtag Developer. All Rights Reserved</h1>
      </div>
      </div>
    </>
  );
}
