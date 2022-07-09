import React, { Component } from 'react';
import { Box } from 'styles/Box';
import { Section } from './section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = event => {
    const { id } = event.target;
    this.setState(prevState => ({
      [id]: prevState[id] + 1,
    }));
  };

  countTotalFeedback = () => {
    const arrValues = Object.values(this.state);
    const total = arrValues.reduce((prev, current) => prev + current, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good ? Math.round((good / this.countTotalFeedback()) * 100) : 0;
  };

  options = Object.keys(this.state);

  render() {
    const state = this.state;
    const options = this.options;

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
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              options={options}
              values={state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
