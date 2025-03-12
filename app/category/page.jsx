import BreadCrums from "@/components/additional/BreadCrums";
import Filter from "@/components/filter/Filter";
import AllProducts from "@/components/product/AllProducts";

export default function Category() {
  return (
    <>
      <hr className="Container text-[#0000001A]" />
      <BreadCrums />
      <section className="Container flex gap-5">
        <Filter />
        <AllProducts />
      </section>
    </>
  )
}
