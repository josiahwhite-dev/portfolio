import styled from "styled-components";
import Adsref from "../icons/adsref.svg";
import Datamaps from "../icons/phonedatamaps.svg";
import Wizard from "../icons/wizard.svg";
import { media } from "../shared/Shared";

const AppWrapper = styled.div`
  height: auto;
  width: auto;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;

  ${media.mobile} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr 2fr 2fr 3fr;
  grid-template-columns: 1fr;

  height: 100vh;

  font-weight: bold;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: 1s ease-in 0s 1 fadeIn;

  a {
    font-size: calc(6vh + 2vw);
    padding-left: 6vw;
    text-decoration: none;
    color: #707070;
  }

  p {
    font-size: calc(2vh + 1vw);
    padding-left: 6vw;
    text-decoration: none;
  }
`;

const LogoHolder = styled.div`
  display: flex;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;

  height: 100vh;
  align-items: center;
`;

const Project = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: row;

  ${media.mobile} {
    flex-direction: column;
    margin-top: 2vh;
  }
`;



const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 100;
  max-width: 30vw;

  padding-left: 15vw;

  img {
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    animation: 2.5s ease-in 0s 1 fadeIn;
  }

  ${media.mobile} {
    max-width: 100vw;
    padding-left: 0vw;
  }

  animation: bob 3s infinite ease;

  @keyframes bob {
    0% {
      transform: translate(0vh, 0vh);
    }
    50% {
      transform: translate(0vh, -2vh);
    }
    100% {
      transform: translate(0vh, 0vh);
    }
  }
`;

export const Splitter = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  max-width: 50vw;
  ${media.mobile}{
    max-width: 80vw;
  }

  p {
    max-width: 40vw;
    font-weight: 300;
    font-size: calc(2vh + 1vw);

    animation: 2s ease-in 0s 1 fadeIn;

    ${media.mobile} {
      max-width: 80vw;
    }
  }

  a {
    color: #52deff;
    animation: 1s ease-out 0s 1 fadeIn;
  }
`;

function Portfolio() {
  return (
    <AppWrapper>
      <Content>
        <div>
          <a href="#/">back</a>
        </div>

        <Project>
          <Splitter>
            <a href="https://adsref.cc">adsref.cc</a>
            <p>
              A dynamic, interactive visualisation web-application to assist
              visual learners like myself to gain a better grasp on core
              computer science concepts. Written in javascript using ReactJS, and covers
              structures such as arrays, all the way to algorithms such as
              Dijkstra’s Shortest Path, offering step-by-step annotations of
              functions and behaviours.{" "}
            </p>
          </Splitter>
          <ImageHolder>
            <a href="https://adsref.cc" >
            <img
              src={Adsref}
              
              alt="React Logo"
              style={{ height: "40vh", width: "80vw", marginRight: "10vw" }}
              className="adsref"
            />
            </a>
          </ImageHolder>
        </Project>

        <Project>
          <Splitter>
            <a href="https://github.com/josiahwhite-dev/datamaps">datamaps</a>
            <p>
              An iOS/Android app with an interactive globe that displays country
              statistics such as GDP and Co2 emissions. Data was preprocessed
              using Python’s ‘Pandas’ and ‘GeoPandas’ libraries, and converted
              into JSON objects. It was then imported into a React Native
              (javascript) application and visualised using SVG paths. Users can
              tap countries to garner information, and swipe to rotate the
              model.
            </p>
          </Splitter>
          <ImageHolder>
          <a href="https://github.com/josiahwhite-dev/datamaps" >
            <img
              src={Datamaps}
              alt="React Logo"
              style={{ height: "70vh", width: "80vw", marginRight: "10vw" }}
            />
            </a>
          </ImageHolder>
        </Project>

        <Project>
          <Splitter>
            <a href="https://github.com/josiahwhite-dev/wizards">wizards</a>
            <p>
              A simple console-based RPG where the user fights monsters to gain
              money and experience, which they can use in the store to upgrade
              their character (C++).
            </p>
          </Splitter>
          <ImageHolder>
          <a href="https://github.com/josiahwhite-dev/wizards">
            <img
              src={Wizard}
              alt="React Logo"
              style={{
                height: "70vh",
                width: "80vw",
                marginRight: "10vw",
              }}
            />
            </a>
          </ImageHolder>
        </Project>

        <div />
      </Content>
    </AppWrapper>
  );
}

export default Portfolio;
