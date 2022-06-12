import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IUserState{
    name: string,
    email: string,
    pass: string,
    isLogged: boolean,
    errorMessage?:string


}

const initialState: IUserState = {
    name : '',
    email: '',
    pass: '',
    isLogged: false,
    errorMessage: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        changeName: (state, action: PayloadAction<string>) =>{
            state.name = action.payload
        },
        signUp: (state, action: PayloadAction<IUserState>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.pass = action.payload.pass;
            state.isLogged = false;
            
        },
        logIn: (state, action: PayloadAction<IUserState>) =>{
            const name = 'admin'
            const pass = 'passadmin'
            const email = 'admin@mail.com'
            if((action.payload.name === name ||action.payload.email ===  email) && (action.payload.pass === pass)){
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.pass = action.payload.pass;
                state.isLogged = true
            }
            else{
                state.isLogged = false;
                state.errorMessage = action.payload.pass === pass ? "Wrong Password" : "Username Not Found"
            }
        },
        logOut: (state) => {
            state.name, state.email, state.pass = ""
            state.isLogged = false
            state.errorMessage = ''
        }
    }
})

//actions
export const {changeName, signUp, logIn, logOut} = userSlice.actions

//selector
export const userName = (state: RootState) => state.user.name

//reducer
export default userSlice.reducer