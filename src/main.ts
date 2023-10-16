import Block from './core/Block';
import Handlebars from 'handlebars';
import store from './services/Store';
// Pages
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import ProfilePage from './pages/profile/profile';
import ChatPage from './pages/chat/chat';
// Components
import { SideBar } from './components/side-bar/side-bar';
import { Icon } from './components/icon/icon';
import { ProfileInputField } from './components/profile-input-field/profile-input-field';
import { Input } from './components/input/input';
import { InputField } from './components/input-field/input-field';
import { Button } from './components/button/button';
import { ModalOverLay } from './components/modal/modal-overlay/modal-overlay';
import { ChatMainSection } from './components/chat/chat-main-section/chat-main-section';
import { SearchBar } from './components/chat/search-bar/search-bar';
import { ChatList } from './components/chat/chat-list/chat-list';
import { ChatCard } from './components/chat/chat-card/chat-card';
import { ChatMessageSection } from './components/chat/chat-message-section/chat-message-secton';
import { ErrorLine } from './components/error-line/error-line';
import { ChatField } from './components/chat/chat-field/chat-fied';
import { SendMessageBar } from './components/chat/send-message-bar/send-message-bar';
import { Message } from './components/chat/message/message';
import { Logo } from './components/logo/logo';
//Partials
import Layout from './components/layout/layout.hbs?raw';
import Form from './components/form/form.hbs?raw';
import Modal from './components/modal/modal/modal.hbs?raw';

import { registerComponent } from './core/registerComponent';
import Router from './core/Router';

// type TPages = {
//   [key: string]:  unknown
// }

// const pages: TPages = {
//   login: LoginPage,
//   register: RegisterPage,
//   profile: ProfilePage,
//   chat: ChatPage,
// };

Handlebars.registerPartial('Layout', Layout);
Handlebars.registerPartial('Form', Form);
Handlebars.registerPartial('Modal', Modal);

registerComponent('Icon', Icon as typeof Block);
registerComponent('Input', Input as typeof Block);
registerComponent('Button', Button as typeof Block);
registerComponent('InputField', InputField as typeof Block);
registerComponent('ProfileInputField', ProfileInputField as typeof Block);
registerComponent('ModalOverLay', ModalOverLay as typeof Block);
registerComponent('SideBar', SideBar as typeof Block);
registerComponent('ChatMainSection', ChatMainSection as typeof Block);
registerComponent('SearchBar', SearchBar as typeof Block);
registerComponent('ChatList', ChatList as typeof Block);
registerComponent('ChatCard', ChatCard as typeof Block);
registerComponent('ChatMessageSection', ChatMessageSection as typeof Block);
registerComponent('ErrorLine', ErrorLine as typeof Block);
registerComponent('ChatField', ChatField as typeof Block);
registerComponent('SendMessageBar', SendMessageBar as typeof Block);
registerComponent('Message', Message as typeof Block);
registerComponent('Logo', Logo as typeof Block);

enum Routes {
  Index = '/',
  Register = '/register',
  Profile = '/profile',
  Chat = '/chat',
}

// type TAppState = {
//   test: boolean
// }

// declare global {
//   interface Window {
//     store: Store<TAppState>;
//   }
//   type Nullable<T> = T | null;

// }

// const initState: TAppState = {
//   test: false
// }

// window.store = new Store<TAppState>(initState);

type TProflie = { 
  editMode: boolean
}

export type TAppState =  {
  profile: TProflie
};

const defaultState: TAppState = {
  profile: {
    editMode: false
  }
};

store.set(defaultState);

// function navigate(page: string) {
//   const app = document.getElementById('app');
//   const element = document.getElementsByClassName('layout')[0];
//   const Component = pages[page as keyof TPages] as typeof Block;
//   const component = new Component({});
//   if (element) {
//     element.remove();
//   }
//   app?.append(component.getContent()!);
// }

// document.addEventListener('DOMContentLoaded', () => navigate('login'));
// document.addEventListener('click', (e: Event) => {

// const page = (<HTMLDivElement> e.target).getAttribute('page');
//   if (page) {
//     navigate(page);
//     e.preventDefault();
//     e.stopImmediatePropagation();
//   }
// });

window.addEventListener('DOMContentLoaded', () => {
  Router.use(Routes.Index, LoginPage as typeof Block)
    .use(Routes.Register, RegisterPage as typeof Block)
    .use(Routes.Profile, ProfilePage as typeof Block)
    .use(Routes.Chat, ChatPage as typeof Block);
  Router.start();

  // let isProtectedRoute = true;

  // switch (window.location.pathname) {
  //   case Routes.Index:
  //   case Routes.Register:
  //     break;
  // }
  // try {
  //   await AuthController.fetchUser();

  //   Router.start();

  //   if (!isProtectedRoute) {
  //     Router.go(Routes.Profile)
  //   }
  // } catch (e) {
  //   Router.start();

  //   if (isProtectedRoute) {
  //     Router.go(Routes.Index);
  //   }
  // }
});
