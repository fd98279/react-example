import React, {Component, PropTypes} from 'react';
import Tooltip from 'react-tooltip';
import {getUsers, saveUser, deleteAllUsers, deleteUser} from '../../../utils/github-api'
import UserListItem from './UserListItem';
import UserEditForm from './UserEditForm';


export default class UserList extends Component {
  constructor() {
	    super()
		this.state = {
	    	users: [], 
	    	currentMode: 'read', 
	    	successUpdate: "",
	    	currentUser: {Id: "", Name: ""}
		}
  }
  
  load() {
	  getUsers().then(users => {
		  this.setState({users});
		  this.forceUpdate();
	  });
  }

  onDelete(e) {
	  deleteUser(this.state.currentUser.Id).then(this.load());
  }
  
  onDeleteAll(e) {
	  deleteAllUsers().then(this.load());
  }
  
  onSave(e) {
	  if (this.state.currentMode == 'edit' || this.state.currentMode == 'create')
	  {
		  saveUser(this.state.currentUser).then(this.load());  
	  }
	  if (this.state.currentMode == 'delete')
	  {
		  deleteUser(this.state.currentUser.Id).then(this.load());  
	  }
  }
  
  onCreate(e){
	  this.setState({currentMode: 'create'})
	  this.onSave(e);
  }
  
  componentWillMount() {
    this.load();
  }

  changeAppMode(newMode, user) {
	  let currentUser = {...this.state.currentUser};
	  currentUser.Id = user.Id;
	  currentUser.Name = user.Name;
	  this.setState({currentUser});
	  this.setState({currentMode: newMode});
      this.forceUpdate();
  }

  onCancel(e) {
	  this.setState({currentMode: 'read'});
      this.forceUpdate();
  }
  
  onNameChange(e){
	  let currentUser = {...this.state.currentUser};
	  currentUser.Id = currentUser.Id;
	  currentUser.Name = e.target.value;
	  this.setState({currentUser});
  }

  onIdChange(e){
	  let currentUser = {...this.state.currentUser};
	  currentUser.Id = e.target.value;
	  currentUser.Name = currentUser.Name;
	  this.setState({currentUser});
  }
  
  render() {
	var tdStyle = { marginRight: '10px' };	  
	return(
    		<div>
    		    <UserEditForm currentMode={this.state.currentMode} 
    		    currentUser={this.state.currentUser} 
    		    onIdChange={this.onIdChange.bind(this)} 
    		    onNameChange={this.onNameChange.bind(this)} onSave={this.onSave.bind(this)} 
    		    onCancel={this.onCancel.bind(this)}/>
	    		<div>
		            <table className='table table-bordered table-hover'>
		                <thead>
		                    <tr>
		                        <th>Id</th>
		                        <th>Name</th>
		                        <th>Actions
			                        <button
		                            className='btn btn-primary pull-right'
		                            style={tdStyle}
		                            onClick={(event) => { this.onDeleteAll(event) }}>Delete All</button>
			                        <button
		                            className='btn btn-primary pull-right'
		                            style={tdStyle}
		                            onClick={(event) => { this.onCreate() }}>Create</button>
			                        <button
		                            className='btn btn-primary pull-right'
		                            style={tdStyle}
		                            onClick={(event) => { this.load() }}>Reload</button>
		                        </th>
		                    </tr>
		                </thead>
		                <tbody>
		                {this.state.users.map((user, index) => <UserListItem key={index} user={user} changeAppMode={this.changeAppMode.bind(this)}/>)} 
			            </tbody>
		            </table>
	            </div>
            </div>
   );    		
  }
}

UserList.propTypes = {
    getUsersFromBackend: PropTypes.func,
};
