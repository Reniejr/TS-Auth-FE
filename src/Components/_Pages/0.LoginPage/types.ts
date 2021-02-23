export type EventForm = React.ChangeEvent<HTMLInputElement> & React.KeyboardEvent<HTMLInputElement>

//LOGIN
export interface ILoginForm {
    username: string;
    password: string;
    login: (e: EventForm) => void;
    show: boolean;
    showFunc: () => void;
}
export interface ILoginState {
    username: string;
    password: string;
}
export const loginState: ILoginState = {
    username: '',
    password: '',
}


//SIGN IN
export interface ISignInForm {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    role: string
    signIn: (e: EventForm) => void;
    show: boolean;
    showFunc: () => void;
}
export interface ISignInState{
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    role: string
}
export const signInState: ISignInState = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    role: 'Student'
}
