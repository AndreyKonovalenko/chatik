import { InputField } from '../../components/input-field/input-field.ts';
//import store from '../../core/Store.ts';
//import queryStringify from '../../utils/queryStringify.ts';
import Block from '../../core/Block';
import Router from '../../core/Router.ts';
import { signin } from '../../services/controllers/auth-controller.ts';
import uiConstants from '../../utils/ui-constants.ts';
import { validate } from '../../utils/validate.ts';
const { headers, placeholders, buttons, routes } = uiConstants;


type TLoginPage = {
  onLogin: () => void;
  onCreateAccount: () => void;
};


class LoginPage extends Block<TLoginPage> {
  constructor(props: TLoginPage) {
    super({
      ...props,
      validate: validate,
      onLogin: (event: Event) => {
        event.preventDefault();
        this.sendForm();
      },
      onCreateAccount: (event: Event) => {
        event.preventDefault();
        Router.go(routes.REGISTER)
      },
    });
  }
  public sendForm() {
    const login = (this.refs.login as unknown as InputField).isValidValue();
    const password = (
      this.refs.password as unknown as InputField
    ).isValidValue();
    if(login&&password)
    signin({ login, password });
  }

  protected render(): string {

    return ` 
        {{#> Layout}}
            <div class="login-form-container">
                {{#> Form form_title="${headers.LOGIN}"}}
                    {{{ InputField name="login" placeholder="${placeholders.LOGIN}" type="text" icon=false ref="login" value='' validate=validate.login }}}
                    {{{ InputField name="password" placeholder="${placeholders.PASSWORD}" type="password" icon=true ref="password" value='' validate=validate.password }}}
                    <div class="login-button-container">
                      {{{ Button type="submit" text='${buttons.LOGIN}'onClick=onLogin }}}
                    </div>
                    <div class="login-button-container login-button-alter-bg">         
                      {{{ Button type="submit" text='${buttons.CREATE_ACCOUNT}' page='register' onClick=onCreateAccount }}}             
                    </div>
                {{/ Form}}
            <div>
        {{/ Layout}}
        `;
  }
}

export default LoginPage;
