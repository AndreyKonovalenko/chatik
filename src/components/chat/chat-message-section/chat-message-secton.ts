import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants.ts';
const { palette } = uiConstants;
import { TChat } from '../../../pages/chat/chat.ts';
import store, {StoreEvents} from '../../../services/Store.ts';
import { getChatState, getChatEditModeState } from '../../../services/stateSelectors.ts';

type TChatMessageSection = {
  onEditChat: void
  editMode: boolean;
  selectedChat: TChat | null;
};

export class ChatMessageSection extends Block<TChatMessageSection> {
  constructor(props: TChatMessageSection) {
    super({
      ...props,
      onEditChat: () => {
        const state = { ...store.getState() };
        store.set({
          ...state,
          chat: { ...state.chat, editMode: !state.chat.editMode },
        });
      },
      selectedChat: null,
      editMode: getChatEditModeState()
    });
    store.on(StoreEvents.Updated, () => {
      const {  chats, selectedChatId } = getChatState();
      this.props.editMode = getChatEditModeState();
      if( chats !== null && chats !== undefined) {
        this.props.selectedChat = chats?.find((element)=> element.id === selectedChatId)
      }
    
    });
  }
  protected render(): string {
    console.log(this.props);
    const chatHeaderSection = `
      <img src="${chatState.chat && chatState.chat.avatar}" alt="chat bage"/>
      <p>${chatState.chat && chatState.chat.title}</p>
    `;

    return ` 
        <div class="chat-message-section">
            <div class="chat-message-section-header">
                <div class="chat-message-section-bage-container">  
                    ${chatState.chat !== null ? chatHeaderSection : ''}
                </div> 
                <div class="chat-message-section-controls">
                    {{{ Icon key="chat-message-sectio-icon-0" type="add_circle" size="42" color='${
                      palette.ON_PRIMARY
                    }' fill=0}}}
                    {{{ Icon key="chat-message-sectio-icon-1" type="settings" size="42" color='${
                      editMode ? palette.DARK : palette.ON_PRIMARY
                    }' onClick=onEditChat oncfill=0}}}
                </div> 
            </div>
            {{{ ChatField chatState=chatState }}}
            {{{ SendMessageBar }}}
        </div>
        `;
  }
}
