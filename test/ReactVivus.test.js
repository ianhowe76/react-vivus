import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Vivus from 'vivus';

import ReactVivus from '../src/ReactVivus';

const TEST_SVG = '../testData/test-animation.svg';

let rvWrapper;
let clock;

describe('<ReactVivus />', () => {
  describe('when only svg is specified', () => {
    beforeAll(() => {
      clock = sinon.useFakeTimers(Date.now());
      rvWrapper = mount(
        <ReactVivus
          svg={TEST_SVG}
        />,
        { attachTo: document.body },
      );
    });

    afterAll(() => {
      clock.restore();
      rvWrapper.detach();
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

    test('has created a div container', () => {
      expect(rvWrapper.find('div').length).toBe(1);
    });

    test('has not yet created a vivus', () => {
      expect(rvWrapper.instance().vivus).toBeUndefined();
    });

    test('has created a vivus after the delay', () => {
      clock.tick(ReactVivus.defaultProps.delayMs + 10);
      const theVivus = rvWrapper.instance().vivus;

      expect(rvWrapper.instance().vivus).not.toBeUndefined();
      expect(theVivus.duration).toBe(ReactVivus.defaultProps.duration);
      expect(theVivus.type).toBe(ReactVivus.defaultProps.type);
      expect(theVivus.pathTimingFunction).toBe(Vivus.LINEAR);
      expect(theVivus.animTimingFunction).toBe(Vivus.LINEAR);
    });
  });
});

