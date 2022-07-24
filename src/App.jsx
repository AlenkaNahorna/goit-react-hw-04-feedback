import { useState } from 'react';
import { Box } from 'styles/Box';
import { Section } from './components/section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleLeaveFeedback = event => {
    switch (event.currentTarget.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
    total();
    countPositivePercentage();
  };

  const total = () => {
    return good + neutral + bad;
  };

  const countPositivePercentage = () => {
    return good ? Math.round((good / total) * 100) : 0;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="60%"
      p="ml"
      m="10px auto"
      border="1px solid"
      borderRadius="normal"
      backgroundColor="secondaryColor"
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
}
