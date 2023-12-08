import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants';
import { ErrorLine } from '../error-line/error-line';
const { palette } = uiConstants;

type TInputField = {
  validate: (value: string) => string;
  isValidValue: () => void;
  setIsVisible: () => void;
  onBlur: () => void;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  ref: string;

}

export class InputField extends Block<TInputField> {
  constructor(props: TInputField) {
    super({
      ...props,
      isVisible: false,
      onBlur: () => {
        this.validate();
      },
      onClick: () => {
        this.setIsVisible()
      },
    
    });
  }
  public isValidValue() {
    if (!this.validate()) {
      return false;
    }
    return this.getValue();
  }

  public getValue(): string {
    return (this.refs?.[this.props.ref] as InputField).value();
  }

  public setIsVisible() {
    const tempValue = (this.refs?.[this.props.ref] as InputField).value();
    const type = (this.refs?.[this.props.ref] as InputField).props.type;
    (this.refs?.[this.props.ref] as InputField).props.value = tempValue;
    (this.refs?.[this.props.ref] as InputField).props.type = type === 'password'? 'text': "password";
  }

  private validate() {
    const value = this.getValue();
    const error = this.props.validate(value);
    if (error) {
      (this.refs?.errorLine as unknown as ErrorLine).setProps({ error });
      return false;
    }
    (this.refs?.errorLine as unknown as ErrorLine).setProps({ error: undefined });
    return true;
  }

  protected render(): string {
    const { ref, name, placeholder, value, type} = this.props;
    return `
        <div class='input-wrapper'>
          {{{
            Input
            className='input'
            type="${type}"
            value="${value}"
            ref="${ref}"
            name="${name}"
            placeholder="${placeholder}"
            onBlur=onBlur
          }}}
        {{#if icon}}
          {{{ Icon key="input" type="visibility" size="36" color='${palette.LIGHT}' onClick=onClick fill=1  }}}
        {{/if}}
        {{{ ErrorLine error=error ref="errorLine" }}}
      </div> `;
  }
}
