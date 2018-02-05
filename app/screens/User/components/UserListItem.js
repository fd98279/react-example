import React, { PropTypes } from "react";

export default UserListItem;

function UserListItem({ user, changeAppMode }) {
  const tdStyle = {
    marginRight: "10px"
  };

  return (
    <tr>
      <td>{user.Id}</td>
      <td>{user.Name}</td>
      <td>
        <button onClick={() => changeAppMode("update", user)} className="btn btn-primary m-r-1em" 
        	style={tdStyle}>Edit </button>
        <button onClick={() => changeAppMode("delete", user)} className="btn btn-danger" 
        	style={tdStyle}>Delete </button>
      </td>
    </tr>
  );
}

UserListItem.propTypes = {
  user: PropTypes.shape({
    Id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    Name: PropTypes.string
  }),
  changeAppMode: PropTypes.func.isRequired
};

UserListItem.defaultProps = {
  user: {},
  changeAppMode: () => {}
};
