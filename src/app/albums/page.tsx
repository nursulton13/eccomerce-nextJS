import Album from "@/components/Album/Album";
import AlbumImage from "@/components/Image/AlbumImage";
import { AlbumsType } from "@/interfaces";
import React from "react";

const AllProducts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=120"
  );
  const albums: AlbumsType[] = await res.json();
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 ">
      <section className="flex flex-col">
        <h1 className="text-5xl font-bold text-center py-12">All Products</h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {albums.map((album) => (
                <Album album={album} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AllProducts;
