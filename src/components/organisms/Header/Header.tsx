import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiTerminal } from "react-icons/di";
import styled from "styled-components";

import {
  HeaderContainer,
  FirstItem,
  MainTabs,
  LastItem,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

export const Header = () => (
  <HeaderContainer>
    <FirstItem>
      <Link href="/">
        <LogoContainer>
          <DiTerminal size="3rem" /> <span>Jake Coombs</span>
        </LogoContainer>
      </Link>
    </FirstItem>
    {/* todo: Set up open and close for small breakpoints */}
    <MainTabs>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Programming Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
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

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  color: white;
`;
