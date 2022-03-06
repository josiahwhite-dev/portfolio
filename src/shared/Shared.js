import styled from "styled-components";

export const media = {
  mobile: "@media(max-width: 1024px)",
};

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