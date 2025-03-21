"use client"
import BreadCrums from "@/components/additional/BreadCrums";
import Filter from "@/components/filter/Filter";
import AllProducts from "@/components/product/AllProducts";
import { useState } from "react";

export default function Category() {
  const [openFilter, setOpenFilter] = useState(false)
  return (
    <>
      <hr className="Container text-[#0000001A]" />
      <BreadCrums />
      <section className="Container flex gap-5 items-start">
        <Filter />
        <AllProducts setOpenFilter={setOpenFilter} />
        {/* Filter Modal (Mobile) */}
        {openFilter && (
          <div className="fixed inset-0 top-[70px] flex items-center justify-center z-50">
            <div className="bg-white w-full h-full max-w-md rounded-lg overflow-y-auto">
              <Filter setOpenFilter={setOpenFilter} openFilter={openFilter} />
            </div>
          </div>
        )}


      </section>
    </>
  )
}
