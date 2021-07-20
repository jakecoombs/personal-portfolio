import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
interface IProps {
  url: string;
  text: string;
}

export const ArrowLink = ({ url, text }: IProps) => {
  return (
    <a href={url}>
      <ArrowLinkContainer>
        {text}
        <Arrow />
      </ArrowLinkContainer>
    </a>
  );
};

export const Arrow = styled(AiOutlineArrowRight)`
  margin-left: 4px;
`;

const ArrowLinkContainer = styled.div`
  padding: 10px 0;
  display: flex;
`;
