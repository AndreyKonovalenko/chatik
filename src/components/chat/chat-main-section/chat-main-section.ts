import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants.ts';
import store, {StoreEvents} from '../../../services/Store.ts';
import { TChat } from '../../../pages/chat/chat.ts';
import { getChatState } from '../../../services/stateSelectors.ts';

const { placeholders } = uiConstants;
type TChatMainSectionProps = {
  onSearch: (event: Event) => void;
  chats: Array<TChat> | null
};

export class ChatMainSection extends Block<TChatMainSectionProps> {
  constructor(props: TChatMainSectionProps) {
    super({...props, chats: null});
    store.on(StoreEvents.Updated, () => {
      const { chats } = getChatState();
      this.props.chats = chats;
    });
  }

  protected render(): string {
    return ` 
      <div class="chat-main-section">
        {{{ SearchBar placeholder='${placeholders.SEARCH}' ref="search" }}}
        {{{ ChatList controls=true edit=false onChatSelect=onChatSelect chatState=chats }}}
      </div>
    `;
  }
}
