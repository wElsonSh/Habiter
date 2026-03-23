import react from '@vitejs/plugin-react-swc';
import path from 'path'; // Импортируем path
import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Настраиваем алиас @ на папку src
      '@': path.resolve(__dirname, './src'),
      // Можно добавить специфичные алиасы
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
})