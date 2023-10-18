import { defineConfig } from 'astro/config';


import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: "static",
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  adapter: vercelStatic({
    
    imagesConfig: {
      sizes: [200, 320, 450, 640, 1280],
      "formats": ["image/avif", "image/webp"],
      domains:[],
     
    },
    imageService: true,
  })
});