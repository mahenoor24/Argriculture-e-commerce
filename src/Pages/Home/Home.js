import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This imports default styles
import "./Home.css";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";
import soil from "../../assets/home/soil.jpg";
import sowing from "../../assets/home/sowing.jpg";
import irrigation from "../../assets/home/Irrigation.jpg";
import crop from "../../assets/home/crop.jpg";
import harvest from "../../assets/home/harvesting.jpeg";
import pharvest from "../../assets/home/postHarvest.webp";
import product1 from "../../assets/product/dischorrow.jpg";
import product2 from "../../assets/product/combinedsubsoilingmachine.webp";
import product3 from "../../assets/product/greenfeedharvester.webp";
import product4 from "../../assets/product/handpushseeder.jpeg";
import product5 from "../../assets/product/reversibeplough.jpeg";
import product6 from "../../assets/product/cornthresher.webp";
import { ReactTyped } from "react-typed";
import PhasesContainer from "../../Components/Phases-Container/PhasesContainer";

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;
const products = [
  { img: product1, text: "Disc Harrow" },
  { img: product2, text: "Combined Subsoiling Machine" },
  { img: product3, text: "Green Feed Harvester" },
  { img: product4, text: "Hand Push Seeder" },
  { img: product5, text: "Reverseble Plough" },
  { img: product6, text: "Corn Thresher" },
];

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="image-container">
          <h1>
            In which phase are you{" "}
            <ReactTyped
              strings={[
                "Soil Preparation?",
                "Sowing?",
                "Irrigation?",
                "Crop Maintenance?",
                "Harvesting?",
                "Post-Harvest?",
              ]}
              typeSpeed={100}
              loop
              backSpeed={20}
              backDelay={1000}
              className="typed-text"
              showCursor={true}
            />
          </h1>
        </div>

       <PhasesContainer/>
      </div>
    );
  }
}

export default Home;
