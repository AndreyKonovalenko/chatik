import Block from '../../../core/Block';
// @ts-ignore
import _mock_users from '../../../__mocks__/_mock_users';

export class ChatField extends Block {
  constructor(props: any) {
    super({
      ...props,
      messages: props.chatState.messages,
      currentUserId: props.chatState.currentUserId,
      events: {},
    });
  }

  protected render(): string {
    return `
       <div class='chat-field-container'>
          {{#each  messages}}
            {{{ Message content=this.content time=this.time currentUserId=@root.currentUserId }}}
          {{/each}}
      </div>
  
    `;
  }
}

// <div class='chat-field-container'>
// {{!-- {{> components/chat/attach-popup/attach-popup}} --}}
// </div>
