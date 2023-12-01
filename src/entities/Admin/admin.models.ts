import { Session } from "./admin.slice";
const userTokenKey = "token";

export interface IAdmin {
    adminType: string;
    email: string;
    name?: string;
    _id?: string | undefined;
}

export enum AdminTypes {
    Super = 'super',
    Accountant = 'accountant',
    Ordinary = 'ordinary'
}

export interface CreateAdminRequest {
    name: string;
    email: string;
    adminType: AdminTypes;
}

export interface CreateAdminResponse {
  adminId: string;
  isSuccess: boolean;
  token: string;
}

export const getToken = (): Session => {
    const tokenString = sessionStorage.getItem(userTokenKey) ?? "";
    const session: Session = {
        id: '',
        token: tokenString
    }
    if (!tokenString) return session;

    return {
        ...session
    };
};

export const saveToken = (token: string) => {
    sessionStorage.setItem(userTokenKey, token);
};
export const removeItem = async () => {
    sessionStorage.removeItem(userTokenKey);
};
