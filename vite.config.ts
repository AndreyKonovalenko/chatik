import { defineConfig } from 'vite';
import { resolve } from 'path';
// import uiConstants from './src/utils/ui-constants';
// import _mock_users from './src/__mocks__/_mock_users';
// import _mock_chats from './src/__mocks__/_mock_chats';
// import dateFormatter from './src/helpers/date-formater';

// export default defineConfig({
//   plugins: [
//     handlebars({
//       partialDirectory: resolve(__dirname, 'src/partials'),
//       context: {
//         title: 'Chatik',
//         uiConstants: uiConstants,
//         _mock_users: _mock_users,
//         _mock_chats: _mock_chats,
//       },
//       helpers: {
//         dateFormatter,
//       },
//     }),
//   ],
//   build: {
//     rollupOptions: {
//       input: {
//         index: resolve(__dirname, 'index.html'),
//         login: resolve(__dirname, 'src/pages/login.html'),
//         register: resolve(__dirname, 'src/pages/register.html'),
//         error_404: resolve(__dirname, 'src/pages/error-404.html'),
//         error_500: resolve(__dirname, 'src/pages/error-500.html'),
//         profile: resolve(__dirname, 'src/pages/profile.html'),
//         profile_modal: resolve(
//           __dirname,
//           'src/pages/profile-chage-pass-modal.html'
//         ),
//         chat: resolve(__dirname, 'src/pages/chat.html'),
//         chat_delete_chat: resolve(
//           __dirname,
//           'src/pages/chat-delete-chat-modal.html'
//         ),
//         chat_delete_user: resolve(
//           __dirname,
//           'src/pages/chat-delete-user-modal.html'
//         ),
//         chat_add_user: resolve(__dirname, 'src/pages/chat-add-user-modal.html'),
//         chat_create_chate: resolve(
//           __dirname,
//           'src/pages/chat-create-chat-modal.html'
//         ),
//       },
//     },
//   },
// });
export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
      outDir: resolve(__dirname, 'dist'),
  },
})
