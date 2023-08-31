import DjummyProduct from "@/components/DjummyProduct/DjummyProduct";
import { DjummyProductsType } from "@/interfaces";
import React from "react";

const AllProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const djummyProducts: DjummyProductsType = await res.json();

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 ">
      <section className="flex flex-col">
        <h1 className="text-5xl font-bold text-center py-12">All products</h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {djummyProducts?.products.map((product) => (
                <DjummyProduct key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AllProducts;
