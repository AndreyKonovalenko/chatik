import AuthAPI from '../../api/auth-api.ts';

import { TSignInUserData, TSignUpUserData } from '../../api/auth-api.ts';
import state from '../Store.ts'

const authAPI = new AuthAPI()

interface IResponse extends XMLHttpRequest {
    reason?: string
}

export const getUser = async() => {
    
    const response: IResponse = await authAPI.getUser();
    const data = JSON.parse(response.response);
    console.log('user', data);
    if (data.reason) {
        throw Error(data.reason)
    }
    return data;
}

export const signup = async (data: TSignUpUserData) => {
    console.log(data)
    const response = await authAPI.singup(data);
    // if (apiHasError(response)) {
    //     throw Error(response.reason)
    // }
    console.log(JSON.stringify(response))

    // const me = await getUser();

}

export const signin = async (data: TSignInUserData) => {
   const response =  await authAPI.signin(data);
   console.log('Singin response', response)
   if(response.response === "OK"){
    console.log('run getUser')
    const user  =  await getUser();
    state.set({...state, userSlice:{ ...user, user}})
   } else {
    console.log(response)
   }
    
    // window.store.set({user: me});
    // navigate('emails')
}

export const logout = async () => {
    await authAPI.logout();
}