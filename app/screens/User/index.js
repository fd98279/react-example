import React, {Component} from 'react';
import UserList from './components/UserList'

export default class User extends Component {
  render() {
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

