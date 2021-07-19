import styled from "styled-components";

export const Divider = ({ vertical = false }: { vertical?: boolean }) => {
  if (vertical) {
    return <VerticalDivider />;
  }
  return <HorizontalDivider />;
};

const HorizontalDivider = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.divider};
`;

const VerticalDivider = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.divider};
`;
