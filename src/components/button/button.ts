import Block from '../../core/Block';

export class Button extends Block {
  constructor() {
    super();
    this.props.events = {
      click:
        this.props.onClick ||
        (() => {
          console.log('hello');
        }),
    };
  }

  protected render(): string {
    return `
            <button class='button' type={{type}} page={{page}}>
                {{text}}
            </button>
        `;
  }
}
