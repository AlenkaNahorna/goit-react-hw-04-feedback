import styled from '@emotion/styled';

export const Button = styled.button`
  margin-right: ${p => p.theme.space.ml};
  padding: ${p => p.theme.space.ml};
  border: none;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 5px 0px;
  border-radius: ${p => p.theme.radii.small};
  font-size: ${p => p.theme.fontSizes.l};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: ${p => p.theme.colors.accentColorBlue};
  }
`;
