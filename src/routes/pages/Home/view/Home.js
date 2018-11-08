import React from "react";
import CTABtn from "components/CTABtn";
import "../styles/Home.css";
import PCard from "components/PCard";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

export const Home = () => {
  return (
    <div className="Home__content">
      <h1>TEST</h1>
      <div className={styles.root}>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <PCard
              className="PCard"
              title="Perfect storage for summer"
              image="http://picsum.photos/200"
              content="10 * 10 ft storage place during summer 2018"
            />
          </Grid>
          <Grid item xs={4}>
            <PCard
              className="PCard"
              title="Westwood..."
              image="http://picsum.photos/201"
              content="5 * 5 ft storage place during summer 2018"
            />
          </Grid>
          <Grid item xs={4}>
            <PCard
              className="PCard"
              title="hmm"
              image="http://picsum.photos/222"
              content="10 * 10 ft storage place during summer 2018"
            />
          </Grid>
        </Grid>
      </div>
      {/* <CTABtn className="CTABtn--dark">test</CTABtn> */}
    </div>
  );
};

export default Home;
