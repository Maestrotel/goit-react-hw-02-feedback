import { Component } from 'react';
import { Statistics } from './Statistics/Statictics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
// import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // countTotalFeedback() { }

  // countPositiveFeedbackPercentage() { }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Statistics">
          <FeedbackOptions options={0} onLeaveFeedback={0} />
        </Section>
        {/* <Notification message="There is no feedback" /> */}
        <Section title="Please leave feedback">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={0}
            positivePercentage={0}
          />
        </Section>
      </>
    );
  }
}
