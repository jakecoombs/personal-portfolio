import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiTerminal } from "react-icons/di";
import styled from "styled-components";
import { useBreakpoints } from "../atoms/Breakpoints";
import { Divider } from "../atoms/Divider";

export const Header = () => {
  const breakpoints = useBreakpoints();

  return (
    <HeaderContainer id="navigation">
      <FirstItem>
        <Link href="/">
          <LogoContainer>
            <DiTerminal size="3rem" /> <span>Jake Coombs</span>
          </LogoContainer>
        </Link>
      </FirstItem>
      <MainTabs>
        {breakpoints.medium && !breakpoints.small && <Divider vertical />}
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        {breakpoints.medium && <Divider vertical />}
        <li>
          <Link href="#tech">
            <NavLink>Developer Experience</NavLink>
          </Link>
        </li>
        {breakpoints.medium && <Divider vertical />}
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        {breakpoints.medium && !breakpoints.small && <Divider vertical />}
      </MainTabs>
      <LastItem>
        <SocialIcons href="https://github.com/jcoombs235">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/jake-coombs-2093b7164/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </LastItem>
    </HeaderContainer>
  );
};

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  color: white;
`;

const HeaderContainer = styled.div`
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

const FirstItem = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

const MainTabs = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-row: 2;
    grid-column: 1/-1;
    text-align: center;
  }
`;

const LastItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 4 / 2 / 6;
  }
`;

const NavLink = styled.a`
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
