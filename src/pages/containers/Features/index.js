import React from "react";
import { featureData } from "../../../components/FeatureData";
import { Feature } from "../../../components";
import "./style.css";

function Features() {
  return (
    <div className="gpt3_features section_padding" id="Features">
      <div className="gpt3_features-heading">
        <h1 className="gradient_text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p> Request Early Access to Get Started </p>
      </div>
      <div className="gpt3_features-container">
        {featureData.map((feature) => (
          <Feature key={feature.id} title={feature.title} text={feature.text} />
        ))}
      </div>
    </div>
  );
}

export default Features;
