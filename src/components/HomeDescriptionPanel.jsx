import woman_home from "../assets/img/home_woman.png";
import Styled from "styled-components";

const HomeDescriptionPanel = () => {

  return <>
    <section>
      <div>
        <h4>TRY TODAY</h4>
        <h1>
          Fun and Easy Recipes
          Made for <strong>You</strong>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

        <div>
          <button type="button">Explore</button>
          <button type="button">Log in</button>
        </div>

      </div>


      <img src={woman_home} alt="cooking woman" />

    </section>

  </>
};

export default HomeDescriptionPanel;