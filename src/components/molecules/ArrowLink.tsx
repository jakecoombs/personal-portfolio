import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import { LinkItem } from "../atoms/LinkItem";

interface IProps {
  url: string;
  text: string;
}

export const ArrowLink = ({ url, text }: IProps) => {
  return (
    <LinkItem href={url}>
      <ArrowLinkContainer>
        {text}
        <Arrow />
      </ArrowLinkContainer>
    </LinkItem>
  );
};

const Arrow = styled(AiOutlineArrowRight)`
  margin-left: 4px;
`;

const ArrowLinkContainer = styled.div`
  padding: 10px 0;
  display: flex;
`;
