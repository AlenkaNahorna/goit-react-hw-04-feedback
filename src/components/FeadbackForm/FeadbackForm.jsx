import { Box } from 'styles/Box';
import { FeadbackButton, FeadbackTitle } from './FeadbackForm.styled';

export const FeadbackForm = ({ onGood, onNeutral, onBad }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb="l">
      <FeadbackTitle>Please leave feedback</FeadbackTitle>
      <div>
        <FeadbackButton type="button" onClick={onGood}>
          Good
        </FeadbackButton>
        <FeadbackButton type="button" onClick={onNeutral}>
          Neutral
        </FeadbackButton>
        <FeadbackButton type="button" onClick={onBad}>
          Bad
        </FeadbackButton>
      </div>
    </Box>
  );
};
