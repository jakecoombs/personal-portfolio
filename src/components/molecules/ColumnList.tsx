import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  heading?: string;
  items: Array<ReactNode>;
}

export const ColumnList = ({ heading, items }: IProps) => {
  return (
    <ListContainer>
      {heading && <ListHeader>{heading}</ListHeader>}
      <StyledList>
        {items.map((item, index) => (
          <Item key={`${item}_${index}`}>{item}</Item>
        ))}
      </StyledList>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin-bottom: 2rem;
`;

const StyledList = styled.ul`
  column-count: 3;

  @media ${(props) => props.theme.breakpoints.md} {
    column-count: 2;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    column-count: 1;
  }
`;

const ListHeader = styled.h3`
  margin-bottom: 1rem;
`;

const Item = styled.li`
  margin-bottom: 1rem;
`;
