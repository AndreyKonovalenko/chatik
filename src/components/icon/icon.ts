import Block from '../../core/Block';

type IProps =  {
    onClick: () => void
}

export class Icon extends Block {
    constructor(props: IProps) {
        super(props);
        this.props.events = {
            click: () => {console.log(this.props.dist)}
        }

    }


    protected render(): string {
        return (`
            <div>
                <style>.{{key}}-icon-settings { 
                    font-size:{{size}}px; color:{{color}};
                    font-variation-settings: 'FILL'{{fill}}, 'wght' 400, 'GRAD' 0, 'opsz' 40; 
                }</style>
                <span class='material-symbols-outlined {{key}}-icon-settings'>
                    {{type}}
                </span>
            </div> 
        `)
    }
}

export default Icon;
