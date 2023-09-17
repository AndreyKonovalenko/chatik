import Block from '../../core/Block';

type BProps = {
  onClick: () => void;
};

export class Button extends Block {
  constructor(props: BProps) {
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
