import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants.ts';
import { validate } from '../../utils/validate.ts';
const { headers, placeholders, buttons } = uiConstants;

type TLoginPage = {
  onLogin: () => void;
  onCreateAccount: () => void;
};

class LoginPage extends Block<TLoginPage | any> {
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
      },
    });
  }

  public sendForm() {
    const login = (this.refs.login as LoginPage).isValidValue();
    const password = this.refs.password.isValidValue();
    console.log({ login, password });
  }

  protected render(): string {
    return ` 
        {{#> Layout}}
            <div class="login-form-container">
                {{#> Form form_title="${headers.LOGIN}"}}
                    {{{ InputField name="login" placeholder="${placeholders.LOGIN}" type="text" icon=false ref="login" value='' onChange=onChange validate=validate.login }}}
                    {{{ InputField name="password" placeholder="${placeholders.PASSWORD}" type="password" icon=true ref="password" value='' onChange=onChange validate=validate.password }}}
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
