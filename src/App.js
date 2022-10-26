import logo from "./assets/logo.svg";
import styled from "styled-components";
import ParallaxHeroSection from "./components/ParallaxHeroSection";
import ContentSection from "./components/ContentSection";
import CrossRevelSection from "./components/CrossRevealSection";
import ProductSection from "./components/ProductSection";
import VideoSection from "./components/VideoSequenceSection";
import Cursor from "./components/Cursor";

import FaceOne from "../src/assets/images/faceOne.png";
import LandscapeOne from "../src/assets/images/landscapeOne.png";

import landscapeTwo from "../src/assets/images/landscapeTwo.png";

const StyledHeroSecrion = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    height: 25vmin;
    pointer-events: none;
  }
`;

const StyledTitle = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 4rem;
`;

function App() {
  return (
    <>
      <Cursor />
      <StyledHeroSecrion>
        <img src={logo} alt="logo" />
        <StyledTitle>Back to smooth and firm skin </StyledTitle>
        <ParallaxHeroSection />
      </StyledHeroSecrion>
      <ProductSection />

      <ContentSection
        title={"Take Care two"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        }
      />
      <CrossRevelSection
        face={FaceOne}
        landscape={LandscapeOne}
        name={"Chrisitan Guard"}
        job={"Founder"}
        sentensOne={"We only laugh"}
        sentensTwo={"what we love"}
        crossreveal={"xPercent"}
      />
      <ContentSection
        title={"Take Care two"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        }
      />
      <CrossRevelSection
        face={FaceOne}
        landscape={landscapeTwo}
        name={"Chrisitan Guard"}
        job={"Founder"}
        sentensOne={"We only laugh"}
        sentensTwo={"what we love"}
        crossreveal={"yPercent"}
      />
      <ContentSection
        title={"Take Care two"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        }
      />
      <VideoSection />
    </>
  );
}

export default App;
