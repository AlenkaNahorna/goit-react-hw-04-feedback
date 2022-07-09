import PropTypes from 'prop-types';
import { Box } from 'styles/Box';
import { StatisticsList, StatisticsListItem } from './Statistics.styled';

export const Statistics = ({ options, values, total, positivePercentage }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mb="ml"
      as="section"
    >
      <StatisticsList>
        {options.map(option => (
          <StatisticsListItem key={option}>
            {option}: {values[option]}
          </StatisticsListItem>
        ))}
        <StatisticsListItem>Total: {total}</StatisticsListItem>
        <StatisticsListItem>
          Positive feedback: {positivePercentage}%
        </StatisticsListItem>
      </StatisticsList>
    </Box>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  values: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
