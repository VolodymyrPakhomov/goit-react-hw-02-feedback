import React, { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Container } from 'components/App.style'
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addOnIncrement = event => {
    this.setState(prevState => {
      switch (event.target.innerText) {
        case 'Good':
          return { good: prevState.good + 1 };
        case 'Neutral':
          return { neutral: prevState.neutral + 1 };
        case 'Bad':
          return { bad: prevState.bad + 1 };
        default:
          return;
      }
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () =>{
    const { good } = this.state;
    return Math.round(good / this.countTotalFeedback() * 100);
  };

  render() {
    return (
      <Container >
        <Section title="Please leave feedback">
          <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onIncrement={this.addOnIncrement}
          />
        </Section>

        <Section title="Statistics">
        {this.countTotalFeedback()  ? ( <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          />) : (<Notification message="There is no feedback" />)}
        </Section>

    </Container>
    );
  }
}

