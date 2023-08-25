import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import uiConstants from './src/utils/ui-constants';
import _mock_users from './src/__mocks__/_mock_users';
import _mock_chats from './src/__mocks__/_mock_chats';
import dateFormatter from './src/helpers/date-formater';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context: {
        title: 'Chatik',
        uiConstants: uiConstants,
        _mock_users: _mock_users,
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
