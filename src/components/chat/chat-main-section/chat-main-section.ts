import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants.ts';
const { headers, placeholders, buttons, errors } = uiConstants;

type TChatMainSectionProps = {
  onSearch: (event: Event) => void;
};

export class ChatMainSection extends Block {
  constructor(props: TChatMainSectionProps) {
    super({
      ...props,
      validate: {
        login: (value: string) =>
          value.length < 3 && value.length !== 0
            ? `Length of login should not be less 3 letters.`
            : '',
      },
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
