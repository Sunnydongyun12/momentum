import React from "react";
import CTABtn from "components/CTABtn";
import "../styles/Home.css";
import PCardList from "components/PCardList";

export const Home = () => {
  return (
    <div className="Home__content">
      <h1>Home page</h1>
      {/* <PCardList /> */}
      <CTABtn className="CTABtn--dark">setting</CTABtn>
    </div>
  );
};

export default Home;
