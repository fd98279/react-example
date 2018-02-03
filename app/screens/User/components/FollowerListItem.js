import React, {PropTypes} from 'react';

export default FollowerListItem;

function FollowerListItem({follower}) {
  return (
    <li className="border-bottom">
      <div className="pull-right">
        <strong>{follower.follower}</strong>
        <strong>{follower.login}</strong>
        <strong>{follower.id}</strong>
        <a href={follower.url}>{follower.url}</a>
      </div>
    </li>
  );
}

FollowerListItem.propTypes = {
	follower: PropTypes.shape({
    login: PropTypes.string,
    id: PropTypes.number,
    url: PropTypes.string
  }),
};

FollowerListItem.defaultProps = {
  repo: {},
};
