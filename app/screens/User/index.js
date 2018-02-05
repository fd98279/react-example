import React, {Component, PropTypes} from 'react';
import UserList from './components/UserList'

export default class User extends Component {
  constructor() {
    super()
    this.state = {filter: ''}
  }

  handleFilterUpdate = (filter) => {
    this.setState({filter})
  }

  render() {
    const {username} = this.props.params
    const {filter} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <h3>Users</h3>
            <UserList />
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string,
  }),
}
