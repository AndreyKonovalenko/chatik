import Block from "../../core/Block";
import template from './login.hbs?raw';
import uiConstants from '../../utils/ui-constants.ts'
const { headers } = uiConstants;

export class LoginPage extends Block {
    constructor() {
        super({
            form_title: headers.LOGIN,
            validate: {
                login: (value: string) => value.length < 3 && value.length !== 0 ? `Length of login should not be less 3 letters.` : ''
            },
            onLogin: (event) => {
                event.preventDefault();
                const login =  this.refs.login.value();
                const password =  this.refs.password.value();

                console.log({
                    login,
                    password
                });
            }
        });
    }

    protected render(): string {
        return (` 
        {{#> Layout}}
            <div class="login-form-container">
                {{{ Form form_title=form_title }}}
            </div>
        {{/ Layout}}
        `)
    }
}

export default LoginPage;
