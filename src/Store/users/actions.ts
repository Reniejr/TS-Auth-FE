import { IUser, IUserList } from './types'
import { SELECT_USER, SET_USERLIST } from './constants'

//SET USER
interface ISelectUser {
    type: typeof SELECT_USER,
    user: IUser
}

const selectUser = (user: IUser) => ({
    type: SELECT_USER,
    user
})

//SET USERLIST
interface ISetUserList {
    type: typeof SET_USERLIST,
    userList: IUserList
}

const setUserList = (userList: IUserList) => ({
    type: SET_USERLIST,
    userList
})

//EXPORT ALL INTERFACES
export type UsersActions = ISelectUser | ISetUserList

//EXPORT FUNCTIONS
export {selectUser, setUserList}