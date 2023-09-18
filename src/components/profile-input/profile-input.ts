import Block from "../../core/Block";

export class ProfileInput extends Block {
    protected render(): string {
        return (`
        <div class='profile-input-container'>
        <p class='profile-field-name'>{{field_name}}</p>
        <input
          class='profile-input'
          type='{{type}}'
          name="{{name}}"
          {{#if disabled}}
            disabled
          {{/if}}
          value='{{value}}'
          placeholder='{{placeholder}}'
        />
      </div> `);
    }
}

export default ProfileInput;
