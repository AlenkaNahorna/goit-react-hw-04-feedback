import PropTypes from 'prop-types';
import { Box } from 'styles/Box';
import { SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box
      minWidth="400px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="xl"
      mb="xl"
      boxShadow="#040b4b40 0px 0px 5px 0px"
      backgroundColor="backgroundColor"
      borderRadius="normal"
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
