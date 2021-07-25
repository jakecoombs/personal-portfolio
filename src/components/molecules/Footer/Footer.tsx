import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ArrowLink } from "../ArrowLink";
import { SocialIcons } from "../Header";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  FooterLink,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  RepoLink,
  LinkContainer,
} from "./FooterStyles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <LinkContainer>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <FooterLink href="mailto:contact@jakecoombs.co.uk">
              contact@jakecoombs.co.uk
            </FooterLink>
          </LinkColumn>
        </LinkList>
        <RepoLink>
          <h3>
            <ArrowLink
              url="https://github.com/jakecoombs/personal-portfolio"
              text="Visit the GitHub Repo powering this site"
            />
          </h3>
        </RepoLink>
      </LinkContainer>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/jakecoombs">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/jake-coombs-2093b7164/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};
