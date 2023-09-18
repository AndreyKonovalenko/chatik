import Block from '../../../core/Block';


export class ModalOverLay extends Block {
    constructor() {
      super();
      this.props.events = {
        click: () => {
            console.log('close modal');
          },
      };
    }

    protected render(): string {
        return `
            <div class='modal-overlay'>
            </div> 
            `;
    }
}
