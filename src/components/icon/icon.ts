import Block from '../../core/Block';

type IProps =  {
    type: 'primary' | 'link',
    label: string,
    page: string,
    onClick: () => void
}

export class Form extends Block {
    constructor(props: IProps) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }


    protected render(): string {
        return (`
             <style>
                .{{key}}-icon-settings { font-size:{{size}}px; color:{{color}};
                font-variation-settings: 'FILL'{{fill}}, 'wght' 400, 'GRAD' 0, 'opsz' 40; }
            </style>
            <span class='material-symbols-outlined {{key}}-icon-settings'>{{type}}</span>
        `)
    }
}

export default Form;


constructor(props: IProps) {
    super(props);
    this.props.events = {
        click: this.props.onClick || (() => {})
    }
}