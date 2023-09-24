import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants';
import { validate } from '../../../utils/validate';
const { palette, placeholders } = uiConstants;

type TSearchBar = {
  onBlur: () => void;
};

export class SearchBar extends Block<TSearchBar | any> {
  constructor(props: TSearchBar) {
    super({
      ...props,
      validate: validate,
      onSearch: (event: Event) => {
        event.preventDefault();
        this.sendForm();
      },
      onCreateAccount: (event: Event) => {
        event.preventDefault();
      },
    });
  }
  public sendForm() {
    const search = this.refs.search.isValidValue();
    console.log({ search });
  }
  protected render(): string {
    return `
        <div class="search-bar-container">
            {{{ Icon key="search" type="search" size="36" color='${palette.LIGHT}' fill=1 onClick=onSearch}}}
            {{{ InputField classname='search-bar-input' name="search" placeholder="${placeholders.SEARCH}" type="text" icon=false ref="search" value='' validate=validate.search }}}
        </div>
    `;
  }
}
