import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IThemesType, IThemeColorType } from "../../types/types";
import { themeColors } from '../../assets/styles'
import type { RootState } from "../store";


type TThemeType = 'light'|'dark'
interface ILayoutState{
    name: string,
    theme: TThemeType,
    themeColor: IThemeColorType
}

const initialState: ILayoutState = {
    name : '',
    theme: 'light',
    themeColor:themeColors.light
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers:{
        changeName: (state, action: PayloadAction<string>) => {
             state.name = action.payload
        },
        switchTheme: (state, action: PayloadAction<ILayoutState>) => {
            const { theme: TThemeType} = action.payload;
            state.theme = action.payload.theme;
            state.themeColor = action.payload.theme === 'light'? themeColors.light : themeColors.dark
        },
    }
})

//actions
export const {changeName, switchTheme} = layoutSlice.actions

//selector
export const layoutName = (state: RootState) => state.layout.name
export const themeName = (state: RootState) => state.layout.theme

//export reducer
export default layoutSlice.reducer