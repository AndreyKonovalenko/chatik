import Block from '../../core/Block';
import { TInput } from '../input/input';

export class ProfileInputField extends Block<TInput> {
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
      </div> `;
  }
}

export default ProfileInputField;
