"use client";
import ShoppingCart from "@/components/Summary/ShoppingCart";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "@/features/CartSlice";
import { CardData } from "@/helpers/CardData";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [filteredCart, setFilteredCart] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        dispatch(setCart(JSON.parse(savedCart)));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    const updatedCart = cart
      .map((item) => {
        const product = CardData.find((p) => p.id === item.id);
        return product ? { ...product, quantity: item.quantity } : null;
      })
      .filter(Boolean); 

    setFilteredCart(updatedCart);
  }, [cart]);

  return (
    <section className="md:max-w-[1200px] w-full mx-auto lg:pb-0 pb-10">
      <ShoppingCart cart={filteredCart} />
    </section>
  );
}
