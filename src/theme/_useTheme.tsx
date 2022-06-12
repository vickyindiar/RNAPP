 import React, {ReactNode, useContext, useState} from 'react'
// import { ReactReduxContext } from 'react-redux'
// import {  IThemesType } from '../types/types'


// interface IThemeProvider{
//     children: ReactNode
// }



// const themes: IThemesType = {
//     light: {
//       name: 'light',
//       color: 'rgb(58, 58, 60)',
//       primaryColor: '',
//       secondaryColor:'',
//       bg: '#f0f0f0',
//       bgContent: '#ffffff',
//       accent: '#0071ff',
//       error: '#B00020',
//     },
//     dark: {
//       name: 'dark',
//       color: '#ffffff',
//       primaryColor: '',
//       secondaryColor:'',
//       bg: '#121212',
//       bgContent: '#1e1e1e',
//       accent: '#0071ff',
//       error: '#B00020',
//     },
//   };

// const ThemeContext = React.createContext({} as IThemeContext)
// export const ThemeProvider = ({children}: IThemeProvider):JSX.Element => {
//       const [theme, setTheme] = useState(themes.light)
//       return(
//           <ThemeContext.Provider value={{theme, setTheme}}>
//               {children}
//           </ThemeContext.Provider>
//       )
// }
// export const useTheme = () => {
//   const state = useContext(ThemeContext)
//   const {theme, setTheme} = state
//   const toggleTheme = (v: boolean) => {
//     setTheme(v ? themes.dark : themes.light)
//   }
//   return { theme, toggleTheme};


// }

