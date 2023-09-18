import Block from '../../core/Block.ts';
import uiConstants from '../../utils/ui-constants.ts';
const { headers, placeholders, buttons, errors } = uiConstants;

class RegisterPage extends Block {
  constructor() {
    super({
      form_title: headers.REGISTER,
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
      onHaveAccount: (event) => {
        event.preventDefault();
        // const login = this.refs.login.value();
        // const password = this.refs.password.value();
        // console.log({
        //   login,
        //   password,
        // });
        console.log('onHaveAccount');
      },
      inputs: [
        {
          name: 'email',
          placeholder: placeholders.EMAIL,
          icon: false,
          type: 'email',
        },
        {
          name: 'login',
          placeholder: placeholders.LOGIN,
          icon: false,
          type: 'login',
        },
        {
          name: 'first_name',
          placeholder: placeholders.FIRST_NAME,
          icon: false,
          type: 'text',
        },
        {
          name: 'second_name',
          placeholder: placeholders.LAST_NAME,
          icon: false,
          type: 'password',
        },
        {
          name: 'phone',
          placeholder: placeholders.PHONE_NUMBER,
          icon: false,
          type: 'text',
        },
        {
          name: 'password',
          placeholder: placeholders.PASSWORD,
          icon: true,
          type: 'password',
        },
        {
          name: 'password',
          placeholder: placeholders.REPEAT_PASSWORD,
          icon: true,
          type: 'password',
        },
      ],
    });
  }

  protected render(): string {
    return ` 
        {{#> Layout}}
            <div class="register-form-container">
                {{#> Form form_title=form_title}}
                    {{#each  inputs}}
                        {{{ Input name="this.name" placeholder=this.placeholder type=this.type icon=this.icon }}}
                    {{/ each}}
                    <div class="login-button-container">
                    {{{ Button type="submit" text='${buttons.CREATE_ACCOUNT}' }}}
                    </div>
                    <div class="login-button-container login-button-alter-bg">         
                    {{{ Button type="submit" text='${buttons.HAVE_ACCOUNT}' page="login" onClick=onHaveAccount }}}             
                    </div>
                {{/ Form}}
            <div>
        {{/ Layout}}
        `;
  }
}

export default RegisterPage;
