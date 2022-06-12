// THEME INTERFACE

export interface IThemeColorType  {
    name: string,
    color: string,
    primaryColor: string,
    secondaryColor: string,
    bg: string
    bgContent: string,
    accent: string,
    error: string
}

export interface IThemesType {
    light: IThemeColorType,
    dark: IThemeColorType

}