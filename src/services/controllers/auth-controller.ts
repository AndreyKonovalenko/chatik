import AuthAPI from '../../api/auth-api.ts';
import { TCreateUser } from '../../api/auth-api.ts';

const authAPI = new AuthAPI()


// export const getUser = async() => {
//     const responseUser = await authAPI.me();
//     if (apiHasError(responseUser)) {
//         throw Error(responseUser.reason)
//     }

//     return transformUser(responseUser as UserDTO);
// }

// export const signin = async (data: LoginRequestData) => {
//     const response = await authAPI.login(data);
//     if (apiHasError(response)) {
//         throw Error(response.reason)
//     }

//     const me = await getUser();

// }


export const signup = async (data: TCreateUser) => {
    console.log(data)
    const response = await authAPI.create(data);
    // if (apiHasError(response)) {
    //     throw Error(response.reason)
    // }
    console.log(response)

    // const me = await getUser();

}