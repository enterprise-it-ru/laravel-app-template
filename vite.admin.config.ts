import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    laravel({
      input: [
        'resources/admin/app.ts',
      ],
      refresh: true,
      buildDirectory: 'build-admin'
    }),
  ],
  resolve: {
    alias: {
      '@': '/resources/admin',
    },
  },
});
