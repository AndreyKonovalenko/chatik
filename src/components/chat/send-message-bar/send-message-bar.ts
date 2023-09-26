import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants';
import { validate } from '../../../utils/validate';
const { palette, placeholders } = uiConstants;

type TSendMessageBar = {
  onSend: () => void;
  onAttach: () => void;
};

export class SendMessageBar extends Block {
  constructor(props: TSendMessageBar) {
    super({
      ...props,
      validate: validate,
      onSend: (event: Event) => {
        event.preventDefault();
        this.sendForm();
      },
      onAttach: (event: Event) => {
        event.preventDefault();
      },
    });
  }
  public sendForm() {
    const message = this.refs.message.isValidValue();
    console.log({ message });
  }
  protected render(): string {
    return `
       <div class="send-message-bar-container">
          {{{ Icon key="attach_file" type="attach_file" size="36" color='${palette.LIGHT}' fill=1 }}}     
          {{{ InputField name="message" classNmame='send-message-bar-input' placeholder="${placeholders.MESSAGE}" type="text" icon=false ref="message" value='' validate=validate.message }}}
          {{{ Icon key="send" type="send" size="36" color='${palette.LIGHT}' fill=1 onClick=onSend }}}
        </div>
    `;
  }
}
