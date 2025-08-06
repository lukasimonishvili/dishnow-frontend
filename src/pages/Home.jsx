import Styled from "styled-components";
import HomeTopSection from "../components/HomeDescriptionPanel.jsx"
import HomeSingularitiesPanel from "../components/HomeSingularitiesPanel.jsx";
import HomeWhyUs from "../components/HomeWhyUs.jsx";

const HomeMain = Styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
`;

const Home = () => {
  return <>
    <HomeMain>
      <HomeTopSection/>
      <HomeSingularitiesPanel/>
      <HomeWhyUs/>
    </HomeMain>
  </>
};

export default Home;
