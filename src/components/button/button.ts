import Block from '../../core/Block';
import { TProps } from '../../core/Block';


export class Button extends Block {
  constructor(props: TProps) {
    super(props);
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
