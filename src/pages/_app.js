import styled from "styled-components";
import { Footer } from "../components/molecules/Footer/Footer";
import { Header } from "../components/molecules/Header";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Header />
        <MainContentContainer>
          <Component {...pageProps} />
        </MainContentContainer>
        <Footer />
      </Theme>
    </>
  );
}

const MainContentContainer = styled.div`
  width: calc(100vw - 96px);
  max-width: 1040px;
  margin: auto;
  text-align: center;
`;
