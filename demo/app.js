import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactVivus from '../src/ReactVivus';

class Demo extends Component {
  render() {
    return (
      <div style={{ height: '400px', width: '400px', backgroundColor: 'green' }}>
        <ReactVivus name="test" svg="test-animation.svg" color="orange" delayMs={1000}/>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'));

