import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants';
import { dateFormatter } from '../../../utils/date-formatter';
import { TChatProps } from '../../../pages/chat/chat';
import store from '../../../services/store';
import { StoreEvents } from '../../../core/MyRedux';
import {
  getChatState,
  getSelectedChatId,
} from '../../../services/stateSelectors';
const { palette } = uiConstants;

type TChatCard = TChatProps & {
  events: object;
  onChatSelect: (id: string) => void;
  time: string;
  title: string;
  content: string;
  avatar: string;
  id: string;
};

export class ChatCard extends Block<TChatCard> {
  constructor(props: TChatCard) {
    super({
      ...props,
      events: {
        click: () => {
          this.setSelectedChatId(this.props.id);
        },
      },
      selectedChatId: getSelectedChatId(),
    });
    store.on(StoreEvents.Updated, () => {
      const { selectedChatId } = getChatState();
      this.props.selectedChatId = selectedChatId;
    });
  }

  public setSelectedChatId(id: string | number | null) {
    const state = { ...store.getState() };
    store.set({
      ...state,
      chat: { ...state.chat, selectedChatId: id },
    });
  }

  protected render(): string {
    const { time, title, content, avatar, id } = this.props;
    const selectedClass =
      this.props.selectedChatId === id
        ? 'chat-card-container chat-card-selected'
        : 'chat-card-container';

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
            {{{ Icon key="chat-card-archived-icon-0" type="unarchive" size="36" color='${
              palette.LIGHT
            }' fill=0 }}}
            {{{ Icon key="chat-card-archived-icon-1" type="delete" size="36" color='${
              palette.LIGHT
            }' fill=0 }}}
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
