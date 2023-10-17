import store from "./Store"
import { TAppState } from "./Store";

export const getProfileState = (): boolean => {
    const data: TAppState = { ...store.getState() };
    return data.profile.editMode;
}

