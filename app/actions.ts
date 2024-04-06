"use server";

import { createClient } from '@supabase/supabase-js';

export async function fetchImages() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  );

  const { data } = await supabaseAdmin.from('images').select('*').order('id');
  return data || [];
}
export async function getStaticProps() {
    try {
      const images = await fetchImages();
  
      return {
        props: {
          images,
        },
      };
    } catch (error) {
      console.error('Error fetching images:', error);
      return {
        props: {
          images: [],
        },
      };
    }
  }