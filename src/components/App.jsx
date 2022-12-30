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

  handleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return (good / this.countTotalFeedback()) * 100 || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage, handleClick } =
      this;
    const total = countTotalFeedback();
    const positive = countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Statistics">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={handleClick}
          />
        </Section>
        {/* <Notification message="There is no feedback" /> */}
        <Section title="Please leave feedback">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        </Section>
      </>
    );
  }
}
