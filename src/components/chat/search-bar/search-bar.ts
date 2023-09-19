import Block from '../../../core/Block';
import uiConstants from '../../../utils/ui-constants';

const { palette } = uiConstants; 

type BProps = {
  onClick: () => void;
};

export class SearchBar extends Block {
  constructor(props: BProps) {
    super(props);
    this.props.events = {
      click:
        this.props.onClick ||
        (() => {
          console.log('hello');
        }),
    };
  }

  protected render(): string {
    return `
        <div class="search-bar-container">
            {{{ Icon key="search" type="search" size="36" color='${palette.LIGHT}' fill=1 }}}
            <input
                class='search-bar-input'
                type='text'
                value='{{value}}'
                placeholder='{{placeholder}}'
            />
        </div>
    `;
  }
}
