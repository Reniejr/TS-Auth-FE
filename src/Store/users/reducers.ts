import { IUserState } from './types'
import { SELECT_USER, SET_USERLIST } from './constants'
import { UsersActions } from './actions'

const initialState: IUserState = {
    user: {
        _id: '',
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        googleId: '',
        facebookId: '',
        githubId: ''
    },
    userList: []
}

export const userReducer = (state = initialState, action: UsersActions): IUserState => {
    switch (action.type) {
        case SELECT_USER: return { ...state, user : action.user }
        case SET_USERLIST: return { ...state, userList: action.userList }
        default: return state
    }
}