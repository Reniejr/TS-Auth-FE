export interface IUser {
    _id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    googleId?: string,
    facebookId?: string,
    githubId?: string
}

export type IUserList = IUser[];

export interface IUserState {
    user: IUser,
    userList: IUserList
}