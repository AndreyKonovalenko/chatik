import Handlebars from 'handlebars';
// Pages
import { LoginPage} from './pages/login/login';
// Components
import { SideBar } from './components/side-bar/side-bar'
import { Form } from './components/form/form'
//Partials
import Layout  from './components/layout/layout.hbs?raw';

// import * as Components from './components';
// import * as Pages from './pages';

import { registerComponent } from './core/registerComponent';



const pages = {
  'login': LoginPage,
};

console.log(Layout)
console.log(SideBar)

 Handlebars.registerPartial('Layout', Layout);

// Handlebars.registerPartial('ListCat', Components.ListCat);
// Handlebars.registerPartial('CatCard', Components.CatCard);

registerComponent('SideBar', SideBar)
registerComponent('Form', Form)

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
