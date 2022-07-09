import PropTypes from 'prop-types';
import { Box } from 'styles/Box';
import { SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="ml"
      mb="ml"
    >
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
