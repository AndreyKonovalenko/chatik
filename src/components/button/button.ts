import Block from '../../core/Block';
import { TProps } from '../../core/Block';

type TButton = TProps;

export class Button extends Block {
  constructor(props: TButton) {
    super({
      ...props,
      events: {
        click: props.onClick || (() => {})
      }
    });
  }

  protected render(): string {
    return `
            <button class='button' type={{type}} page={{page}}>
                {{text}}
            </button>
        `;
  }
}
