import styled from "styled-components";
import { LinkItem } from "../atoms/LinkItem";

interface IProps {
  url: string;
  text: string;
}

export const ArrowLink = ({ url, text }: IProps) => {
  return (
    <ArrowLinkContainer>
      <LinkItem href={url}>{text}</LinkItem>
      {/* Add arrow image here */}
    </ArrowLinkContainer>
  );
};

const ArrowLinkContainer = styled.div`
  padding: 10px 0;
`;
