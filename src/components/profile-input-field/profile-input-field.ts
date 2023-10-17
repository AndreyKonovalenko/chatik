import Block from '../../core/Block';
import { ErrorLine } from '../error-line/error-line';

type TProfileInputField = {
  validate: (value: string) => string;
  isValidValue: () => void;
  onBlur: () => void;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  ref: string;

}

export class ProfileInputField extends Block<TProfileInputField> {
  constructor(props: TProfileInputField) {
    super({
      ...props,
      onBlur: () => {
        this.validate();
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
    return (this.refs?.[this.props.ref] as ProfileInputField).value();
  }
  
  private validate() {
    const value = this.getValue();
    console.log(this.props)
    const error = this.props.validate(value);
    if (error) {
      (this.refs?.errorLine as unknown as ErrorLine).setProps({ error });
      return false;
    }
    (this.refs?.errorLine as unknown as ErrorLine).setProps({ error: undefined });
    return true;
  }

  protected render(): string {
    return `
        <div class='profile-input-container'>
        <p class='profile-field-name'>{{field_name}}</p>  
        {{{
          Input   
          className='profile-input'
          type=type
          ref=ref
          name=name
          placeholder=placeholder
          onBlur=onBlur
          value=value
          disabled=disabled
        }}}
        {{{ ErrorLine error=error ref="errorLine" }}}
      </div> `;
  }
}

export default ProfileInputField;
