import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  id?: string;
  header: string;
  children: ReactNode;
}

export const SectionLayout = ({ id, header, children }: IProps) => {
  return (
    <SectionWrapper>
      <Divider />
      <SectionContainer>
        <Header id={id}>{header}</Header>
        {children}
      </SectionContainer>
    </SectionWrapper>
  );
};

const Divider = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 800px;
  margin: auto;
`;

const Header = styled.h2`
  margin-bottom: 2rem;
`;

const SectionContainer = styled.div`
  padding-top: 2rem;
`;

const SectionWrapper = styled.section`
  padding: 1rem 0 0;
  margin: 1rem auto;
`;
