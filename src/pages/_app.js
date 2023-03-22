import globalStyle from '@/styles/globals.scss'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import defaultTheme from '@/styles/theme.config';
const GlobalStyle = createGlobalStyle`
    ${globalStyle}
    :root{
      --background: ${({theme})=> theme.colors.background}
    }
`;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
