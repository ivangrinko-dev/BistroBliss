"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import array from "../../storage/storage";
import Image from "next/image"

export default function id() {
  const { id } = useParams();
  const [found, setFound] = useState({});

  useEffect(() => {
    const resut = array.filter((elem) => elem.id == id);
    setFound(resut[0]);
  }, []);

  return (
    <>
      <p>{found?.price}</p>
      <h2>{found?.title}</h2>
      <p>{found?.description}</p>
      <Image src={found?.img} alt={found?.img} />
    </>
  );
}
