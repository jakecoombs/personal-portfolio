import styled from "styled-components";

interface IProps {
  heading?: string;
  items: Array<IColumnListItem>;
}

export interface IColumnListItem {
  text: string;
  backgroundColor?: string;
  color?: string;
}

export const ColumnList = ({ heading, items }: IProps) => {
  return (
    <ListContainer>
      {heading && <ListHeader>{heading}</ListHeader>}
      <StyledList>
        {items.map((item, index) => (
          <Item
            key={`${item}_${index}`}
            $fg={item.color}
            $bg={item.backgroundColor}
          >
            {item.text}
          </Item>
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

const Item = styled.li<{ $bg?: string; $fg?: string }>`
  margin-bottom: 1rem;
  border-radius: 20px;
  padding: 5px 0;
  margin-left: 30px;
  margin-right: 30px;
  font-weight: bold;
  border: 2px solid;

  ${({ $bg }) => `background-color: ${$bg}`};
  ${({ $fg }) => `color: ${$fg}`};
`;
