import Header from "./components/Header";
import AppRouter from "./routes/AppRouter";
import Styled from "styled-components";

const StyledSpacer = Styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  margin-top: 70px;
`;

const App = () => {
  return (
    <>
      <Header />
      <StyledSpacer>
        <AppRouter />
      </StyledSpacer>
    </>
  );
};

export default App;
