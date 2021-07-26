import { AppProps } from "next/app";
import styled from "styled-components";
import Theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <MainContentContainer>
        <Component {...pageProps} />
      </MainContentContainer>
    </Theme>
  );
}

export default MyApp;

const MainContentContainer = styled.div`
  width: calc(100vw - 96px);
  max-width: 1040px;
  margin: auto;
  text-align: center;
`;
