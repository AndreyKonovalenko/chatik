import Block from '../../core/Block';

type TButton =  {
  onClick: () => void; 
  events: object;
};

export class Button extends Block<TButton> {
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
