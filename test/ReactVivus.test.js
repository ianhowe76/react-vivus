import React, { Component } from 'react';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ReactVivus from '../src/ReactVivus';

const TEST_SVG = '../testData/test-animation.svg';

test('<ReactVivus />', () => {
  const wrapper = shallow(
    <ReactVivus
      svg={TEST_SVG}
    />
  );

  expect(wrapper).not.toBeNull();
});

