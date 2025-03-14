"use client";
import { CardData } from "@/helpers/CardData";
import { useState, useEffect } from "react";

export default function Detail({ params }) {
  const [param, setParam] = useState(null);

  useEffect(() => {
    if (params?.id) {
      setParam(params.id);
    }
  }, [params]);

  const card = CardData.find((item) => Number(item.id) === Number(param));

  return (
    <div>
      {/* <h1>Detail Page</h1> */}
      <p>Param ID: {param}</p>
      {card ? (
        <div>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ) : (
        <p>Card not found</p>
      )}
    </div>
  );
}
