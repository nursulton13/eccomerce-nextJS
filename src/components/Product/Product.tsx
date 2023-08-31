"use client";

import { ProductType } from "@/interfaces";
import React, { FC } from "react";
import CustomImage from "../Image/image";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div className="w-full p-3 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <a className="block relative h-48 rounded overflow-hidden">
        <CustomImage product={product} fill />
      </a>
      <div className="mt-4">
        <h3 className="text-indigo-500 text-xs tracking-widest title-font mb-1">
          {product.category}
        </h3>
        <div className="flex justify-between align-middle">
          <p className="truncate line-clamp-1 w-44">{product.title}</p>
          <p className="truncate">${product.price}</p>
        </div>
        <p className="mt-5 line-clamp-2">{product.description}</p>
      </div>
    </div>
  );
};

export default Product;
