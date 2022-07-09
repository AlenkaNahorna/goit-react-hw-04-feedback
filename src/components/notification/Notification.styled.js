import styled from '@emotion/styled';

export const Message = styled.p`
  margin-top: ${p => p.theme.space.m}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primaryColor};
`;
