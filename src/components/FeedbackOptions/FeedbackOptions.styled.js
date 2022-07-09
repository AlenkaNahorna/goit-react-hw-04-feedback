import styled from '@emotion/styled';

export const Button = styled.button`
  height: 30px;
  margin-right: ${p => p.theme.space.ml};
  padding: ${p => p.theme.space.m};
  border-radius: ${p => p.theme.radii.small};
  background-color: ${p => p.theme.colors.secondaryColorShadeMiddle};
  font-size: ${p => p.theme.fontSizes.m};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: ${p => p.theme.colors.accentColorBlue};
  }
`;
