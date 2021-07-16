import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import theme from "../themes/default";
import GlobalStyle from "./globalStyle";

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
