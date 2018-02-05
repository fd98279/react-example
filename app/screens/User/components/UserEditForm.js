import React, {PropTypes} from 'react';
import moment from 'moment';

export default UserEditForm;

function UserEditForm({currentMode, currentUser, onIdChange, onNameChange, onSave, saveStatus, onCancel}) {
	var tdStyle = {
	   marginRight: '10px'
	};	

	let editForm = <div></div>;
	if (currentMode != 'read')
	{
			editForm = <div>
	        {
	        	saveStatus == "User was updated." ?
	                <div className='alert alert-success'>
	                    User was updated.
	                </div>
	            : null
	        }
	
	        {
	        	saveStatus == "Unable to update User." ?
	                <div className='alert alert-danger'>
	                    Unable to update user. Please try again.
	                </div>
	            : null
	        }
	
	        <form>
	            <table className='table table-bordered table-hover'>
	                <tbody>
	                <tr>
	                    <td>Id</td>
	                    <td>
	                        <input
	                            type='text'
	                            className='form-control'
	                            value={currentUser.Id}
	                            required
	                            disabled={currentMode != "create"}
	                            onChange={(event) => { onIdChange(event) }}
	                        />
	                    </td>
                    </tr>
	                <tr>
	                    <td>Name</td>
	                    <td>
	                        <input
	                            type='text'
	                            className='form-control'
	                            value={currentUser.Name}
	                            required
	                            disabled={currentMode == "delete"}
	                            onChange={(event) => { onNameChange(event) }}/>
	                    </td>
	                </tr>
	                <tr>
	                    <td></td>
	                    <td>
	                        <button
	                            className='btn btn-primary'
	                            style={tdStyle}
	                            onClick={(event) => { onSave(event) }}>{currentMode}</button>
                            <button
                        	    className='btn btn-primary'
                        	    style={tdStyle}
                                onClick={(event) => { onCancel(event) }}>Cancel</button>
	                    </td>
	                </tr>
	                </tbody>
	            </table>
	        </form>
	    </div> 

  }
	
  return (editForm);
}

UserEditForm.propTypes = {
	currentMode: PropTypes.string,
	currentUser: PropTypes.shape({
	Id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	Name: PropTypes.string}),
	onIdChange: PropTypes.func.isRequired,
	onNameChange: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	saveStatus: PropTypes.string
};

UserEditForm.defaultProps = {
	currentMode: "",
    changeAppMode: (a,b) => {},
	onIdChange: () => {},
	onNameChange: () => {},
	onCancel: () => {},
	onSave: () => {},
	saveStatus: ""
};
