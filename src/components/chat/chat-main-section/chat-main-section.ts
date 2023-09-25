import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants.ts';
const { placeholders } = uiConstants;

type TChatMainSectionProps = {
  onSearch: (event: Event) => void;
};

export class ChatMainSection extends Block {
  constructor(props: TChatMainSectionProps) {
    super({
      ...props,
      onSearch: (event: Event) => {
        event.preventDefault();
        const search = this.refs.search.value();
        console.log(search);
      },
    });
  }

  protected render(): string {
    return ` 
      <div class="chat-main-section">
        {{{ SearchBar placeholder='${placeholders.SEARCH}' ref="search" }}}
        {{{ ChatList controls=true edit=false onChatSelect=onChatSelect chatState=chatState }}}
      </div>
    `;
  }
}
