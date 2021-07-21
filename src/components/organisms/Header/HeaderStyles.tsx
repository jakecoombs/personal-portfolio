import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  padding: 1rem;
  padding-top: 1rem;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0.5rem;
  }
`;

export const FirstItem = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const MainTabs = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-row: 2;
    grid-column: 1/-1;
    text-align: center;
  }
`;

export const LastItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: hsla(0, 0%, 100%, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: hsl(0, 0%, 100%);
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: hsl(220, 35%, 20%);
    transform: scale(1.2);
    cursor: pointer;
  }
`;
