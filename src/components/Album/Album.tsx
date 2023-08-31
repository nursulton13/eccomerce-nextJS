import { AlbumsType } from "@/interfaces";
import React, { FC } from "react";
import AlbumImage from "../Image/AlbumImage";

const Album: FC<{ album: AlbumsType }> = ({ album }) => {
  return (
    <div className="w-full p-3 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <a className="block relative h-48 rounded overflow-hidden">
        <AlbumImage album={album} fill />
      </a>
      <div className="mt-4">
        <h2 className="text-indigo-500 tracking-widest title-font mb-1 text-center">
          {album.id}
        </h2>
        <div className="flex flex-col justify-between align-middle h-[108px]">
          <p className="capitalize text-center">{album.title}</p>
          <p className="mt-5 text-xs text-center">{album.url}</p>
        </div>
      </div>
    </div>
  );
};

export default Album;
