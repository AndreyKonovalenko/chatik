import { InputField } from '../../components/input-field/input-field.ts';
import Block from '../../core/Block.ts';
import uiConstants from '../../utils/ui-constants.ts';
import Router from '../../core/Router.ts';
import { validate } from '../../utils/validate.ts';
import { signup } from '../../services/controllers/auth-controller.ts';
const { headers, placeholders, buttons, routes } = uiConstants;

type TRegisterPage = {
  onRegister: () => void;
  onHaveAccount: () => void;
};

class RegisterPage extends Block<TRegisterPage> {
  constructor(props: TRegisterPage) {
    super({
      ...props,
      validate: validate,
      onRegister: (event: Event) => {
        event.preventDefault();
        this.sendForm();
      },
      onHaveAccount: (event: Event) => {
        event.preventDefault();
        Router.go(routes.INDEX)
      },
    });
  }
  public sendForm() {
    const email = (this.refs.email as unknown as InputField).isValidValue();
    const login = (this.refs.login as unknown as InputField).isValidValue();
    const first_name = (this.refs.first_name as unknown as InputField).isValidValue();
    const second_name = (this.refs.second_name as unknown as InputField).isValidValue();
    const phone = (this.refs.phone as unknown as InputField).isValidValue();
    const password = (this.refs.password as unknown as InputField).isValidValue();
    const repeat_password = (this.refs.repeat_password as unknown as InputField).isValidValue();

    if(email && login && first_name && second_name && phone && password && password === repeat_password) {
      signup({
        first_name,
        second_name,
        login,
        phone,
        password,
        email,
      })
    }
  }

  protected render(): string {
    return ` 
        {{#> Layout}}
            <div class="register-form-container">
                {{#> Form form_title=${headers.REGISTER}}}
                   {{{ InputField name="email" placeholder="${placeholders.EMAIL}" type="text" icon=false ref="email" value='' validate=validate.email }}}
                   {{{ InputField name="login" placeholder="${placeholders.LOGIN}" type="text" icon=false ref="login" value='' validate=validate.login }}}
                   {{{ InputField name="first_name" placeholder="${placeholders.FIRST_NAME}" type="text" icon=false ref="first_name" value='' validate=validate.first_name }}}
                   {{{ InputField name="second_name" placeholder="${placeholders.LAST_NAME}" type="text" icon=false ref="second_name" value='' validate=validate.second_name }}}
                   {{{ InputField name="phone" placeholder="${placeholders.PHONE_NUMBER}" type="text" icon=false ref="phone" value='' validate=validate.phone }}}
                   {{{ InputField name="password" placeholder="${placeholders.PASSWORD}" type="password" icon=false ref="password" value='' validate=validate.password }}}
                   {{{ InputField name="repeat_password" placeholder="${placeholders.REPEAT_PASSWORD}" type="password" icon=false ref="repeat_password" value='' validate=validate.password }}}
                    <div class="login-button-container">
                    {{{ Button type="submit" text='${buttons.CREATE_ACCOUNT}' onClick=onRegister }}}
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
