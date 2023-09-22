import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants';
import { dateFormatter } from '../../../utils/date-formater';
const { palette } = uiConstants;

type BProps = {
  onClick: () => void;
};

export class ChatCard extends Block {
  constructor(props: BProps) {
    super(props);
    this.props.events = {
      click: () => {
        this.props.onChatSelect(this.props.id);
      }
    };
  }

  protected render(): string {
    const {time, title, content, avatar, chatState, id} = this.props
    const selectedClass = chatState.selectedChatId === id ? "chat-card-container chat-card-selected" : "chat-card-container";

    return `
        <li class="${selectedClass}" >
        <div class='chat-card-main-container'>
        <img src=${avatar} alt='avatar' />
            <div class='chat-card-text-container'>
                <p>${title}</p>
                <p class='chat-card-styled-text'>        
                {{#if archived}}
                    ${dateFormatter(time)}
                {{else}}
                    ${content}
                {{/if}} 
                </p>
            </div>
        </div>
        {{#if archived}}      
            <div>
            {{{ Icon key="chat-card-archived-icon-0" type="unarchive" size="36" color='${palette.LIGHT}' fill=0 }}}
            {{{ Icon key="chat-card-archived-icon-1" type="delete" size="36" color='${palette.LIGHT}' fill=0 }}}
            </div>
        {{else}}
            <div class='chat-card-info-container'>
            ${dateFormatter(time)}     
            <div class="chat-card-info-container-unread-counter">{{unread}}</div>
            </div>
        {{/if}}
        </li>
        `;
    }
}


