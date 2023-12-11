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
   const responseData  = JSON.parse(response.response);
   if(responseData === "OK"){
    const user  =  await getUser();
    state.set({...state, user: user})
   } else {
    console.log(responseData)
   }
    
    // window.store.set({user: me});
    // navigate('emails')
}