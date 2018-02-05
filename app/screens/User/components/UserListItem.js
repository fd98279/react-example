import React, {PropTypes} from 'react';
import moment from 'moment';

export default UserListItem;

function UserListItem({user, changeAppMode}) {
  var tdStyle = {
	marginRight: '10px'
  };	

  return (
    <tr>
        <td>{user.Id}</td>
        <td>{user.Name}</td>
        <td>
            <a href='#'
                onClick={() => changeAppMode('update', user)}
                className='btn btn-primary m-r-1em' style={tdStyle}> Edit
            </a>
            <a
                onClick={() => changeAppMode('delete', user)}
                className='btn btn-danger' style={tdStyle}> Delete
            </a>
        </td>
    </tr>
  );
}

UserListItem.propTypes = {
    user: PropTypes.shape({
    Id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    Name: PropTypes.string}),
    changeAppMode: PropTypes.func.isRequired
};

UserListItem.defaultProps = {
    user: {},
    changeAppMode: (a,b) => {}
};
