import Handlebars from 'handlebars';
// Pages
import { LoginPage} from './pages/login/login';
// Components
import { SideBar } from './components/side-bar/side-bar'
import  Form  from './components/form/form.hbs?raw';
import {Icon} from './components/icon/icon'
import {Input} from './components/input/input'
import {Button} from './components/button/button'
//Partials
import Layout  from './components/layout/layout.hbs?raw';

// import * as Components from './components';
// import * as Pages from './pages';

import { registerComponent } from './core/registerComponent';



const pages = {
  'login': LoginPage,
};


 Handlebars.registerPartial('Layout', Layout);
 Handlebars.registerPartial('Form', Form);

// Handlebars.registerPartial('ListCat', Components.ListCat);
// Handlebars.registerPartial('CatCard', Components.CatCard);

registerComponent('SideBar', SideBar);
registerComponent('Icon', Icon);
registerComponent('Input', Input);
registerComponent('Button', Button);


// registerComponent('Button', Components.Button);
// registerComponent('InputField', Components.InputField);
// registerComponent('Input', Components.Input);
// registerComponent('ErrorLine', Components.ErrorLine);


function navigate(page: string) {
  const app = document.getElementById('app');

  if(page === 'list') {
    const container = document.getElementById('app')!;
    container.innerHTML = Handlebars.compile(pages[page])({});
    return;
  }

  //@ts-ignore
  const Component = pages[page]
  const component = new Component();
  app?.append(component.getContent()!);

}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
