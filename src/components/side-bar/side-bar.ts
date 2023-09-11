import Block from "../../core/Block";
import template from './side-bar.hbs?raw'

export class SideBar extends Block {
    constructor() {
        super({
            // validate: {
            //     login: (value: string) => value.length < 3 && value.length !== 0 ? `Length of login should not be less 3 letters.` : ''
            // },
            // onLogin: (event) => {
            //     event.preventDefault();
            //     const login =  this.refs.login.value();
            //     const password =  this.refs.password.value();

            //     console.log({
            //         login,
            //         password
            // }
        });
    }

    protected render(): string {
        return `${template}`;
    }
}

export default SideBar;


