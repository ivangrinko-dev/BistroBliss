import style from '../Header/header.module.css'

export default function Header() {
    return (
        <>
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



            </div>

        </>
    )
}