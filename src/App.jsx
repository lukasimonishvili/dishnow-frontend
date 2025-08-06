import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./routes/AppRouter";
import Styled from "styled-components";

const StyledSpacer = Styled.div`
  width: 100%;
  min-height: calc(100vh - 366px);
  margin-top: 70px;

  @media screen and (max-width: 760px) {
    min-height: calc(100vh - 486px);
  }
`;

const App = () => {
  return (
    <>
      <Header />
      <StyledSpacer>
        <AppRouter />
      </StyledSpacer>
      <Footer />
    </>
  );
};

export default App;
