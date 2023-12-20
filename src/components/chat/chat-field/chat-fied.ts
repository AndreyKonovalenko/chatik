import Block from '../../../core/Block';
import { messagesMock } from '../../../mocks/messages-mock';

import { TMessage } from '../../../pages/chat/chat';
import { TChatProps } from '../../../pages/chat/chat';
import {
  getChatCurrentUserId,
  getMessages,
} from '../../../services/stateSelectors';

import store from '../../../services/store';
import { StoreEvents } from '../../../core/MyRedux';

type TChatFieldProps = TChatProps & {
  messages: Array<TMessage> | null;
  currentUserId: string;
};

export class ChatField extends Block<TChatFieldProps> {
  constructor(props: TChatFieldProps) {
    super({
      ...props,
      messages: getMessages(),
      currentUserId: getChatCurrentUserId(),
    });
    store.on(StoreEvents.Updated, () => {
      this.props.messages = getMessages();
    });

    if (this.props.messages === null) {
      const state = { ...store.getState() };
      store.set({
        ...state,
        chat: { ...state.chat, messages: getMessagesController() },
      });
    }

    if (this.props.messages !== null) {
      const newSate = getMessagesController();
      if (this.props.messages !== newSate) {
        const state = { ...store.getState() };
        store.set({
          ...state,
          chat: { ...state.chat, messages: getMessagesController() },
        });
      }
    }

    // getChat controller
    function getMessagesController() {
      return messagesMock;
    }
  }

  protected render(): string {
    const messages = `  
    {{#each  messages}}
    {{{ Message content=this.content time=this.time currentUserId=@root.currentUserId user_id=this.user_id }}}
  {{/each}}`;

    return `
       <div class='chat-field-container'>
        ${this.props.messages !== null ? messages : 'select chat'}    
      </div>
      `;
  }
}

// <div class='chat-field-container'>
// {{!-- {{> components/chat/attach-popup/attach-popup}} --}}
// </div>
