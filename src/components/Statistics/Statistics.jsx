import { Box } from 'styles/Box';
import {
  StatisticsList,
  StatisticsListItem,
  StatisticsTitle,
  StatisticsListLabel,
  StatisticsListValue,
} from './Statistics.styled';

export const Statistics = ({ good, neutral, bad }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mb="ml"
      as="section"
    >
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsList>
        <StatisticsListItem>
          <StatisticsListLabel>Good:</StatisticsListLabel>
          <StatisticsListValue>{good}</StatisticsListValue>
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsListLabel>Neutral:</StatisticsListLabel>
          <StatisticsListValue>{neutral}</StatisticsListValue>
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsListLabel>Bad:</StatisticsListLabel>
          <StatisticsListValue>{bad}</StatisticsListValue>
        </StatisticsListItem>
      </StatisticsList>
    </Box>
  );
};
