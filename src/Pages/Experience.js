import styled from "styled-components";

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
    padding-left: 12vw;
    text-decoration: none;
    color: #707070;
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
  }

  p {
    font-size: calc(2vh + 1vw);
    padding-left: 12vw;
    text-decoration: none;
  }
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

function Portfolio() {
  return (
    <AppWrapper>
      <Content>
        <div>
          <a href="#/">back</a>
        </div>

        <Project></Project>

        <Project>
          <a>watch this space</a>
        </Project>

        <div />
      </Content>
    </AppWrapper>
  );
}

export default Portfolio;
