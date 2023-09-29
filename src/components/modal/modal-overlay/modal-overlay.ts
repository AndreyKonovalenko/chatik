import Block from '../../../core/Block';

type TModalOverLay = {
  events: object;

}

export class ModalOverLay extends Block<TModalOverLay> {
  constructor(props: TModalOverLay) {
    super(props);
    this.props.events = {
      click: () => {
        const overlay = document.getElementsByClassName('modal-overlay')[0];
        const modal = document.getElementsByClassName('modal-container')[0];
        if (overlay && modal) {
          overlay.remove();
          modal.remove();
        }
      },
    };
  }

  protected render(): string {
    return `<div class="modal-overlay"></div>`;
  }
}
