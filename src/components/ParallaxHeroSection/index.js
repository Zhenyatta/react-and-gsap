import React, { useRef, useEffect } from "react";

import styled from "styled-components";
import ForegroundHero from "./Foreground";
import MidgroundHero from "./MidgroundHero";
import BackgroundHero from "./BackgroundHero";

const StyledSvgWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 30vw;
`;

function ParallaxHeroSection() {
  const foregroundHeroRef = useRef();

  const backgroundHeroRef = useRef();

  const midgroundHeroRef = useRef();

  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {
      foregroundHeroRef.current.moveTo(clientX / 4, clientY / 8);
      backgroundHeroRef.current.moveTo(clientX / 8, clientY / 16);
      midgroundHeroRef.current.moveTo(clientX / 12, clientY / 24);
    };

    const onLeave = () => {
      foregroundHeroRef.current.moveTo(0, 0);
      backgroundHeroRef.current.moveTo(0, 0);
      midgroundHeroRef.current.moveTo(0, 0);
    };

    document.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseLeave", onLeave);
    };
  }, []);

  return (
    <StyledSvgWrapper>
      <BackgroundHero ref={backgroundHeroRef} />
      <MidgroundHero ref={midgroundHeroRef} />
      <ForegroundHero ref={foregroundHeroRef} />
    </StyledSvgWrapper>
  );
}

export default ParallaxHeroSection;
