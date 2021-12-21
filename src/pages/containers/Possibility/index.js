import React from "react";
import PossibilityImage from "../../../assets/possibility.png";
import "./style.css";

function Possibility() {
  return (
    <div className="gpt3_Possibility section_padding" id="possibility">
      <div className="gpt3_possibility-image">
        <img src={PossibilityImage} alt="PossibilityImage" />
      </div>
      <div className="gpt3_possibility-content">
        <h4> Request Early Access to Get Started </h4>
        <h1 className="gradient_text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4> Request Early Access to Get Started </h4>
      </div>
    </div>
  );
}

export default Possibility;
