import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants.ts';
const { headers, placeholders, buttons, errors } = uiConstants;

export class ProfileModal extends Block {
  constructor() {
    super({
      form_title: headers.LOGIN,
      validate: {
        login: (value: string) =>
          value.length < 3 && value.length !== 0
            ? `Length of login should not be less 3 letters.`
            : '',
      },
      onLogin: (event) => {
        event.preventDefault();
        const login = this.refs.login.value();
        const password = this.refs.password.value();
        console.log({
          login,
          password,
        });
      },
      onCreateAccount: (event) => {
        event.preventDefault();
      },
      inputs: [
        {
          name: 'login',
          placeholder: placeholders.LOGIN,
          icon: false,
          type: 'login',
        },
        {
          name: 'password',
          placeholder: placeholders.PASSWORD,
          icon: true,
          type: 'password',
        },
      ],
    });
  }

  protected render(): string {
    return ` 
        {{#> Modal}}
            <div class="login-form-container">
                {{#> Form form_title=form_title}}
                    {{#each  inputs}}
                        {{{ Input name="this.name" placeholder=this.placeholder type=this.type icon=this.icon }}}
                    {{/ each}}
                    <div class="login-button-container">
                      {{{ Button type="submit" text='${buttons.LOGIN}' }}}
                    </div>
                    <div class="login-button-container login-button-alter-bg">         
                      {{{ Button type="submit" text='${buttons.CREATE_ACCOUNT}' page='register' onClick=onCreateAccount }}}             
                    </div>
                {{/ Form}}
            <div>
        {{/ Modal}}
        `;
  }
}

// <div class="profile-modal-container">
//     {{#> components/form/form form_title=uiConstants.headers.CHANGE_PASSWORD}}
//         {{> components/input/input type="password" name="oldPassword" placeholder=uiConstants.placeholders.CURRENT_PASSWORD icon=true}}
//         {{> components/input/input type="password" name="newPassword" placeholder=uiConstants.placeholders.NEW_PASSWORD icon=true}}
//           {{> components/input/input type="password" name="newPassword" placeholder=uiConstants.placeholders.REPEAT_PASSWORD icon=true}}
//         <div class="profile-modal-button-container ">
//           {{> components/button/button type="submit" text=uiConstants.buttons.SAVE}}
//         </div>
//     {{/ components/form/form}}
//   </div>
