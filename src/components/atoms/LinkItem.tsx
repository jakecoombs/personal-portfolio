import styled from "styled-components";

export const LinkItem = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: #fff;
    left: 6px;
  }
`;
