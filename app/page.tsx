'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchImages } from '@/app/index'
import Link from 'next/link'

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
  const [images, setImages] = useState<ImageData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imagesData = await fetchImages()
        setImages(imagesData || [])
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div>
        <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
          Image Gallery Project
        </h2>
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image) => (
            <Link href={image.href} className='group' key={image.id} target='_blank'>
              <div className='group relative overflow-hidden rounded-lg '>
                <div className='overflow-hidden rounded-lg shadow-lg '>
                  <div className='aspect-w-3 aspect-h-2 '>
                    <Image
                      alt=''
                      src={image.imageSrc}
                      width={600} // Set a fixed width
                      height={400} // Set a fixed height
                      objectFit='fill'
                      className={cn(
                        "aspect-3/2 object-cover w-full transition-transform duration-300 transform scale-100 group-hover:scale-110 rounded-lg overflow-hidden"
                      )}
                    />
                  </div>
                  <div className='grid gap-2 p-4'>
                    <h3 className='text-lg font-semibold'>{image.name}</h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      {image.username}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}