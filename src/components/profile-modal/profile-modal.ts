import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants.ts';
const { headers, placeholders, buttons } = uiConstants;

export class ProfileModal extends Block {
  constructor() {
    super({
      form_title: headers.CHANGE_PASSWORD,
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
          name: 'oldPassword',
          placeholder: placeholders.CURRENT_PASSWORD,
          icon: false,
          type: 'login',
        },
        {
          name: 'newPassword',
          placeholder: placeholders.NEW_PASSWORD,
          icon: true,
          type: 'password',
        },
        {
          name: 'newPassword',
          placeholder: placeholders.REPEAT_PASSWORD,
          icon: true,
          type: 'password',
        },
      ],
    });
  }

  protected render(): string {
    return `
          {{#> Modal}}
              <div class="profile-modal-container">
                  {{#> Form form_title=form_title}}
                      {{#each  inputs}}
                          {{{ Input name="this.name" placeholder=this.placeholder type=this.type icon=this.icon }}}
                      {{/ each}}
                      <div class="login-button-container">
                        {{{ Button type="submit" text='${buttons.SAVE}' }}}
                      </div>
                  {{/ Form}}
              </div>
          {{/ Modal}}
        `;
  }
}
