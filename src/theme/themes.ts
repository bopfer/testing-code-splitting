/**
 * Theme Interfaces and settings.
 */
interface ITheme {
  primary: string;
  background: string;
}

const lightTheme: ITheme = {
  primary: '#000',
  background: '#fff'
};

const darkTheme: ITheme = {
  primary: 'fff',
  background: '#000'
};

const themes: Record<string, ITheme> = {
  dark: darkTheme,
  light: lightTheme
};

export { ITheme, themes };
