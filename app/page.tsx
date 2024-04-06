"use client";
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchImages } from '@/app/actions'

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type ImageData = {
  id: number
  href: string
  imageSrc: string
  name: string
  username: string
}

export default function Page() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imagesData = await fetchImages();
        setImages(imagesData || []);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images.map((image) => (
          <a href={image.href} className="group" key={image.id}>
            <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <Image
                  alt=""
                  src={image.imageSrc}
                  layout="responsive"
                  width={300} // Set an appropriate width
                  height={300} 
                  objectFit="cover"
                  className={cn(
                    'duration-700 ease-in-out group-hover:opacity-75',
                    'scale-100 blur-0 grayscale-0'
                  )}
                />
              </div>
              <div className="p-4">
                <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}