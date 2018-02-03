/* eslint camelcase:0 */
import React from 'react';
import {render} from 'enzyme';
import {getMockFollower} from '../../../utils/github-api.stub';
import FollowerListItem from './FollowerListItem';

describe('FollowerListItem', () => {
  it('FollowerListItem Should display url', () => {
    const follower = getMockFollower({url: 'http://test'});
    const wrapper = render(<FollowerListItem follower={follower} />);
    expect(wrapper.find('[href="http://test"]')).to.not.be.undefined;;
  });
});
