import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MesheryLogo from "../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import SpireLogo from "../../collections/integrations/spire/icon/color/spire-color.svg";
import MesheryAndSpire from "../../collections/resources/articles/hpes-adoption-of-meshery-and-meshmap/meshery-and-hpe.svg";


const BannerWrapper = styled.div`

.large-screen {
  display: flex;
  max-width: 100%;
  overflow: hidden;
  margin: 5% 0%;

  @media screen and (max-width: 600px) {
    display: none;
  }
}

.left-img {
  display: flex;
  background: ${props => props.theme.bannerGradientBackgroundToWhite};
    flex: 0 0 20%;
    text-align: center;
    justify-content: center;
    border: 1px solid;
    border-color: ${props => props.theme.whiteToBlack};
    transform-origin: top right;
    transform: skewX(-25deg);
    padding: 3%;
}

.left-img > * {
  transition: transform 0.4s ease;
  transform: skewX(25deg); /* Counteract the parent's skew */
  width: 40%;

}

.desc {
  display: flex;
  background:${props => props.theme.bannerDescriptionGradient};
    flex: 0 0 60%;
    text-align: center;
    border: 2px solid transparent;
    border-image: ${props => props.theme.borderGradientTransitionBefore} ;
    border-image-slice: 1 1 1 1;
    transition: border 0.4s ease-in-out;
    justify-content: center;
    align-items: center;
    transform: skewX(-25deg);

    h2 {
      text-align: center;
      width: 80%;
      color: #fff;

      @media screen and (max-width: 800px) {
        font-size: 1.25rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 1rem;
      }
    }
}

.desc > * {
  transform: skewX(25deg); /* Counteract the parent's skew */
}

.right-img {
  display: flex;
  background: ${props => props.theme.bannerGradientBackgroundToWhite};
    flex: 0 0 20%;
    text-align: center;
    justify-content: center;
    border: 1px solid;
    border-color: ${props => props.theme.whiteToBlack};
    transform-origin: bottom left;
    transform: skewX(-25deg);
    padding: 3%;
}

.right-img > * {
  transition: transform 0.4s ease;
  transform: skewX(25deg); /* Counteract the parent's skew */
  width: 40%;
}

.scale-on-hover {
  > * {
    transition: transform 0.4s ease;
    transform: skewX(25deg) scale(1.4);
  }
}

.desc-hover {
  border-image: ${props => props.theme.borderGradientTransitionAfter} ;
    border-image-slice: 1 1 1 1;
    transition: 0.4s ease-in-out;
}

.small-screen {
  display: none;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    display: flex;
  }

  .small-screen-desc {
    width: 80%;
  }

  .meshery-and-spire {
    margin-top: 5%;
  width: 80%;
  border: 1px solid #fff;
  }
}
`;

const CaseStudyBanner = () => {

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  return (
    <a href="/resources/cloud-native/hpes-adoption-of-meshery-and-meshmap">
      <BannerWrapper>
        <div className="small-screen">
          <div className="small-screen-desc">
            <h2>Discover how HPE uses Meshery to manage SPIRE</h2>
          </div>
          <div className="meshery-and-spire">
            <img src={MesheryAndSpire} alt="meshery-and-spire" />
          </div>
        </div>
        <div className="large-screen">
          <div className={`left-img ${hover ? "scale-on-hover" : ""}`} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <img src={MesheryLogo} alt="meshery-logo" />
          </div>
          <div className={`desc ${hover ? "desc-hover" : ""}`} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <h2>Discover how HPE uses Meshery to manage SPIRE</h2>
          </div>
          <div className={`right-img ${hover ? "scale-on-hover" : ""}`} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <img src={SpireLogo} alt="spire-logo" />
          </div>
        </div>
      </BannerWrapper>
    </a>
  );
};

export default CaseStudyBanner;
