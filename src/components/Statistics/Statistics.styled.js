import styled from '@emotion/styled';

export const StatisticsTitle = styled.h2`
  margin-bottom: 8px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticsListItem = styled.li`
  width: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-right: 16px;
`;

export const StatisticsListLabel = styled.p`
  margin-right: 5px;
`;

export const StatisticsListValue = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
