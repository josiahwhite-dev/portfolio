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
    margin-left: 5vw;
    text-decoration: none;
    color: #707070;
  }

  ${media.mobile} {
    height: 50vh;
  }
`;

const Project = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  a {
    animation: 2.5s ease-in 0s 1 fadeIn;
  }

  p {
    margin-left: 5vw;
    margin-right: 5vw;
    max-width: 40vw;
    font-weight: 300;
    font-size: calc(2vh + 1vw);

    animation: 4s ease-in 0s 1 fadeIn;

    ${media.mobile} {
      max-width: 80vw;
    }
  }

  ${media.mobile} {
    flex-direction: column;
    margin-top: 2vh;
  }
  z-index: 1;
`;

const LogoHolder = styled.div`
  display: flex;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;

  height: 100vh;
  align-items: center;
  z-index: 0;
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

  img {
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    animation: 6s ease-in 0s 1 fadeIn;
  }
`;

function About() {
  return (
    <AppWrapper>
      <Content>
        <div>
          <a href="#/">back</a>
        </div>

        <Project>
          <a href="">about</a>
          <p>
            My name is Josiah White and I am a computer science student at the
            University of Adelaide. 
            <br/><br/>
            I have a passion for building projects with
            real world impact, especially in the area of education, and keeping
            up to date with exciting emerging technologies.
            <br/><br/>
            Outside of tech, I also speak French poorly, try to keep up my fitness,
            and tutor English for students from a variety of backgrounds.
          </p>
          
        </Project>
        <div />
        <div />
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

export default About;
