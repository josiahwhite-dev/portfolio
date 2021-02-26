import styled from "styled-components";
import JWLogo from "../icons/josiahwhite.svg";
import { media } from "../shared/Shared";

const AppWrapper = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;

  ${media.mobile} {
    flex-direction: column;
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

  ${media.mobile} {
    height: 50vh;
  }
`;

const LogoHolder = styled.div`
  display: flex;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;

  height: 100vh;
  align-items: center;

  ${media.mobile} {
    height: 50vh;
    justify-content: center;
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

function Home() {
  return (
    <AppWrapper>
      <Content>
        <div />

        <a href="#/portfolio">portfolio</a>
        <a href="#/about">about</a>
        <a href="#/experience">experience</a>
        <div />
      </Content>
      <LogoHolder style={{ backgroundColor: "white" }}>
        <img
          src={JWLogo}
          alt="React Logo"
          style={{ height: "60vh", width: "50vw" }}
        />
      </LogoHolder>
    </AppWrapper>
  );
}

export default Home;
