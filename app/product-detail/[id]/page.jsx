"use client";
import { CardData } from "@/helpers/CardData";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Breadcrumbs from "@/components/additional/BreadCrums";
import Image from "next/image";
import SameProducts from "@/components/product/SameProducts";
import Details from "@/components/details/Details";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/CartSlice";
import StarRating from "@/components/star/Star";

export default function Detail() {
  const params = useParams();
  const [param, setParam] = useState(null);
  const [img, setImg] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectSize, setSelectSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params?.id) setParam(params.id);
  }, [params]);

  const card = CardData.find((item) => Number(item.id) === Number(param));

  const handleAddToCart = () => {
    if (!card) return;
    dispatch(addToCart({ id: card.id }));
  };

  return (
    <section>
      <hr className="Container text-[#0000001A]" />
      <Breadcrumbs />
      {card ? (
        <div className="Container flex gap-10">
          <div className="w-[50%] flex gap-3.5">
            <div className="flex flex-col gap-3.5">
              {["main", "back", "view"].map((key) => (
                <button key={key} onClick={() => setImg(card.img[key])} className="cursor-pointer">
                  <img src={card.img[key]} alt={`product image ${key}`} className="rounded-[20px] w-[150px] h-[165px] mix-blend-multiply"/>
                </button>
              ))}
            </div>
            <div className="rounded-[20px] overflow-hidden">
              {img ? (
                <img src={img} alt="product image" className="w-[444px] h-[530px] object-cover" />
              ) : (
                <div className="bg-[#F0F0F0] w-[444px] h-[530px] flex justify-center items-center">
                  <h2 className="text-2xl font-semibold">Select one</h2>
                </div>
              )}
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-5">
            <h2 className="font-bold text-[40px]">{card.title}</h2>
            <StarRating />
            <div className="flex items-center gap-2.5">
              <h3 className="font-bold text-2xl">${card.price}</h3>
              {card.discount && (
                <>
                  <s className="font-bold text-2xl text-[#00000066]">${card.discount_price}</s>
                  <h4 className="bg-[#FF33331A] text-[#FF3333] py-1.5 px-3.5 rounded-[62px]">
                    -{card.discount_percent}%
                  </h4>
                </>
              )}
            </div>
            <p className="text-[16px] font-normal text-[#00000099]">{card.about}</p>
            <hr className="text-[#0000001A]" />
            <div className="w-full flex flex-col gap-4">
              <h3>Select Colors</h3>
              <div className="flex gap-3.5">
                {[
                  { id: 1, color: "bg-[#4F4631]" },
                  { id: 2, color: "bg-[#314F4A]" },
                  { id: 3, color: "bg-[#31344F]" },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedColor(item.id)}
                    className={`${item.color} w-[30px] h-[30px] rounded-full cursor-pointer hover:scale-105 flex justify-center items-center`}
                  >
                    {selectedColor === item.id && <span className="text-[15px] font-bold text-white">✓</span>}
                  </div>
                ))}
              </div>
            </div>
            <hr className="text-[#0000001A]" />
            <div className="w-full flex flex-col gap-4">
              <h3>Choose Size</h3>
              <div className="w-full flex gap-3">
                {[
                  { id: 1, text: "Small" },
                  { id: 2, text: "Medium" },
                  { id: 3, text: "Large" },
                  { id: 4, text: "X-Large" },
                ].map((item) => (
                  <button
                    onClick={() => setSelectSize(item.id)}
                    key={item.id}
                    className={`${selectSize === item.id ? "text-[#F0F0F0] bg-black" : "bg-[#F0F0F0] text-black"
                      } py-2.5 px-5 rounded-full cursor-pointer`}
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            </div>
            <hr className="text-[#0000001A]" />
            <div className="w-full flex gap-5 items-center justify-between">
              <div className="flex bg-[#F0F0F0] rounded-full w-[170px] h-[50px] justify-between items-center px-5">
                <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))} className="text-2xl cursor-pointer">-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((prev) => prev + 1)} className="text-2xl cursor-pointer">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-[400px] h-[50px] rounded-full bg-black text-white hover:bg-white hover:text-black hover:border hover:border-[#0000001A] transition duration-300 ease-in-out cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
      <div className="Container">
        <Details data={card} />
      </div>
      <SameProducts text={"You might also like"} />
    </section>
  );
}
