import AuthAPI from '../../api/auth-api.ts';
import { TSignInUserData, TSignUpUserData } from '../../api/auth-api.ts';

const authAPI = new AuthAPI()


export const getUser = async() => {
    const response = await authAPI.getUser();
    // if (apiHasError(responseUser)) {
    //     throw Error(responseUser.reason)
    // }

    console.log(response)
}


export const signup = async (data: TSignUpUserData) => {
    console.log(data)
    const response = await authAPI.singup(data);
    // if (apiHasError(response)) {
    //     throw Error(response.reason)
    // }
    console.log(response)

    // const me = await getUser();

}

export const signin = async (data: TSignInUserData) => {
    console.log(data)
    const response = await authAPI.signin(data);
    // if (apiHasError(response)) {
    //     throw Error(response.reason)
    // }

    console.log(response)

    // window.store.set({user: me});
    // navigate('emails')
}