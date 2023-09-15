import Block from "../../core/Block";
import uiConstants from '../../utils/ui-constants.ts'
const { headers, placeholders, buttons, errors } = uiConstants;

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
            },
            inputs: [
                {name: 'login', placeholder: placeholders.LOGIN, icon: false,  type: 'login'},
                {name: 'password', placeholder: placeholders.PASSWORD, icon: true, type: 'password'}
            ]
            
        });
    }

    protected render(): string {
        return (` 
        {{#> Layout}}
            <div class="login-form-container">
                {{#> Form form_title=form_title}}
                    {{#each  inputs}}
                        {{{ Input name="this.name" placeholder=this.placeholder type=this.type icon=this.icon }}}
                    {{/ each}}
                    <div class="login-button-container">
                      {{{ Button type="submit" text='${buttons.LOGIN}' }}}
                    </div>
                    <div class="login-button-container login-button-alter-bg">         
                      {{{ Button type="submit" text='${buttons.CREATE_ACCOUNT}' }}}             
                    </div>
                {{/ Form}}
            <div>
        {{/ Layout}}
        `)
    }
}

export default LoginPage;
