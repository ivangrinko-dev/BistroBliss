"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import array from "../../storage/storage";
import Image from "next/image"
import style from './page.module.css'

export default function id() {
  const { id } = useParams();
  const [found, setFound] = useState({});

  useEffect(() => {
    const resut = array.filter((elem) => elem.id == id);
    setFound(resut[0]);
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        
          <Image src={found?.img} alt={found?.img} className={style.img} />
       
        <div className={style.info}>
          <h1>{found?.title}</h1>
          <h2>{found?.description}</h2>
          <p>{found?.price}</p>
        </div>
      </div>
    </div>
  );
}
