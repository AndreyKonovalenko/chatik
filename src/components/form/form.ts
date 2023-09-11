import Block from '../../core/Block';

type FProps =  {
    form_title: string
}

export class Form extends Block {
    constructor(props: FProps) {
        super({
            ...props,
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
                <div class="form-container"}>
                    {{#if form_title}}
                        <div class="header">
                            <p>{{form_title}}</p>
                        </div>
                        {{/if}}
                        <from class="form">

                        </div>
                    </from>
                </div>
        `)
    }
}

export default Form;
