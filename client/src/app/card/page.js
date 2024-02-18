"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import array from "../../app/storage/storage";

 export default function Card() {
  const { id } = useParams();
  const [found, setFound] = useState({});

  useEffect(() => {
    setFound(array.filter((elem) => elem.id == id)[0]);
  }, []);

  return (
    <>
  <p>hi</p>
    </>
  );
}
