"use client";
import { CardData } from "@/helpers/CardData";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Breadcrumbs from "@/components/additional/BreadCrums";
import Image from "next/image";
import SameProducts from "@/components/product/SameProducts";
import Details from "@/components/details/Details";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/features/CartSlice";

export default function Detail() {
  const params = useParams();
  const [param, setParam] = useState(null);
  const [img, setImg] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectSize, setSelectSize] = useState(null);
  const [quantity, setQuantity] = useState(1); // Yangi state

  const dispatch = useDispatch();

  useEffect(() => {
    if (params?.id) {
      setParam(params.id);
    }
  }, [params]);

  const card = CardData.find((item) => Number(item.id) === Number(param));

  const handleChangeImg = (img) => {
    setImg(img);
  };

  const handleIncrease = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  const handleAddToCart = () => {
    if (!card) return;

    const cartItem = {
      id: card.id,
      title: card.title,
      price: card.price,
      quantity: quantity, // Tanlangan miqdorni Redux store'ga jo'natamiz
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <section>
      <hr className="Container text-[#0000001A]" />
      <Breadcrumbs />
      {card ? (
        <div className="Container">
          <div className="w-full flex justify-between gap-10">
            <div className="w-[50%] flex gap-3.5">
              <div className="flex flex-col gap-3.5">
                <button onClick={() => handleChangeImg(card.img.main)} className="cursor-pointer">
                  <Image width={150} height={170} src={card.img.main} alt="product image main" />
                </button>
                <button onClick={() => handleChangeImg(card.img.back)} className="cursor-pointer">
                  <Image width={150} height={170} src={card.img.back} alt="product image back" />
                </button>
                <button onClick={() => handleChangeImg(card.img.view)} className="cursor-pointer">
                  <Image width={150} height={170} src={card.img.view} alt="product image view" />
                </button>
              </div>
              <div className="rounded-[20px] overflow-hidden">
                {img ? (
                  <Image width={444} height={530} src={img} alt="product image" className="object-cover" />
                ) : (
                  <div className="bg-[#F0F0F0] w-[444px] h-[530px] flex justify-center items-center">
                    <h2 className="text-2xl font-semibold">Select one</h2>
                  </div>
                )}
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-5">
              <h2>{card.title}</h2>
              <h4>{card.star}/5</h4>
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
              <p>{card.about}</p>
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
              <div className="flex gap-5">
                <div className="flex bg-[#F0F0F0] rounded-full w-[170px] h-[50px] justify-between items-center px-5">
                  <button onClick={handleDecrease} className="text-2xl cursor-pointer">-</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrease} className="text-2xl cursor-pointer">+</button>
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
