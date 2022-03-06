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

  p
  {  
    margin-left: 5vw;

  }

  ${media.mobile} {
    height: 50vh;
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

export const Splitter = styled.div`
  display: flex;
  flex-direction: column;
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

function About() {
  return (
    <AppWrapper>
      <Content>
        <div>
          <a href="#/" style={{textDecoration: "underline"}}>back</a>
        </div>

        <Project>
          <Splitter>
            <a href="https://adsref.cc">adsref.cc</a>
            <p>
            My name is Josiah White and I am a computer science student at the University of Adelaide.
            <br/>
            <br/>
            I have a passion for building projects with real world impact,
             especially in the area of education, and keeping up to date with 
             exciting emerging technologies.
             <br/>
            <br/>
            Outside of tech, I also speak French poorly, 
            try to keep up my fitness, and tutor English for students 
            from a variety of backgrounds.
            </p>
          </Splitter>
          <ImageHolder>
            <a href="https://adsref.cc" >
            <img
              src={JWLogo}
              
              alt="React Logo"
              style={{ height: "40vh", width: "80vw", marginRight: "10vw" }}
              className="adsref"
            />
            </a>
          </ImageHolder>
        </Project>
      </Content>
      
      
    </AppWrapper>
  );
}

export default About;
