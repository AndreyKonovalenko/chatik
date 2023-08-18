import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import uiConstants from './src/utils/ui-constants';
import test_user from './src/utils/test_user';
export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context: {
        title: 'Chatik',
        uiConstants: uiConstants,
        test_user: test_user,
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/login/login.html'),
        register: resolve(__dirname, 'src/pages/register/register.html'),
      },
    },
  },
});
