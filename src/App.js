import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.reasonList = [];
    this.state = {
      currentReason: '',
      reasonNumber: -1,
      lastReasonNumber: -1,
    };
  }

  componentDidMount() {
    this.reasonList = this.getReasonList();
    this.getNextReason();
  }

  getReasonList = () => {
    return [
      'Your Smile. (:',
      'Your laugh.',
      'The way your eyes smile',
      'When you talk to the kids',
      'When you kiss me goodbye',
      'When you kiss me hello',
      'When you tell me good morning',
      'When you tell me good night',
      'When you dance',
      'The way you work so hard',
      'How you always worry about me',
      'You\'re always true to yourself',
      'How you won\'t back down if it\'s something you want',
    ]
  }

  getNextReason = (e) => {
    const reasonNumber = this.getNewRandom();

    const randomReason = this.reasonList[reasonNumber];

    this.setState({
      currentReason: randomReason,
      reasonNumber: reasonNumber + 1,
      lastReasonNumber: reasonNumber
    });
  }

  getNewRandom = () => {
    const numberOfReasons = this.reasonList.length;
    let reasonNumber = -1;
    while (reasonNumber === -1 || reasonNumber === this.state.lastReasonNumber) {
      reasonNumber = Math.floor(Math.random() * numberOfReasons);
    }
    return reasonNumber;
  }

  render() {
    return (
      <div className="App">
        <div className="App-body">
          <h2>Reasons Why I Love You</h2>
          <h3>Reason #{ this.state.reasonNumber }: { this.state.currentReason }</h3>
          <button className="btn btn-primary" onClick={this.getNextReason}>Get Next Reason</button>
        </div>
      </div>
    );
  }
}

export default App;
