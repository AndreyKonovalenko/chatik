import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants';

const { palette } = uiConstants;

type BProps = {
  onBlur: () => void;
};

export class SearchBar extends Block {
  constructor(props: BProps) {
    super({ ...props, onBlur: () => this.getValue() });
  }

  getValue() {
    console.log(this.refs.input.value());
  }

  protected render(): string {
    return `
        <div class="search-bar-container">
            {{{ Icon key="search" type="search" size="36" color='${palette.LIGHT}' fill=1 }}}
            {{{ SearchBarInput ref="input" onBlur=onBlur}}}
        </div>
    `;
  }
}
