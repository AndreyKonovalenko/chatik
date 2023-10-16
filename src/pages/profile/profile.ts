import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants.ts';
const { placeholders, buttons, palette } = uiConstants;
import { setModal } from '../../utils/setModal.ts';
import { usersMock } from '../../mocks/users-mock.js';
import { ProfileModal } from '../../components/profile-modal/profile-modal.ts';
import store from '../../services/Store.ts'; 
import { getProfileState } from '../../services/ProfileStateSelector.ts';

type TProfileInput ={ 
  name: string,
  field_name: string;
  placehodler: string;
  value: string;
  type: string;
  disabled: boolean;
}

type TProfilePage = {
  editMode: boolean;
  onChangePssword: (e: Event) => void;
  input: TProfileInput[];
}

class ProfilePage extends Block<TProfilePage> {
  constructor() {
    super({
      onChangePassword: (event: Event) => {
        event.preventDefault();
        setModal(ProfileModal);
      },
      onEditProfile: (event: Event ) =>{
        event.preventDefault();
        console.log(store.getState())
        console.log("edit profile")
      },
      editMode: getProfileState(),
      inputs: [
        {
          name: 'first_name',
          field_name: placeholders.FIRST_NAME,
          placeholder: '',
          value: usersMock[0].first_name,
          type: 'text',
          disabled: true,
        },
        {
          name: 'second_name',
          field_name: placeholders.LAST_NAME,
          placeholder: '',
          value: usersMock[0].second_name,
          type: 'text',
          disabled: true,
        },
        {
          name: 'display_name',
          field_name: placeholders.DISPLAY_NAME,
          placeholder: '',
          value: usersMock[0].display_name,
          type: 'text',
          disabled: true,
        },
        {
          name: 'login',
          field_name: placeholders.LOGIN,
          placeholder: '',
          value: usersMock[0].login,
          type: 'login',
          disabled: true,
        },
        {
          name: 'phone',
          field_name: placeholders.PHONE_NUMBER,
          placeholder: '',
          value: usersMock[0].phone,
          type: 'text',
          disabled: true,
        },
        {
          name: 'email',
          field_name: placeholders.EMAIL,
          placeholder: '',
          value: usersMock[0].email,
          type: 'email',
          disabled: true,
        },
      ],
    });
  }

  protected render(): string {
    console.log(this.props.editMode)
    return `( 
        {{#> Layout}}
            <div class="login-form-container">
                {{#> Form}}
                  <div class="profile-icon-container">
                    <div class="profile-icon-container-item">
                      {{{ Icon key="profile-form-icon" type="edit" size="36" color="${palette.ON_PRIMARY}" fill=0 onClick=onEditProfile }}}
                    </div>
                  </div>
                  <div class="profile-image-container">
                     <img class="profile-image" src="${usersMock[0].avatar}" alt="avater" width="200" height="200"/>
                     <p class="profile-image-card-text">${usersMock[0].display_name}</p>
                  </div>
                    {{#each inputs}}
                       {{{ ProfileInputField type=this.type name=this.name placeholder='' value=this.value field_name=this.field_name  disabled=this.disabled }}}
                    {{/ each}}
                    <div class="profile-button-container">
                      {{{ Button type="submit" text='${buttons.CHANGE_PASSWORD}' onClick=onChangePassword }}}
                    </div>
                {{/ Form}}
            <div>
        {{/ Layout}}
        )`;
  }
}

export default ProfilePage;
