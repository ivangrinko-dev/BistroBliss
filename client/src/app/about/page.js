import style from './page.module.css';

export default function About() {
    return (<>
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
                                <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={style.conteiner_2}>
                    <h1>We provide healthy food for your family.</h1>
                    <h3>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h3>
                    <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                </div>

            </div>


        </div >
    </>)
}