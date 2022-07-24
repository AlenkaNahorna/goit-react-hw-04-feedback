import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const StatisticsListItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space.ml};
  margin-right: ${p => p.theme.space.l};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
