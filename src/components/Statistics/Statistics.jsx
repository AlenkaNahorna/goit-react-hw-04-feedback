import PropTypes from 'prop-types';
import { Box } from 'styles/Box';
import { StatisticsList, StatisticsListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mb="ml"
      as="section"
    >
      <StatisticsList>
        <StatisticsListItem> Good: {good}</StatisticsListItem>
        <StatisticsListItem> Neutral: {neutral}</StatisticsListItem>
        <StatisticsListItem> Bad: {bad}</StatisticsListItem>
        <StatisticsListItem> Total: {total}</StatisticsListItem>
        <StatisticsListItem>
          Positive feedback: {positivePercentage}%
        </StatisticsListItem>
      </StatisticsList>
    </Box>
  );
};

Statistics.propTypes = {
  options: PropTypes.array.isRequired,
  values: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
