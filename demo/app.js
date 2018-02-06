import React from 'react';
import ReactDOM from 'react-dom';
import ReactVivus from '../src/ReactVivus';

const TestAnimation = 'images/test-animation.svg';

const Demo = () => {
  console.log(TestAnimation);
  return (
    <div style={{ height: '400px', width: '400px', backgroundColor: 'green' }}>
      <ReactVivus name="test" svg={TestAnimation} color="orange" type="oneByOne" delayMs={1000} />
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById('root'));

