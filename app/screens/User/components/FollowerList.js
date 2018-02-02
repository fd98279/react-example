import React, {Component, PropTypes} from 'react';
import FollowerListItem from './FollowerListItem';
import {getFollowers} from '../../../utils/github-api'

export default class FollowerList extends Component {
  constructor() {
    super()
    this.state = {followers: []}
  }

  getFollowers() {
    const {username} = this.props
    this.props.getFollowers(username).then(followers => {
      this.setState({followers});
    });
  }

  componentWillMount() {
    this.getFollowers();
  }

  render() {
    const {followers} = this.state
    return (
      <ul className="list-unstyled">
        {renderFollowers(followers)}
      </ul>
    );
  }
}

FollowerList.propTypes = {
  username: PropTypes.string.isRequired,
  getFollowers: PropTypes.func,
};

FollowerList.defaultProps = {getFollowers}

function renderFollowers(followers) {
  return followers.map(follower => <FollowerListItem key={follower.id} follower={follower} />);
}
