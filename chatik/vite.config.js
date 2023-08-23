import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import uiConstants from './src/utils/ui-constants';
import _mock_user from './src/utils/_mock_user';
import _mock_chats from './src/utils/_mock_chats';
import dateFormatter from './src/helpers/date-formater';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context: {
        title: 'Chatik',
        uiConstants: uiConstants,
        _mock_user: _mock_user,
        _mock_chats: _mock_chats,
      },
      helpers: {
        dateFormatter,
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
