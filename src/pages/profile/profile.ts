import Block from '../../core/Block';
import uiConstants from '../../utils/ui-constants.ts';
const { headers, placeholders, buttons, errors, palette } = uiConstants;
import _mock_users from '../../__mocks__/_mock_users';

export class ProfilePage extends Block {
  constructor() {
    super({
      validate: {
        login: (value: string) =>
          value.length < 3 && value.length !== 0
            ? `Length of login should not be less 3 letters.`
            : '',
      },
      onChangePassowrd: (event) => {
        event.preventDefault();
        // const login = this.refs.login.value();
        // const password = this.refs.password.value();
        // console.log({
        //   login,
        //   password,
        // });
      },

      // inputs: [
      //   {
      //     name: 'login',
      //     placeholder: placeholders.LOGIN,
      //     icon: false,
      //     type: 'login',
      //   },
      //   {
      //     name: 'password',
      //     placeholder: placeholders.PASSWORD,
      //     icon: true,
      //     type: 'password',
      //   },
      // ],
    });
  }

  protected render(): string {
    return `( 
        {{#> Layout}}
            <div class="login-form-container">
                {{#> Form}}
                  <div class="profile-icon-container">
                    <div class="profile-icon-container-item">
                      {{{ Icon key="profile-form-icon" type="edit" size="36" color="${palette.ON_PRIMARY}" fill=0}}}
                    </div>
                  </div>
                  <div class="profile-image-container">
                     <img class="profile-image" src="${_mock_users[0].avatar}" alt="avater" width="200" height="200"/>
                     <p class="profile-image-card-text">{{_mock_users.[0].display_name}}</p>
                  </div>
                    {{#each  inputs}}
                        // {{{ Input name="this.name" placeholder=this.placeholder type=this.type icon=this.icon }}}
                    {{/ each}}
                    <div class="profile-button-container">
                      {{{ Button type="submit" text='${buttons.CHANGE_PASSWORD}' }}}
                    </div>
                {{/ Form}}
            <div>
        {{/ Layout}}
        )`;
  }
}

export default ProfilePage;

// {{#> components/layout/layout}}
//   <div class="profile-form-container">
//     {{#> components/form/form}}
//         <div class="profile-icon-container">
//               <div class="profile-icon-container-item">
//                 {{> components/icon/icon key="profile-form-icon" type="edit" size="36" color=uiConstants.palette.ON_PRIMARY fill=0}}
//               </div>
//         </div>
//         <div class="profile-image-container">
//           <img class="profile-image" src={{_mock_users.[0].avatar}} alt="avater" width="200" height="200"/>
//           <p class="profile-image-card-text">{{_mock_users.[0].display_name}}</p>
//         </div>
//         {{> components/profile-input/profile-input type="text" name="first_name" field_name=uiConstants.placeholders.FIRST_NAME placeholder=_mock_users.[0].first_name}}
//         {{> components/profile-input/profile-input type="text" name="second_name" field_name=uiConstants.placeholders.LAST_NAME placeholder=_mock_users.[0].second_name}}
//         {{> components/profile-input/profile-input type="text" name="display_name" field_name=uiConstants.placeholders.DISPLAY_NAME placeholder=_mock_users.[0].display_name}}
//         {{> components/profile-input/profile-input type="login" name="login"  disabled='true' field_name=uiConstants.placeholders.LOGIN placeholder=_mock_users.[0].login}}
//         {{> components/profile-input/profile-input type="text" name="phone" field_name=uiConstants.placeholders.PHONE_NUMBER placeholder=_mock_users.[0].phone}}
//         {{> components/profile-input/profile-input type="email" name="email" field_name=uiConstants.placeholders.EMAIL placeholder=_mock_users.[0].email}}
//         <div class="profile-button-container">
//           {{> components/button/button type="submit" text=uiConstants.buttons.CHANGE_PASSWORD}}
//         </div>
//     {{/ components/form/form}}
//   </div>
// {{/ components/layout/layout}}
