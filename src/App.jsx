import Notification from "./components/Notification";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./routes/AppRouter";
import Styled from "styled-components";
import { useEffect } from "react";
import { useUser } from "./contexts/userContext";

const StyledSpacer = Styled.div`
  width: 100%;
  min-height: calc(100vh - 366px);
  margin-top: 70px;

  @media screen and (max-width: 760px) {
    min-height: calc(100vh - 486px);
  }
`;

const App = () => {
  const { logIn } = useUser();

  useEffect(() => {
    logIn();
  }, []);
  return (
    <>
      <Notification />
      <Header />
      <StyledSpacer>
        <AppRouter />
      </StyledSpacer>
      <Footer />
    </>
  );
};

export default App;
