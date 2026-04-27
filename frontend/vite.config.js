import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    allowedHosts: true
  }
});

# 특정 주소만 허용하고 싶다면
//import { sveltekit } from '@sveltejs/kit/vite';
//import { defineConfig } from 'vite';
//
//export default defineConfig({
//  plugins: [sveltekit()],
//  server: {
//    allowedHosts: [
//      'hamburger-unknowing-upcountry.ngrok-free.dev' # ← 변경해야되는 위치
//    ]
//  }
//});
