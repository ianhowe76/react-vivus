import React, { Component } from 'react';

import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import ReactVivus from '../src/ReactVivus';

const TEST_SVG = '../testData/test-animation.svg';

let rvWrapper;

describe('<ReactVivus />', () => {
  describe('when only svg is specified', () => {
    beforeAll(() => {
      rvWrapper = mount(
        <ReactVivus
          svg={TEST_SVG}
        />
      );
    });

    test('component exists', () => {
      expect(rvWrapper).not.toBeNull();
    });

    test('has default props', () => {
      expect(rvWrapper.prop('duration')).toBe(ReactVivus.defaultProps.duration);
      expect(rvWrapper.prop('delayMs')).toBe(ReactVivus.defaultProps.delayMs);
      expect(rvWrapper.prop('type')).toBe(ReactVivus.defaultProps.type);
      expect(rvWrapper.prop('pathTiming')).toBe(ReactVivus.defaultProps.pathTiming);
      expect(rvWrapper.prop('animTiming')).toBe(ReactVivus.defaultProps.animTiming);
      expect(rvWrapper.prop('onAnimationFinished')).toBe(ReactVivus.defaultProps.onAnimationFinished);
      expect(rvWrapper.prop('name')).not.toBeNull();
    });
  });
});

