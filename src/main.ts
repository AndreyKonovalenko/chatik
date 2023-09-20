import Handlebars from 'handlebars';
// Pages
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import ProfilePage from './pages/profile/profile';
import ChatPage from './pages/chat/chat'
// Components
import { SideBar } from './components/side-bar/side-bar';
import { Icon } from './components/icon/icon';
import { ProfileInput } from './components/profile-input/profile-input';
import { Input } from './components/input/input';
import { Button } from './components/button/button';
import { ModalOverLay } from './components/modal/modal-overlay/modal-overlay';
import { ChatMainSection } from './components/chat/chat-main-section/chat-main-section';
import { SearchBar } from './components/chat/search-bar/search-bar';
import { ChatList } from './components/chat/chat-list/chat-list';
import { ChatCard } from './components/chat/chat-card/chat-card';

//Partials
import Layout from './components/layout/layout.hbs?raw';
import Form from './components/form/form.hbs?raw';
import Modal from './components/modal/modal/modal.hbs?raw';

import { registerComponent } from './core/registerComponent';

const pages = {
  login: LoginPage,
  register: RegisterPage,
  profile: ProfilePage,
  chat: ChatPage,
};

Handlebars.registerPartial('Layout', Layout);
Handlebars.registerPartial('Form', Form);
Handlebars.registerPartial('Modal', Modal);

registerComponent('Icon', Icon);
registerComponent('Input', Input);
registerComponent('Button', Button);
registerComponent('ProfileInput', ProfileInput);
registerComponent('ModalOverLay', ModalOverLay);
registerComponent('SideBar', SideBar);
registerComponent('ChatMainSection', ChatMainSection);
registerComponent('SearchBar', SearchBar);
registerComponent('ChatList', ChatList);
registerComponent('ChatCard', ChatCard)

function navigate(page: string) {
  const app = document.getElementById('app');
  const element = document.getElementsByClassName('layout')[0];

  //@ts-ignore
  const Component = pages[page];
  const component = new Component();
  if (element) {
    element.remove();
  }
  app?.append(component.getContent()!);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', (e) => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  console.log(page);
  if (page) {
    navigate(page);
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
