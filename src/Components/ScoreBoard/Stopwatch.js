import React from 'react'

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      previousTime: 0,
      elapsedTime: 0
    };
    this.onTick = this.onTick.bind(this)
    this.onStart = this.onStart.bind(this)
    this.onStop = this.onStop.bind(this)
    this.onReset = this.onReset.bind(this)

  }

  componentDidMount() {
    this.interval = setInterval(this.onTick)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onStart() {
    this.setState({
      running: true,
      previousTime: Date.now()
    });
  }

  onStop() {
    this.setState({
      running: false
    });
  }

  onReset() {
    this.setState({
      elapsedTime: 0,
      previousTime: Date.now()
    });
  }

  onTick() {

    if (this.state.running) {
      let now = Date.now();
      this.setState({
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
        previousTime: Date.now(),
      });
    }
  }



  render() {

    const seconds = Math.floor(this.state.elapsedTime / 1000);

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch__time"> {seconds} </div>
        { this.state.running ?
          <button onClick={this.onStop}>Stop</button>
          :
          <button onClick={this.onStart}>Start</button>
        }
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
