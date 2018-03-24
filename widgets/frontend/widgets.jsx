import React from 'react';
import Clock from './clock.jsx';
import Tabs from './tabs.jsx';

const Panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

class Widgets extends React.Component {

  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <h1 class="title">Super Awesome Widgets</h1>
        <Clock/>
        <br></br>
        <h2 class="title">Tabs</h2>
        <Tabs panes ={Panes}/>
      </div>
    );
  }
}


export default Widgets;
