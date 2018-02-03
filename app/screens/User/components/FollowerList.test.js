import React from 'react';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import {getMockFollower} from '../../../utils/github-api.stub';
import FollowerList from './FollowerList';

function mountComponent(props = {}) {
	  return mount(<FollowerList {...getDefaultProps()} {...props} />);
}

function getDefaultProps() {
  return {
    username: 'luke-skywalker',
    getFollowers,
  };
}

function getGetFollowersSpy(resolvedValue = getMockFollowers()) {
  return spy(() => Promise.resolve(resolvedValue));
}
	
describe('FollowerList', () => {
  it('should render no followers by default', () => {
    const wrapper = mountComponent();
    expect(wrapper.find('strong')).to.have.length(0);
  });

  it('should invoke the getFollower method with the user', () => {
    const getFollowersSpy = getGetFollowersSpy();
    mountComponent({getFollowers: getFollowersSpy, username: 'bob'});
    expect(getFollowersSpy).to.have.been.calledOnce;
    expect(getFollowersSpy).to.have.been.calledWith('bob');
  });

  it('should list the followers', done => {
	    const totalFollowers = 3;
	    const getFollowersSpy = getGetFollowersSpy(getMockFollowers(totalFollowers));
	    const wrapper = mountComponent({getFollowers: getFollowersSpy});
	    setTimeout(() => {
	      expect(wrapper.find('li')).to.have.length(totalFollowers);
	      done();
	    });
	  });  
});

