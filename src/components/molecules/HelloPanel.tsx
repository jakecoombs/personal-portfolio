import React from "react";
import styled from "styled-components";

export const HelloPanel = () => {
  const [waited, setWaited] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setWaited(true);
    }, 5000);
  }, []);

  return (
    <Content>
      <CollapsingPadding waited={waited} />
      <h1>
        Hello World <WavingHand>👋</WavingHand>
      </h1>
      <h2>I'm Jake Coombs, an Apprentice Software Engineer</h2>
      <CollapsingPadding waited={waited} bottom />
    </Content>
  );
};

const WavingHand = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const Content = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CollapsingPadding = styled.div<{ waited: boolean; bottom?: boolean }>`
  height: 25vh;

  ${({ bottom }) => bottom && `height: 75vh;`}

  ${({ waited }) =>
    waited &&
    `height: 0;
    transition: height 0.5s ease-in;`}
`;
