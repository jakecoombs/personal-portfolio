import styled from "styled-components";
import { Arrow } from "./ArrowLink";

interface IProps {
  heading?: string;
  items: Array<IColumnListItem>;
}

export interface IColumnListItem {
  text: string;
  link?: string;
  backgroundColor?: string;
  color?: string;
}

export const ColumnList = ({ heading, items }: IProps) => {
  const sortedItems = items.sort((a, b) =>
    (!a.color && b.color) || (!a.backgroundColor && b.backgroundColor) ? 1 : -1
  );
  return (
    <ListContainer>
      {heading && <ListHeader>{heading}</ListHeader>}
      <StyledList>
        {sortedItems.map((item, index) => (
          <Item
            key={`${item}_${index}`}
            $fg={item.color}
            $bg={item.backgroundColor}
          >
            {item.link ? (
              <a href={item.link} key={`${item}_${index}`}>
                {item.text}
                <Arrow />
              </a>
            ) : (
              item.text
            )}
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
  columns: 3;
  -webkit-columns: 3;
  -moz-columns: 3;

  @media ${(props) => props.theme.breakpoints.md} {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    columns: 1;
    -webkit-columns: 1;
    -moz-columns: 1;
  }
`;

const ListHeader = styled.h3`
  margin-bottom: 1rem;
`;

const Item = styled.li<{ $bg?: string; $fg?: string }>`
  a {
    display: flex;
    justify-content: center;
  }

  border-radius: 20px;
  padding: 5px 0;
  margin: 0 30px 1rem 30px;
  font-weight: bold;
  border: 2px solid;

  ${({ $bg }) => `background-color: ${$bg}`};
  ${({ $fg }) => `color: ${$fg}`};
`;
