import Block from '../../../core/Block';

import { TMessage } from '../../../pages/chat/chat';
import { TProps } from '../../../core/Block';

type TChatFieldProps = TProps & {
  messages: Array<TMessage>;
  currentUserId: string
}

export class ChatField extends Block {
  constructor(props: TChatFieldProps) {
    super({
      ...props,
      messages: props.chatState.messages,
      currentUserId: props.chatState.currentUserId,
    });
  }

  protected render(): string {

    return `
       <div class='chat-field-container'>
          {{#each  messages}}
            {{{ Message content=this.content time=this.time currentUserId=@root.currentUserId user_id=this.user_id }}}
          {{/each}}
      </div>
  
    `;
  }
}

// <div class='chat-field-container'>
// {{!-- {{> components/chat/attach-popup/attach-popup}} --}}
// </div>
