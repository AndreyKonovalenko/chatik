import Handlebars from 'handlebars';
// import * as Components from './components';
// import * as Pages from './pages';
//import { registerComponent } from './core/resgiterComponent';

import { Layout } from './components/layout';

console.log(Layout)
// const pages = {
//   'login': Layout,
//   'list': Layout,
// };


Handlebars.registerPartial('Layout', Layout);
// Handlebars.registerPartial('ListCat', Components.ListCat);
// Handlebars.registerPartial('CatCard', Components.CatCard);

// registerComponent('Button', Components.Button);
// registerComponent('InputField', Components.InputField);
// registerComponent('Input', Components.Input);
// registerComponent('ErrorLine', Components.ErrorLine);


// function navigate(page: string) {
//   const app = document.getElementById('app');

//   if(page === 'list') {
//     const container = document.getElementById('app')!;
//     container.innerHTML = Handlebars.compile(Layout)({});
//     return;
//   }

//   //@ts-ignore
//   const Component = pages[page]
//   const component = new Component();
//   app?.append(component.getContent()!);

// }

// document.addEventListener('DOMContentLoaded', () => navigate('login'));

// document.addEventListener('click', e => {
//   //@ts-ignore
//   const page = e.target.getAttribute('page');
//   if (page) {
//     navigate(page);

//     e.preventDefault();
//     e.stopImmediatePropagation();
//   }
// });


const render = () => {
  const container = document.getElementById('app')!;
  console.log('hello')
  container.innerHTML = Handlebars.compile(Layout)({});
}

document.addEventListener('DOMContentLoaded', () => render());
