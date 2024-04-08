'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchImages } from '@/app/index'
import Link from 'next/link'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

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
    <div className='container'>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center'>
        Image Gallery Project
      </h2>
      <div className='grid grid-cols-1 gap-6 p-4 md:grid-cols-2 md:p-6 lg:grid-cols-3 xl:grid-cols-4'>
        {images.map(image => (
          <Link
            href={image.href}
            className='group'
            key={image.id}
            target='_blank'
          >
            <Card>
              <div className='aspect-[4/3] overflow-hidden'>
                <Image
                  alt=''
                  className='aspect-3/2 w-full scale-100 transform overflow-hidden rounded-lg object-cover transition-transform duration-300 group-hover:scale-110'
                  height={300}
                  src={image.imageSrc}
                  style={{
                    aspectRatio: '400/300',
                    objectFit: 'cover'
                  }}
                  width={400}
                />
              </div>
              <CardHeader className='p-4'>
                <CardTitle className='text-sm'>{image.name}</CardTitle>
                <CardDescription className='text-xs'>
                  {image.username}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
