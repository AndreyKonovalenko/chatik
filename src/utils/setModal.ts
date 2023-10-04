import { ModalOverLay } from '../components/modal/modal-overlay/modal-overlay';
import Block from '../core/Block';


export const setModal = (customModal: unknown): void => {
  const modals = document.getElementById('modals');
  const Component = customModal as unknown as typeof Block;
  const component = new Component();
  const OverLay = ModalOverLay as typeof Block;
  const overlay = new OverLay() ;
  modals?.append(component.getContent()!);
  modals?.append(overlay.getContent()!);
};
