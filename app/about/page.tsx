import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className='container'>
      <h3 className='scroll-m-20 pt-12 text-2xl font-semibold tracking-tight'>
        Welcome to my image gallery side project
      </h3>
      <small>I built this project using Next.js, ShadcnUI, and Supabase</small>
      <h2 className='mt-12 text-3xl font-semibold '>Features</h2>
      <ul className='mt-6'>
        <li>
          <strong>Sleek Interface:</strong> Enjoy a modern and user-friendly
          interface created with dev0
        </li>
        <li>
          <strong>ShadcnUI Integration:</strong> Great design elements from
          components
        </li>
        <li>
          <strong>Supabase Backend:</strong> Pictures stored
        </li>
      </ul>
      <h1 className='mt-10'>image-gallery supabase table example:</h1>
      <div className='my-6 w-full overflow-y-auto'>
        <table className='w-full'>
          <thead>
            <tr className='m-0 border-t p-0 even:bg-muted text-sm'>
              <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
                id int8
              </th>
              <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
                created_at timestamptz
              </th>
              <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
                name text
              </th>
              <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
                href text
              </th>
              <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
                username text
              </th>
              <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
                imageSrc text
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='m-0 border-t p-0 text-sm even:bg-muted'>
              <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
                1
              </td>
              <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
                2024-04-07
              </td>
              <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
                cybertruck
              </td>
              <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
                https://twitter.com/Tesla/status/1730322853864595540/photo/2
              </td>
              <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
                @Tesla
              </td>
              <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
                https://pbs.twimg.com/media/GANXWw8WgAAljuC?format=jpg&name=4096x4096
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Thank you for visiting!</p>
      <div className='mt-10 flex items-center gap-4'>
        <Link href={'https://github.com/jefferypippitt'} target='_blank'>
          <Avatar>
            <AvatarImage
              src='https://avatars.githubusercontent.com/u/154731178?s=400&v=4'
              alt=''
            />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
        </Link>
        <h1>Github</h1>
      </div>
    </div>
  )
}

export default AboutPage
