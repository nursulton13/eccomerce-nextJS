import { DjummyProductType } from "@/interfaces";
import React, { FC } from "react";
import DjummyImage from "../Image/DjummyImage";

const DjummyProduct: FC<{ product: DjummyProductType }> = ({ product }) => {
  return (
    <div className="w-full p-3 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <a className="block relative h-48 rounded overflow-hidden">
        <DjummyImage product={product} fill />
      </a>
      <div className="mt-4">
        <div className="flex align-middle justify-between w-full mb-1">
          <h3 className="text-white text-xs tracking-widest title-font line-clamp-1 max-w-[50%] py-0.5 px-3 rounded-full bg-lime-500">
            {product.category}
          </h3>
          <h3 className="text-white text-xs tracking-widest title-font line-clamp-1 max-w-[50%] py-0.5 px-3 rounded-full bg-rose-700">
            {product.brand}
          </h3>
        </div>

        <div className="flex justify-between align-middle">
          <p className="truncate line-clamp-1 w-44">{product.title}</p>
          <p className="truncate">${product.price}</p>
        </div> 
        <p className="mt-4 line-clamp-3">{product.description}</p>
      </div>
    </div>
  );
};

export default DjummyProduct;
