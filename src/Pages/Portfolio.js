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

  a {
    font-size: calc(6vh + 2vw);
    padding-left: 12vw;
    text-decoration: none;
    color: #707070;
  }

  p {
    font-size: calc(2vh + 1vw);
    padding-left: 12vw;
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

const Splitter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: "left";

  p {
    max-width: 40vw;
    font-weight: 300;
    font-size: calc(2vh + 1vw);

    ${media.mobile} {
      max-width: 80vw;
    }
  }
`;

const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 100;

  max-width: 50vw;

  ${media.mobile} {
    max-width: 100vw;
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

function Portfolio() {
  return (
    <AppWrapper>
      <Content>
        <div>
          <a href="/">back</a>
        </div>

        <Project>
          <Splitter>
            <a href="https://adsref.cc">adsref.cc</a>
            <p>
              A dynamic, interactive visualisation web-application to assist
              visual learners like myself to gain a better grasp on core
              computer science concepts. Written in ReactJS, and covers
              structures such as arrays, all the way to algorithms such as
              Dijkstra’s Shortest Path, offering step-by-step annotations of
              functions and behaviours.{" "}
            </p>
          </Splitter>
          <ImageHolder>
            <img
              src={Adsref}
              alt="React Logo"
              style={{ height: "40vh", width: "80vw", marginRight: "10vw" }}
            />
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
            <img
              src={Datamaps}
              alt="React Logo"
              style={{ height: "70vh", width: "80vw", marginRight: "10vw" }}
            />
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
            <img
              src={Wizard}
              alt="React Logo"
              style={{
                height: "70vh",
                width: "80vw",
                marginRight: "10vw",
              }}
            />
          </ImageHolder>
        </Project>

        <div />
      </Content>
    </AppWrapper>
  );
}

export default Portfolio;
