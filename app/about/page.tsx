import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className='container py-20'>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        Welcome to my image gallery side project
      </h3>
      <small>I built this project using Next.js, ShadcnUI, and Supabase</small>
      <h2 className='text-3xl font-semibold mt-12 border-b'>Features</h2>
      <ul className='mt-6'>
        <li>
          <strong>Sleek Interface:</strong> Enjoy a modern and user-friendly
          interface
        </li>
        <li>
          <strong>Fast Loading:</strong> Gallery loads quickly
        </li>
        <li>
          <strong>ShadcnUI Integration:</strong> Great design
          elements from components
        </li>
        <li>
          <strong>Supabase Backend:</strong> Pictures stored 
        </li>
      </ul>

      <h2 className='mt-4'>Get in Touch</h2>
      <p>Thank you for visiting!</p>
    </div>
  )
}

export default AboutPage
