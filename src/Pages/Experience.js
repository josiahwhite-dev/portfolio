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

  display: flex;
  flex-direction: column;

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
  margin-top: 2vh;
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
  text-align: left;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  p {
    max-width: 40vw;
    font-weight: 300;
    font-size: calc(2vh + 1vw);

    animation: 2s ease-in 0s 1 fadeIn;

    ${media.mobile} {
      min-width: 80vw;
    }
  }
  ${media.mobile} {
    flex-direction: column;
  }


  li {
    text-align: "left";
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

const Lists = styled.div`

  display: flex;
  flex-direction: column;
  align-items: left;

  p {
  max-width: 40vw;
  font-weight: 300;
  font-size: calc(2vh + 1vw);
  animation: 2s ease-in 0s 1 fadeIn;
  }

  li {
    padding-top: 2vh;
    margin-left: 12vw;
  }



  ${media.mobile} {
    max-width: 80vw;
  }

}
`

const MobileInfoSwitcher = styled.div`

  display: flex;
  flex-direction: row;
  
  ${media.mobile}{
  flex-direction: column;

  }

`

function Portfolio() {
  return (
    <AppWrapper>
      <Content>
        <div>
          <a href="#/">back</a>
        </div>


        <Project>
        <Splitter>
            <a href="https://www.optiver.com/" >Optiver</a>
            <p style={{fontWeight: "bold"}}>Software Developer Internship <br/>Nov 2021 - Feb 2022 </p>
            <MobileInfoSwitcher>
              
              <Lists>
                <p style={{fontWeight: "500"}}>
                Description:
                </p>
                <p>
                  Over 8 weeks, I took a C++ project from design through to testing. 
                  The project aimed to replace an obsolete data sourcing/processing pipeline, 
                  and was comprised of three distinct parts:
                </p>
                <ul>
                  <li>a file downloader (querying AWS S3)</li>
                  <li>a file processor (for extracting information)</li>
                  <li>and a server to accept and fulfil requests from business clients</li>
                </ul>
                <p>
                  This project involved planning the system design, creating interfaces,
                  building my own protocol, enforcing bad-request and bad-info checking,
                  regularly checking in and communicating with my project manager, and
                  working with a variety of technologies to create a cohesive and 
                  successful system.
                </p>
                <p>
                  I also worked in a team with other interns over 2 weeks to build
                  a share-trading bot. This meant working collaboratively and effectively
                  as part of a team, and consistently checking in with risk/success/design
                  stakeholders.
                  </p>
              </Lists>
              <Lists>
                <p style={{fontWeight: "500"}}>Skills Gained:</p>
                <ul>
                  <li>Debugging with gdb</li>
                  <li>Work with git</li>
                  <li>Unit testing with gTest and gMock</li>
                  <li>Integration and system testing</li>
                  <li>Effective communication with project team &amp; manager</li>
                  <li>Creating a protocol with protobuf</li>
                  <li>Async downloading + processing files from AWS S3</li>
                  <li>Designing interfaces</li>
                  <li>Creating daemon applications</li>
                  <li>Reverse-engineering complex systems (C++, C#)</li>
                  <li>Sending/receiving data between server &amp; clients</li>
                  <li>Work with company-internal and external C++ libraries</li>
                  <li>Pair programming &amp; group work building a share-trading bot</li>
                  <li>Work with modern C++ concepts including smart pointers and lambda functions</li>
                </ul>
              </Lists>
              
            </MobileInfoSwitcher>
            
          </Splitter>
          

        </Project>

        <div />
      </Content>
    </AppWrapper>
  );
}

export default Portfolio;
