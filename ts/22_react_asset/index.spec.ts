import React from 'react';
import { shallow } from 'enzyme';

import { Asset } from '../index';

test('Calls load metadata on mount', () => {
  const loadMetadataSpy = jest.fn();
  shallow(<Asset title="Spider-man" rating={5} image="https://dummy.com" loadMetadata={loadMetadataSpy} />);
  expect(loadMetadataSpy).toHaveBeenCalledTimes(1);
  expect(loadMetadataSpy).toHaveBeenCalledWith('Spider-man');
});

test('Should re-call metadata when the title changes', () => {
  expect.assertions(1);
});

test('Should render the correct metadata', () => {
  const loadMetadataSpy = jest.fn();
  const asset = shallow(<Asset title="Spider-man" rating={5} image="https://dummy.com" loadMetadata={loadMetadataSpy} />);

  expect(asset.find('.title').text()).toEqual('Spider-man');
  expect(asset.find('.rating').text()).toEqual('5 Stars!');
});
