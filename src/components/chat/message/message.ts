import Block from '../../../core/Block';
import { dateFormatter } from '../../../utils/date-formater.ts';
import { TMessage } from '../../../pages/chat/chat.ts';
import { TUser } from '../../../pages/chat/chat.ts';

import { usersMock } from '../../../mocks/users-mock.ts';

export class Message extends Block {
  constructor(props: TMessage) {
    super({
      ...props,
    });
  }

  protected render(): string {
    const { time, currentUserId, user_id} = this.props;
    const avatar = usersMock.find((element:TUser) => element.id == user_id)?.avatar;

    const currentUserMessage =` 
    <div class="current-user-message-container">
      <div class="message-avatar-container">
        <img src=${avatar} alt='avatar' />
      </div>
      <div class="current-user-message-content-container">
        <div class="message-text-container">
          {{content}}
        </div>
        <div class="message-date-container">
          ${dateFormatter(time)}
        </div>
      </div>
    </div>`;

    const userMessage = `
    <div class="message-container">
      <div class="message-content-container">
        <div class="message-text-container">
          {{content}}
        </div>
        <div class="message-date-container">
          ${dateFormatter(time)}
        </div>
      </div>
      <div class="message-avatar-container">
        <img src=${avatar} alt='avatar' />
      </div>
    </div>`;   

    return `${(currentUserId === user_id) ? currentUserMessage: userMessage}` ;    
        
  }
}
