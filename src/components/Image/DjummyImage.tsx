'use client'

import { DjummyProductType } from "@/interfaces";
import Image from "next/image";
import React, { FC, useState } from "react";

interface Props {
  product: DjummyProductType;
  fill?: boolean;
}
const DjummyImage: FC<Props> = ({ product, fill }) => {
  var index = 0;
  const imageSrc = product.images[index];
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={imageSrc}
      
      alt={product.title}
      fill={fill}
      className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }}`}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default DjummyImage;
