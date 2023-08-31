import Product from "@/components/Product/Product";
import { ProductType } from "@/interfaces";
import React from "react";

const HomePage = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 ">
      <section className="flex flex-col">
        <h1 className="text-5xl font-bold text-center py-12">SHOP DEALS</h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default HomePage;
