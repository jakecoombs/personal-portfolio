import React, { ReactNode } from "react";
import styled from "styled-components";
import { Divider } from "../atoms/Divider";

interface IProps {
  id?: string;
  header?: string;
  children?: ReactNode;
}

export const SectionLayout = ({ id, header, children }: IProps) => {
  return (
    <SectionWrapper>
      <SectionDivider />
      <SectionContainer>
        {header && <Header id={id}>{header}</Header>}
        {children}
      </SectionContainer>
    </SectionWrapper>
  );
};

const SectionDivider = styled(Divider)`
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
