import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyledCrossRevelContainer = styled.section`
  position: relative;
  padding-bottom: 56.25%;
  .crossRevealImage {
    width: 100%;
    height: 100%;
  }
  .afterImage {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(100%, 0);
  }
  .afterImage img {
    transform: translate(-100%, 0);
  }
  .crossRevealImage img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .person__content {
    color: #080f0f;
    position: absolute;
    top: 45%;
    left: 15vw;
    .person__name {
      font-weight: 700;
      line-height: 1.3;
      font-size: 17px;
    }
    .person__job {
      line-height: 1.3;
      font-weight: 400;
      letter-spacing: -0.022em;
      font-size: 17px;
    }
  }
  .landscape__wrapper {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    margin: 00;
    .quote__sentence {
      line-height: 1.03;
      font-weight: 700;
      font-size: 80px;
      letter-spacing: -0.015em;
      color: #fff;
    }
    .author__name {
      line-height: 1.14;
      font-weight: 700;
      font-size: 28px;
      letter-spacing: 0;
      color: #fff;
      padding-top: 20px;
    }
  }
`;

function CrossRevealSection({
  face,
  landscape,
  name,
  job,
  sentensOne,
  sentensTwo,
  crossreveal,
}) {
  //animate the container one way
  const containerRef = useRef();
  //add animation image the opposite way the same timw
  const imageRef = useRef();
  //specify the point we want our animation to start
  const triggerRef = useRef();
  //target the person container
  const personRef = useRef();
  //target the quote container
  const quoteRef = useRef();

  useEffect(() => {
    const crossRevealTween = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "center center",
        end: () => "+=" + triggerRef.current.offsetWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      },
    });
    //animate the conatiner one way
    crossRevealTween
      .fromTo(
        containerRef.current,
        { [crossreveal]: 100, x: 0 },
        { [crossreveal]: 0 }
      )
      //and animate the image the opposite way at the same time
      .fromTo(
        imageRef.current,
        { [crossreveal]: -100, x: 0 },
        { [crossreveal]: 0 },
        0
      )

      //fade in the name and the job
      .from(personRef.current, { autoAlpha: 0 }, 0)
      // fade in the quotes
      .from(quoteRef.current, { authAlpha: 0, delay: 0.26 }, 0);
  }, [crossreveal]);

  return (
    <StyledCrossRevelContainer ref={triggerRef}>
      <div className="crossRevealImage">
        <img src={face} alt="" />
        <div className="person__content" ref={personRef}>
          <h3 className="person__name">{name}</h3>
          <p className="person__job">{job}</p>
        </div>
      </div>
      <div className="crossRevealImage afterImage" ref={containerRef}>
        <img src={landscape} alt="" ref={imageRef} />
      </div>
      <div className="landscape__wrapper">
        <p className="quote__sentence">
          {sentensOne}
          <br /> {sentensTwo}
        </p>
        <p className="author__name">{name}</p>
      </div>
    </StyledCrossRevelContainer>
  );
}

export default CrossRevealSection;
