
import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
    setInterval(this._tick.bind(this), 1000);
  }


  _tick() {
    this.setState({time: new Date()});
  }




  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();


    return (
      <div class="clock">
        <h1>This is a Clock</h1>
        <p>
          {hours}:{minutes}:{seconds}
        </p>
        <h4>Please do with it it what you wish</h4>
      </div>
    );

  }

}



export default Clock;


// function setInterval(cb, ms) {
//   loop do {
//     wait(ms);
//     cb();
//   }
// }
