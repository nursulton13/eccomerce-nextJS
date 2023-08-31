'use client'

import { AlbumsType } from '@/interfaces';
import Image from 'next/image'
import React, { FC, useState } from 'react'

interface Props {
    album: AlbumsType;
    fill?: boolean;
  }

const AlbumImage:FC<Props> = ({ album, fill }) => {
    const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      src={album.url}
      alt={album.title}
      fill={fill}
      className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }}`}
      onLoadingComplete={() => setIsLoading(false)}
    />
  )
}

export default AlbumImage