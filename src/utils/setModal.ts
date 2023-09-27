import { ModalOverLay } from '../components/modal/modal-overlay/modal-overlay';

export const setModal = (customModal): void => {
  const modals = document.getElementById('modals');
  const Component = customModal;
  const component = new Component();
  const OverLay = ModalOverLay;
  const overlay = new OverLay();
  modals?.append(component.getContent()!);
  modals?.append(overlay.getContent()!);
};
