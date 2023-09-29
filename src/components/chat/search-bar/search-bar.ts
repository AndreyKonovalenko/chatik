import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants';
import { validate } from '../../../utils/validate';
import { TValidate } from '../../../utils/validate';
import { InputField } from '../../input-field/input-field';
const { palette, placeholders } = uiConstants;

type TSearchBar = {
  onBlur: () => void;
  validate: TValidate;
  onSearch: (e: Event)=> void;
}; 

export class SearchBar extends Block<TSearchBar> {
  constructor(props: TSearchBar) {
    super({
      ...props,
      validate: validate,
      onSearch: (event: Event) => {
        event.preventDefault();
        this.sendForm();
      },
    });
  }
  public sendForm() {
    const search = (this.refs.search as unknown as InputField ).isValidValue();
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
