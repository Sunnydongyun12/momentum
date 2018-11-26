import React from 'react';
// import CTABtn from "components/CTABtn";
import '../styles/ProviderInfo.css';
import PImage from 'components/PImage';

export const ProviderInfo = () => {
  return (
    <div className="ProviderInfo__content">
      <h1>Provider info</h1>
      <PImage />
      {/* <PCardList /> */}
      {/* <CTABtn className="CTABtn--dark">test</CTABtn> */}
    </div>
  );
};

export default ProviderInfo;
