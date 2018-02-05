import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const SQLLITE_BASE_URL = 'http://localhost:3000';

export {getRepos, getUserData, getFollowers, 
	getUsers, saveUser, deleteAllUsers, 
	deleteUser};

function getRepos(username) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get(url).then(response => response.data);
}

function getUserData(username) {
  return axios.all([
    axios.get(`${BASE_URL}/users/${username}`),
    axios.get(`${BASE_URL}/users/${username}/orgs`),
  ])
  .then(([user, orgs]) => ({
    user: user.data,
    orgs: orgs.data,
  }));
}


function getFollowers(username) {
	  const url = `${BASE_URL}/users/${username}/followers`;
	  return axios.get(url).then(response => response.data);
}

function getUsers() {
	  const url = `${SQLLITE_BASE_URL}/users`;
	  return axios.get(url).then(response => response.data.rows);
}

function saveUser(data) {	
	  const url = `${SQLLITE_BASE_URL}/user`;
	  return axios.post(url, data).then(response => response.data.rowid);
}

function deleteAllUsers(data) {	
	  const url = `${SQLLITE_BASE_URL}/users`;
	  return axios.delete(url).then(response => response.data.rowid);
}

function deleteUser(id) {	
	  const url = `${SQLLITE_BASE_URL}/user/${id}`;
	  return axios.delete(url).then(response => response.data.rowid);
}