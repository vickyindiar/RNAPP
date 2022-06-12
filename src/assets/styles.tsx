import { StyleSheet } from 'react-native'
import {  IThemeColorType, IThemesType } from '../types/types'

export const themeColors: IThemesType = {
    light: {
      name: 'light',
      color: 'rgb(58, 58, 60)',
      primaryColor: '#5ABD8C',
      secondaryColor:'',
      bg: '#f0f0f0',
      bgContent: '#ffffff',
      accent: '#0071ff',
      error: '#B00020',
    },
    dark: {
      name: 'dark',
      color: '#ffffff',
      primaryColor: '#5ABD8C',
      secondaryColor:'',
      bg: '#121212',
      bgContent: '#1e1e1e',
      accent: '#0071ff',
      error: '#B00020',
    },
  };