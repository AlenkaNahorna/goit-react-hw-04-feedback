import React, { Component } from 'react';
import { Box } from 'styles/Box';
import { FeadbackForm } from './FeadbackForm/FeadbackForm';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handlIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handlIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="70%"
        p="ml"
        m="10px auto"
        border="1px solid"
        borderRadius="normal"
        backgroundColor="secondaryColorShadeLight"
      >
        <FeadbackForm
          onGood={this.handlIncrementGood}
          onNeutral={this.handlIncrementNeutral}
          onBad={this.handlIncrementBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </Box>
    );
  }
}
