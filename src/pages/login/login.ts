import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants.ts';
const { headers, placeholders, buttons, errors } = uiConstants;

class LoginPage extends Block {
  constructor(props: any) {
    super({
      ...props,
      loginState: {
        login: '',
        password: '',
      },
      onChange: (name: string, value: string): void => {
        this.setLoginState(name, value);
      },
      validate: {
        login: (value: string) =>
          value.length < 3 && value.length !== 0
            ? `Length of login should not be less 3 letters.`
            : '',
      },
      onLogin: (event: Event) => {
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
    });
  }
  public setLoginState(name: string, value: string): void {
    this.props.loginState = { ...this.props.loginState, [name]: value };
  }

  protected render(): string {
    const { loginState } = this.props;

    return ` 
        {{#> Layout}}
            <div class="login-form-container">
                {{#> Form form_title="${headers.LOGIN}"}}
                    {{{ InputField name="login" placeholder="${placeholders.LOGIN}" type="text" icon=false ref="login" value='${loginState.login}' onChange=onChange }}}
                    {{{ InputField name="password" placeholder="${placeholders.PASSWORD}" type="password" icon=true ref="password" value='${loginState.password}' onChange=onChange }}}
                    <div class="login-button-container">
                      {{{ Button type="submit" text='${buttons.LOGIN}' }}}
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
