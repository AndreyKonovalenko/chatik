import Block from '../../core/Block';

type IProps = {
  onClick: () => void;
};

export class Icon extends Block {
  constructor(props: IProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    return `
            <div class="icon-contanaier" page={{page}}>
                <style>.{{key}}-icon-settings { 
                    font-size:{{size}}px; color:{{color}};
                    font-variation-settings: 'FILL'{{fill}}, 'wght' 400, 'GRAD' 0, 'opsz' 40; 
                }</style>
                <span class='material-symbols-outlined {{key}}-icon-settings' page={{page}}>
                    {{type}}
                </span>
            </div> 
        `;
  }
}

export default Icon;
