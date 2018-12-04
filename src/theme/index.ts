import * as styledComponents from 'styled-components';
import { themes, ITheme } from './themes';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export {
  styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider,
  themes
};
