import styled from '@emotion/styled';

export const FeadbackTitle = styled.h1`
  margin-bottom: 16px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
`;

export const FeadbackButton = styled.button`
  height: 30px;
  margin-right: 8px;
  padding: 5px;
  border-radius: ${p => p.theme.radii.small};
  background-color: ${p => p.theme.colors.secondaryColorShadeMiddle};
  font-size: ${p => p.theme.fontSizes.m};
  &:hover {
    transform: scale(1.1);
  }
`;
