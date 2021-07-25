import styled from "styled-components";
import { Footer } from "../components/molecules/Footer/Footer";
import { Header } from "../components/molecules/Header";
import Theme from "../styles/theme";
import { Provider, createClient } from "urql";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Theme>
        <Header />
        <MainContentContainer>
          <Component {...pageProps} />
        </MainContentContainer>
        <Footer />
      </Theme>
    </Provider>
  );
}

const MainContentContainer = styled.div`
  width: calc(100vw - 96px);
  max-width: 1040px;
  margin: auto;
  text-align: center;
`;
